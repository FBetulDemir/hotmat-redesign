export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-label">För restauranger</p>
          <h1>Fler beställningar.<br /><span>Enklare vardag.</span></h1>
          <p className="hero-lead">Anslut din restaurang till Hotmat och nå fler kunder utan fasta månadsavgifter eller bindningstid.</p>
          <div className="hero-actions">
            <a className="button" href="#anslut">Anslut din restaurang</a>
            <a className="secondary-action-link" href="#sa-fungerar-det">Se hur det fungerar <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-note"><span aria-hidden="true">✓</span> 500+ restauranger och butiker i över 50 svenska städer</p>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=800&h=600&fit=crop&auto=format"
            alt="Kock som förbereder mat i ett professionellt restaurangkök"
          />
        </div>
      </div>
    </section>
  );
}
