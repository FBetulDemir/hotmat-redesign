import { useEffect, useState } from 'react';

const navigationLinks = [
  { href: '#for-restauranger', label: 'För restauranger' },
  { href: '#sa-fungerar-det', label: 'Så fungerar det' },
  { href: '#priser', label: 'Priser' },
  { href: '#vanliga-fragor', label: 'Vanliga frågor' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="hotmat-logo" href="#top" aria-label="Hotmat, gå till sidans början">
          <span className="hotmat-logo-mark" aria-hidden="true">H</span>
          <span>hotmat</span>
        </a>

        <nav className="desktop-navigation" aria-label="Huvudnavigering">
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="login-link" href="https://www.hotmat.se/login.php">Logga in</a>
          <a className="button header-cta" href="#anslut">Anslut din restaurang</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={menuOpen ? 'mobile-navigation is-open' : 'mobile-navigation'}
        aria-label="Mobilnavigering"
      >
        <div className="container mobile-navigation-inner">
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="mobile-login-link" href="https://www.hotmat.se/login.php" onClick={closeMenu}>Logga in</a>
          <a className="button mobile-cta" href="#anslut" onClick={closeMenu}>Anslut din restaurang</a>
        </div>
      </nav>
    </header>
  );
}
