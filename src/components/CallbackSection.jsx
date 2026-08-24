import { useState } from 'react';

const platformFacts = [
  { value: '500+', label: 'Restauranger & butiker' },
  { value: '50+', label: 'Städer i Sverige' },
  { value: 'Sedan 2015', label: 'Beprövad plattform' },
];

export default function CallbackSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [requested, setRequested] = useState(false);

  const requestCallback = (event) => {
    event.preventDefault();
    if (phoneNumber.replace(/\D/g, '').length < 7) {
      setError('Ange ett giltigt mobilnummer.');
      return;
    }

    setError('');
    setRequested(true);
  };

  return (
    <>
      <section className="contact-request-section" aria-labelledby="contact-request-title">
        <div className="container contact-request-content">
          <h2 id="contact-request-title">Har du några frågor?</h2>
          <p>Inte redo att ansluta ännu? Lämna ditt telefonnummer så kontaktar vi dig inom två arbetsdagar.</p>
          {requested ? (
            <p className="callback-confirmation" role="status">Tack! Vi kontaktar dig inom två arbetsdagar.</p>
          ) : (
            <form className="callback-form" onSubmit={requestCallback} noValidate>
              <label htmlFor="callback-phone">Mobilnummer</label>
              <input
                id="callback-phone"
                name="callback-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="070-123 45 67"
                value={phoneNumber}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'callback-phone-error' : undefined}
                onChange={(event) => { setPhoneNumber(event.target.value); setError(''); }}
              />
              {error && <span className="callback-form-error" id="callback-phone-error">{error}</span>}
              <button className="button button-secondary-action" type="submit">Jag vill bli kontaktad</button>
            </form>
          )}
        </div>
      </section>

      <aside className="platform-facts-section" aria-label="Hotmat i Sverige">
        <dl className="container platform-facts-list">
          {platformFacts.map((fact) => (
            <div className="platform-fact" key={fact.label}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <section className="final-cta-section hotmat-legacy-pattern" aria-labelledby="final-cta-title">
        <div className="container final-cta-content">
          <h2 id="final-cta-title">Redo att nå fler kunder?</h2>
          <p>Anslut din restaurang till Hotmat och kom igång.</p>
          <div className="final-cta-actions">
            <a className="button final-cta-primary" href="#anslut">Anslut din restaurang</a>
            <a className="button final-cta-secondary" href="mailto:info@hotmat.se">Kontakta oss</a>
          </div>
        </div>
      </section>
    </>
  );
}
