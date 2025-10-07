export default function AdminMetrics(){
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Admin Metrics</h1>
      <p>Connect Firebase & Stripe keys in Netlify to enable live metrics.</p>
      <ul className="list-disc pl-6 text-sm opacity-80">
        <li>Users / Pro users</li>
        <li>Predictions / Entries</li>
        <li>MRR and last-30-day revenue</li>
      </ul>
    </div>
  );
}
