
export const metadata = { title: "EchoPredict", description: "AI skill-based predictions with creator monetization" };
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="container nav-inner">
            <a className="logo" href="/">
              <span className="logo-badge" />
              <span>EchoPredict</span>
            </a>
            <div style={{display:'flex',gap:10}}>
              <a className="btn ghost" href="/dashboard">Dashboard</a>
              <a className="btn" href="/account">Upgrade</a>
            </div>
          </div>
        </nav>
        <main className="container">{children}</main>
        <footer>
          <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
            <div>© 2025 EchoPredict</div>
            <div style={{display:'flex',gap:14}}>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/disclosure">Disclosure</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
