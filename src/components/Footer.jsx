export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="hotmat-logo" href="#top" aria-label="Hotmat, tillbaka till toppen">
            <img className="hotmat-logo-image" src="/hotmat-logo.svg" alt="" />
          </a>
          <p>Matleverans i Sverige sedan 2015.</p>
        </div>
        <nav aria-label="Restauranglänkar">
          <h2>Restauranger</h2>
          <a href="#for-restauranger">För restauranger</a>
          <a href="#sa-fungerar-det">Så fungerar det</a>
          <a href="#priser">Priser</a>
          <a href="#anslut">Anslut din restaurang</a>
        </nav>
        <nav aria-label="Kontolänkar">
          <h2>Konto</h2>
          <a href="https://www.hotmat.se/login.php">Logga in</a>
          <a href="#vanliga-fragor">Vanliga frågor</a>
        </nav>
        <div>
          <h2>Kontakt</h2>
          <a href="mailto:info@hotmat.se">info@hotmat.se</a>
          <a href="tel:+46103333318">010-333 33 18</a>
          <address>Björkhagsgatan 9<br />531 40 Lidköping</address>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Hotmat.se Sverige AB. Alla rättigheter förbehållna.</small>
        <div><a href="https://www.hotmat.se">Integritetspolicy</a><a href="https://www.hotmat.se">Användarvillkor</a></div>
      </div>
    </footer>
  );
}
