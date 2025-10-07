export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>This is your live feed. (Connect Firebase & cron endpoints to populate content.)</p>
      <ul className="list-disc pl-6">
        <li>Predictions auto-generate hourly</li>
        <li>Click a prompt to participate</li>
        <li>Enable push notifications (once keys are set)</li>
      </ul>
    </div>
  );
}
