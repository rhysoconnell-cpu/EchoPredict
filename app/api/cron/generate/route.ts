import { NextResponse } from "next/server";
export async function POST(){ return NextResponse.json({ ok: true, message: "Generate cron stub (wire to Firestore in real app)" }); }
