
'use client'
export default function Dashboard(){
  return (<section className="section"><h1 className="h-display" style={{fontSize:28}}>All Markets</h1>
    <div className="card"><div><h4>BTC close above $70k Friday?</h4><div className="sub">Settle: Fri • Fee 2% • Liquidity: High</div></div>
    <div className="side"><div className="price">YES 63% • NO 37%</div><a className="btn btn-primary" href="/login">Enter</a></div></div>
  </section>)
}
