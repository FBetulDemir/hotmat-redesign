const stats = [
  {
    number: '0 kr',
    label: 'Månadsavgift',
    icon: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="m9 15 2 2 4-4" /></>,
  },
  {
    number: '0 kr',
    label: 'Serviceavgift',
    icon: <><path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" /><path d="M9 12h6" /></>,
  },
  {
    number: '8%',
    label: 'Provision',
    icon: <><circle cx="12" cy="12" r="9" /><path d="m8.5 15.5 7-7M9 9h.01M15 15h.01" /></>,
  },
  {
    number: '500+',
    label: 'Restauranger & butiker',
    icon: <><path d="M4 10v10h16V10M3 10l2-6h14l2 6" /><path d="M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2M9 20v-5h6v5" /></>,
  },
];

export default function Stats() {
  return (
    <section className="statistics-section" aria-labelledby="stats-title">
      <h2 className="visually-hidden" id="stats-title">Avgifter och statistik</h2>
      <div className="container">
        <ul className="statistics-list">
          {stats.map(({ number, label, icon }) => (
            <li className="statistics-item" key={label}>
              <svg className="statistics-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                {icon}
              </svg>
              <strong>{number}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
