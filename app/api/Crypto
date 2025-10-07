// Returns top coins with price and 24h change from CoinGecko (free, no key)
import { NextResponse } from "next/server";

const COINGECKO = "https://api.coingecko.com/api/v3/coins/markets";
const qs = new URLSearchParams({
  vs_currency: "usd",
  order: "market_cap_desc",
  per_page: "6",
  page: "1",
  price_change_percentage: "24h",
});

export async function GET() {
  try {
    const r = await fetch(`${COINGECKO}?${qs.toString()}`, {
      next: { revalidate: 60 }, // cache on the edge for 60s
      headers: { "x-cg-demo": "echopredict" }
    });
    if (!r.ok) throw new Error("coingecko failed");
    const data = await r.json();
    const rows = data.map((c: any) => ({
      id: c.id,
      symbol: c.symbol.toUpperCase(),
      name: c.name,
      price: c.current_price,
      change24h: c.price_change_percentage_24h,
      image: c.image,
      marketCap: c.market_cap
    }));
    return NextResponse.json({ ok: true, rows });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
