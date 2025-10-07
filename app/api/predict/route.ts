import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // body.type: "crypto" | "nba"
    // body.sample: for crypto -> { change24h, change7d? }, for nba -> { homeRating, awayRating }
    const { type, sample } = body || {};

    let prob = 0.5;
    let rationale = "Baseline 50% due to limited signals.";

    if (type === "crypto" && typeof sample?.change24h === "number") {
      // Simple momentum transform → logistic to 0..1
      const x = Math.max(-20, Math.min(20, sample.change24h));
      const logistic = 1 / (1 + Math.exp(-x / 4)); // steeper around 0
      prob = Number(logistic.toFixed(3));
      rationale = `Momentum heuristic using 24h change (${sample.change24h.toFixed(2)}%).`;
    }

    if (type === "nba" && typeof sample?.homeRating === "number" && typeof sample?.awayRating === "number") {
      const diff = sample.homeRating - sample.awayRating;
      const logistic = 1 / (1 + Math.exp(-diff / 5));
      prob = Number(logistic.toFixed(3));
      rationale = `Rating differential heuristic (home-away = ${diff.toFixed(1)}).`;
    }

    // Optional: LLM rationale if key exists
    const key = process.env.OPENAI_API_KEY;
    if (key && typeof fetch !== "undefined") {
      try {
        const prompt = `Provide a one-sentence professional rationale for a probability ${prob} based on ${JSON.stringify(sample)}. No emojis.`;
        const r = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 60,
            temperature: 0.2
          })
        });
        const j = await r.json();
        const text = j?.choices?.[0]?.message?.content?.trim();
        if (text) rationale = text;
      } catch {}
    }

    return NextResponse.json({ ok: true, prob, rationale });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
  }
}

