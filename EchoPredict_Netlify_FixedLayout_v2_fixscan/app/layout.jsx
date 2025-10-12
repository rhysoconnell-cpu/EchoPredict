
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'EchoPredict',
  description: 'Warm, trust-first UI • Monetized • Mobile-first'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      <nav className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/"><span className="logo"></span>EchoPredict</Link>
          <div className="nav-actions">
            <Link className="btn" href="/dashboard">Markets</Link>
            <Link className="btn" href="/pricing">Pricing</Link>
            <Link className="btn btn-primary" href="/login">Join</Link>
          </div>
        </div>
      </nav>
      <main className="container">{{children}}</main>
      <footer className="footer"><div className="container">© 2025 EchoPredict</div></footer>
    </body></html>
  )
}
