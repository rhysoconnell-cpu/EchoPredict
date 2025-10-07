
export default function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <span style={{color:'#22d3ee', fontSize:12, fontWeight:600, letterSpacing:1}}>AI • SKILL-BASED • CREATOR-PAID</span>
          <h1>Predict what’s next — and get paid for being right.</h1>
          <p>EchoPredict turns trending moments into skill challenges. Join predictions, climb the leaderboard, and share in revenue from subscriptions and affiliates.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:16}}>
            <a className="btn" href="/dashboard">Open Dashboard</a>
            <a className="btn ghost" href="/creator">Become a Creator</a>
          </div>
        </div>
        <div className="panel">
          <div className="kpis">
            <div className="kpi"><div style={{opacity:.7,fontSize:12}}>Active topics</div><div style={{fontSize:22,fontWeight:700}}>128</div></div>
            <div className="kpi"><div style={{opacity:.7,fontSize:12}}>Accuracy (top)</div><div style={{fontSize:22,fontWeight:700,color:'#22c55e'}}>74%</div></div>
            <div className="kpi"><div style={{opacity:.7,fontSize:12}}>Creators</div><div style={{fontSize:22,fontWeight:700}}>312</div></div>
            <div className="kpi"><div style={{opacity:.7,fontSize:12}}>24h entries</div><div style={{fontSize:22,fontWeight:700}}>6,201</div></div>
          </div>
          <table className="table">
            <tbody>
              {[
                {q:'Will BTC close above $70k Friday?', closes:'Fri', tag:'Hot'},
                {q:'Warriors win by 4+ vs Lakers?', closes:'Tonight', tag:'Trending'},
                {q:'ETH flips SOL this month?', closes:'30d', tag:'New'}
              ].map((r,i)=>(
                <tr key={i} className="tr">
                  <td className="td" style={{width:'100%'}}>
                    <div className="row">
                      <div style={{display:'flex',flexDirection:'column'}}>
                        <strong>{r.q}</strong>
                        <span style={{color:'#9aa4b2', fontSize:13}}>Closes: {r.closes}</span>
                      </div>
                      <div><a className="btn ghost" href="/dashboard">View</a></div>
                      <div><a className="btn" href="/account">Enter</a></div>
                      <div style={{textAlign:'right', alignSelf:'center'}}>
                        <span style={{display:'inline-block',padding:'3px 10px',borderRadius:999,fontSize:12,background:'rgba(34,211,238,.15)',color:'#22d3ee'}}>{r.tag}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{marginTop:24}}>
        <div className="card-grid">
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
        </div>
      </section>
    </div>
  );
}
