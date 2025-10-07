
export default function Dashboard(){
  return (
    <section style={{padding:'26px 0'}}>
      <h1 style={{fontSize:28, marginBottom:8}}>Live Predictions</h1>
      <p style={{color:'#9aa4b2'}}>Connect your keys to populate real-time topics. This is a demo view.</p>
      <div className="card-grid" style={{marginTop:16}}>
        {['Sports tonight', 'Crypto this week', 'Culture & news'].map((t,i)=>(
          <div className="card" key={i}>
            <h3>{t}</h3>
            <p>Auto-generated trending prompts appear here hourly.</p>
            <a className="btn" href="/account">Enter</a>
          </div>
        ))}
      </div>
    </section>
  );
}
