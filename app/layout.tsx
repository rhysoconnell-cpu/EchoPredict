export const metadata = { title: "EchoPredict", description: "Skill-based social predictions" };
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="p-4 border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between">
            <a href="/" className="font-bold">EchoPredict</a>
            <nav className="text-sm space-x-4">
              <a href="/dashboard">Dashboard</a>
              <a href="/admin/metrics">Admin</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
