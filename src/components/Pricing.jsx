const prices = [
  { label: 'Startavgift', price: '1 799 kr', note: 'dras vid avräkning' },
  { label: 'Månadsavgift', price: '0 kr', free: true },
  { label: 'Serviceavgift', price: '0 kr', free: true },
  { label: 'Provision', price: '8%', note: 'per order' },
];

export default function Pricing() {
  return (
    <section className="section pricing-section" id="priser">
      <div className="container pricing-layout">
        <div className="pricing-copy">
          <h2>En enkel prismodell</h2>
          <p>Startavgiften dras vid avräkning. Du får ingen separat faktura utan betalar när du börjar få beställningar genom Hotmat.</p>
          <p className="pricing-badge"><span aria-hidden="true">✓</span> Inga fasta månadskostnader</p>
        </div>
        <article className="price-card" aria-labelledby="partner-plan-title">
          <header className="price-card-header">
            <h3 id="partner-plan-title">Hotmat Partner</h3>
            <p>Allt du behöver för att komma igång</p>
          </header>
          <dl className="price-list">
            {prices.map(({ label, price, note, free }) => (
              <div className="price-row" key={label}>
                <dt>{label}</dt>
                <dd className={free ? 'is-free' : ''}>
                  <strong>{price}</strong>
                  {note && <small>{note}</small>}
                </dd>
              </div>
            ))}
          </dl>
          <div className="price-card-action">
            <a className="button" href="#anslut">Anslut din restaurang</a>
          </div>
        </article>
      </div>
    </section>
  );
}
