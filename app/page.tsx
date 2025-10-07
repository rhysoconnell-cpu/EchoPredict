export default function Home() {
  return (
    <div>
      <section className="grid-hero">
        <div>
          <div className="tag">AI • SKILL-BASED • CREATOR-PAID</div>
          <h1 className="h1">Predict what’s next — and get paid for being right.</h1>
          <p className="lead">
            EchoPredict turns trending moments into skill challenges. Join predictions, climb the
            leaderboard, and share in revenue from subscriptions and affiliates.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a className="btn" href="/dashboard">Open Dashboard</a>
            <a className="btn ghost" href="/creator">Become a Creator</a>
          </div>
        </div>

        <aside className="panel">
          <div className="kpis">
            <div className="kpi"><div className="label">Active topics</div><div className="value">128</div></div>
            <div className="kpi"><div className="label">Accuracy (top)</div><div className="value" style={{ color: "var(--ok)" }}>74%</div></div>
            <div className="kpi"><div className="label">Creators</div><div className="value">312</div></div>
            <div className="kpi"><div className="label">24h entries</div><div className="value">6,201</div></div>
          </div>

          <table className="table">
            <tbody>
              {[
                { q: "Will BTC close above $70k Friday?", closes: "Fri", tag: "Hot" },
                { q: "Warriors win by 4+ vs Lakers?", closes: "Tonight", tag: "Trending" },
                { q: "ETH flips SOL this month?", closes: "30d", tag: "New" },
              ].map((r, i) => (
                <tr key={i} className="tr">
                  <td className="td">
                    <div className="row">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <strong>{r.q}</strong>
                        <span style={{ color: "#9aa4b2", fontSize: 13 }}>Closes: {r.closes}</span>
                      </div>
                      <div><a className="btn ghost" href="/dashboard">View</a></div>
                      <div><a className="btn" href="/account">Enter</a></div>
                      <div style={{ textAlign: "right", alignSelf: "center" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 10px",
                            borderRadius: 999,
                            fontSize: 12,
                            background: "rgba(34,211,238,.15)",
                            color: "#22d3ee",
                          }}
                        >
                          {r.tag}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Creator Revenue</h3>
          <p>Share affiliate and subscription revenue automatically. Your link, your payout.</p>
        </div>
        <div className="card">
          <h3>Audit-Ready Results</h3>
          <p>Every outcome gets logged publicly. Trust the leaderboard.</p>
        </div>
        <div className="card">
          <h3>Legal: Skill-Based</h3>
          <p>Built for skill challenges, not gambling. Wider distribution, easier growth.</p>
        </div>
      </section>
    </div>
  );
}
