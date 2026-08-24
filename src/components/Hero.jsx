export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">För restauranger som vill växa</p>
          <h1>Fler beställningar.<br /><span>Mer kvar till dig.</span></h1>
          <p className="hero-lead">Nå nya kunder, behåll mer av intäkterna och få en personlig partner som hjälper din restaurang att växa.</p>
          <div className="hero-actions">
            <a className="button" href="#ansok">Anslut din restaurang</a>
            <a className="text-link" href="#sa-fungerar-det">Se hur det fungerar <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-note"><span aria-hidden="true">✓</span> Ingen bindningstid &nbsp; <span aria-hidden="true">✓</span> Ingen månadsavgift</p>
        </div>
        <div className="hero-visual" aria-label="Exempel på en beställning i Hotmat">
          <div className="food-orbit food-orbit-one" aria-hidden="true">🍕</div>
          <div className="food-orbit food-orbit-two" aria-hidden="true">🥗</div>
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><span>● ◔</span></div>
            <div className="phone-brand"><span className="brand-mark">H</span> hotmat</div>
            <p className="order-label">Ny beställning</p>
            <div className="order-row"><span>2 × Margherita</span><strong>218 kr</strong></div>
            <div className="order-row"><span>1 × Caesarsallad</span><strong>129 kr</strong></div>
            <div className="order-total"><span>Totalt</span><strong>347 kr</strong></div>
            <div className="order-status"><span aria-hidden="true">✓</span> Beställningen är bekräftad</div>
          </div>
          <div className="rating-card"><strong>4,8</strong><span aria-label="5 stjärnor">★★★★★</span><small>Kundbetyg</small></div>
        </div>
      </div>
    </section>
  );
}
