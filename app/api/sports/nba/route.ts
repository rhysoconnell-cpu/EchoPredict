// Today’s NBA events from TheSportsDB (free)
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date().toISOString().slice(0,10); // YYYY-MM-DD
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${today}&l=NBA`;
    const r = await fetch(url, { next: { revalidate: 300 } });
    if (!r.ok) throw new Error("sportsdb failed");
    const data = await r.json();
    const events = (data?.events || []).map((e: any) => ({
      id: e.idEvent,
      home: e.strHomeTeam,
      away: e.strAwayTeam,
      time: e.strTimeLocal || e.strTime,
      venue: e.strVenue,
      status: e.strStatus || "Scheduled"
    }));
    return NextResponse.json({ ok: true, events });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
