
'use client'
export default function Pricing(){
  return (<section className="section"><h1 className="h-display" style={{fontSize:32}}>Choose your plan</h1>
    <div className="pricing">
      <article className="tier"><h3>Starter</h3><div className="price">$19/mo</div><ul><li>Public markets</li><li>Daily signals</li></ul><button className="btn btn-primary">Upgrade</button></article>
      <article className="tier"><h3>Pro</h3><div className="price">$49/mo</div><ul><li>Advanced signals</li><li>Creator dashboard</li></ul><button className="btn btn-primary">Upgrade</button></article>
      <article className="tier"><h3>Creator+</h3><div className="price">$149/mo</div><ul><li>Launch markets</li><li>Revenue share</li></ul><button className="btn btn-primary">Upgrade</button></article>
    </div></section>)
}
