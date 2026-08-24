export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="hotmat-logo hotmat-logo-on-dark" href="#top" aria-label="Hotmat, tillbaka till toppen"><img className="hotmat-logo-image" src="/hotmat-logo.svg" alt="" /></a>
          <p>Restaurangernas favorittjänst på nätet.</p>
        </div>
        <nav aria-label="Genvägar"><h2>Genvägar</h2><a href="#for-restauranger">För restauranger</a><a href="#sa-fungerar-det">Så fungerar det</a><a href="#priser">Priser</a><a href="#anslut">Anslut restaurang</a></nav>
        <div><h2>Kontakt</h2><a href="mailto:info@hotmat.se">info@hotmat.se</a><a href="tel:+46103333318">010-333 33 18</a><address>Björkhagsgatan 9<br />531 40 Lidköping</address></div>
      </div>
      <div className="container footer-bottom"><small>© {new Date().getFullYear()} Hotmat.se Sverige AB</small><a href="https://www.hotmat.se" target="_blank" rel="noreferrer">Till hotmat.se</a></div>
    </footer>
  );
}
