const stats = [
  ['500+', 'anslutna restauranger'],
  ['50+', 'städer i Sverige'],
  ['8%', 'provision'],
  ['0 kr', 'i månadsavgift'],
];

export default function Stats() {
  return (
    <aside className="stats" aria-label="Hotmat i siffror">
      <div className="container stats-grid">
        {stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </div>
    </aside>
  );
}
