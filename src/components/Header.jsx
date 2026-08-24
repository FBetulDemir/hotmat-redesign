import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Hotmat för restauranger, startsida">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>hotmat</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Huvudmeny">
          <a href="#varfor" onClick={closeMenu}>Varför Hotmat?</a>
          <a href="#sa-fungerar-det" onClick={closeMenu}>Så fungerar det</a>
          <a href="#priser" onClick={closeMenu}>Priser</a>
          <a href="#fragor" onClick={closeMenu}>Vanliga frågor</a>
          <a className="button button-small" href="#ansok" onClick={closeMenu}>Anslut restaurang</a>
        </nav>
      </div>
    </header>
  );
}
