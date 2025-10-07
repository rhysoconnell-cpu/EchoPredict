"use client";
import { useEffect, useState } from "react";

type Coin = {
  id: string; symbol: string; name: string;
  price: number; change24h: number; image: string; marketCap: number;
};
type Game = { id: string; home: string; away: string; time: string; venue: string; status: string };

export default function Dashboard() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [c, g] = await Promise.all([
          fetch("/api/crypto/markets").then(r => r.json()),
          fetch("/api/sports/nba").then(r => r.json()),
        ]);
        if (c?.ok) setCoins(c.rows);
        if (g?.ok) setGames(g.events);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function predictCrypto(change24h: number) {
    const r = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "crypto", sample: { change24h } }),
    }).then(r => r.json());
    return r;
  }

  async function predictNBA(home: string, away: string) {
    // simple demo ratings (replace with real team models later)
    const homeRating = 80, awayRating = 78;
    const r = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "nba", sample: { home, away, homeRating, awayRating } }),
    }).then(r => r.json());
    return r;
  }

  return (
    <section style={{ padding: "26px 0" }}>
      <h1 style={{ fontSize: 26, marginBottom: 12 }}>Live Dashboard</h1>
      {loading && <p style={{ opacity: .7 }}>Loading feeds…</p>}

      {/* Crypto */}
      <h2 style={{ marginTop: 20, marginBottom: 8 }}>Crypto Markets</h2>
      <div className="card-grid" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3,1fr)" }}>
        {coins.map(c => (
          <div key={c.id} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={c.image} alt={c.symbol} width={20} height={20} style={{ borderRadius: 6 }} />
              <strong>{c.name} ({c.symbol})</strong>
            </div>
            <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between" }}>
              <span>${c.price.toLocaleString()}</span>
              <span style={{ color: c.change24h >= 0 ? "var(--ok)" : "#ef4444" }}>
                {c.change24h?.toFixed(2)}%
              </span>
            </div>
            <button
              className="btn"
              style={{ marginTop: 10 }}
              onClick={async () => {
                const r = await predictCrypto(c.change24h);
                alert(`Probability up next period: ${(r.prob * 100).toFixed(1)}%\\n${r.rationale}`);
              }}
            >
              Predict trend
            </button>
          </div>
        ))}
      </div>

      {/* NBA */}
      <h2 style={{ marginTop: 28, marginBottom: 8 }}>NBA Today</h2>
      <div className="card-grid" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2,1fr)" }}>
        {games.map(g => (
          <div key={g.id} className="card">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{g.home}</strong><span style={{ opacity: .6 }}>vs</span><strong>{g.away}</strong>
            </div>
            <div style={{ marginTop: 6, opacity: .7, fontSize: 13 }}>
              {g.time} • {g.venue || g.status}
            </div>
            <button
              className="btn"
              style={{ marginTop: 10 }}
              onClick={async () => {
                const r = await predictNBA(g.home, g.away);
                alert(`${g.home} win probability: ${(r.prob * 100).toFixed(1)}%\\n${r.rationale}`);
              }}
            >
              Predict winner
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
