const prices = [
  ['Startavgift', '1 799 kr', 'Engångsavgift som dras vid avräkning'],
  ['Månadsavgift', '0 kr', 'Inga återkommande fasta kostnader'],
  ['Serviceavgift', '0 kr', 'Ingen extra serviceavgift'],
  ['Provision', '8 %', 'Endast på beställningar genom Hotmat'],
];

export default function Pricing() {
  return (
    <section className="section pricing-section" id="priser">
      <div className="container pricing-layout">
        <div className="pricing-copy">
          <p className="eyebrow">Tydliga priser</p>
          <h2>En prismodell utan överraskningar</h2>
          <p>Du betalar bara när du får beställningar. Ingen bindningstid och inga dolda avgifter.</p>
          <a className="text-link" href="#ansok">Bli restaurangpartner <span aria-hidden="true">→</span></a>
        </div>
        <div className="price-card">
          {prices.map(([label, price, description]) => (
            <div className="price-row" key={label}>
              <div><h3>{label}</h3><p>{description}</p></div>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
