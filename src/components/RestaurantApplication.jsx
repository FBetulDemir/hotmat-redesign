import { useState } from 'react';

const initialForm = {
  restaurantName: '', organizationNumber: '', address: '', city: '',
  phone: '', email: '', firmatecknare: '', ownerMobile: '',
  bank: '', accountNumber: '', ownerPersonnummer: '',
};

const stepFields = [
  ['restaurantName', 'organizationNumber', 'address', 'city'],
  ['phone', 'email', 'firmatecknare', 'ownerMobile'],
  ['bank', 'accountNumber', 'ownerPersonnummer'],
  [],
];

const progressLabels = ['Om restaurangen', 'Kontaktuppgifter', 'Utbetalning', 'Granska'];

export default function RestaurantApplication() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = ({ target }) => {
    const { name, type, checked, value } = target;
    setFormData((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validateStep = () => {
    const nextErrors = {};
    stepFields[step].forEach((field) => {
      if (!formData[field] || (typeof formData[field] === 'string' && !formData[field].trim())) nextErrors[field] = 'Fältet behöver fyllas i.';
    });
    if (step === 1 && !/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Ange en giltig e-postadress.';
    if (step === 1 && formData.phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Ange ett giltigt telefonnummer.';
    if (step === 1 && formData.ownerMobile.replace(/\D/g, '').length < 7) nextErrors.ownerMobile = 'Ange ett giltigt mobilnummer.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((current) => Math.min(current + 1, 3));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateStep()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section application-section" id="anslut">
        <div className="container application-card application-success" role="status">
          <span className="application-success-icon" aria-hidden="true">✓</span>
          <p className="section-label">Ansökan skickad</p>
          <h2>Tack, {formData.firmatecknare}!</h2>
          <p>Vi har tagit emot ansökan för {formData.restaurantName}. En av våra säljare kontaktar dig inom två arbetsdagar.</p>
          <button className="button button-secondary-action" type="button" onClick={() => { setSubmitted(false); setStep(0); setFormData(initialForm); }}>Skicka en ny ansökan</button>
        </div>
      </section>
    );
  }

  const field = (name, label, options = {}) => (
    <div className={options.wide ? 'form-field form-field-full-width' : 'form-field'}>
      <label htmlFor={name}>
        {label} <span className="required-indicator" aria-hidden="true">*</span>
        <span className="visually-hidden"> (obligatoriskt)</span>
      </label>
      <input id={name} name={name} required value={formData[name]} onChange={updateField} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} {...options.input} />
      {errors[name] && <span className="form-field-error" id={`${name}-error`}>{errors[name]}</span>}
    </div>
  );

  return (
    <section className="section application-section" id="anslut">
      <div className="container application-heading">
        <h2>Anslut din restaurang</h2>
        <p>Fyll i dina uppgifter så kontaktar vi dig inom två arbetsdagar.</p>
      </div>
      <div className="container application-card">
        <ol className="application-progress" aria-label="Ansökans steg">
          {progressLabels.map((label, index) => (
            <li className={index <= step ? 'is-reached' : ''} aria-current={index === step ? 'step' : undefined} key={label}>
              <span>{index < step ? '✓' : index + 1}</span><small>{label}</small>
            </li>
          ))}
        </ol>
        <form onSubmit={handleSubmit} noValidate>
          {step === 0 && (
            <fieldset>
              <legend>Om restaurangen</legend>
              <p className="form-step-description">Grundläggande information om din verksamhet.</p>
              <div className="form-fields">
                {field('restaurantName', 'Restaurangens namn', { input: { autoComplete: 'organization', placeholder: 'T.ex. Pizzeria Roma' } })}
                {field('organizationNumber', 'Organisationsnummer', { input: { inputMode: 'numeric', placeholder: '556123-4567' } })}
                {field('address', 'Restaurangens adress', { wide: true, input: { autoComplete: 'street-address', placeholder: 'Storgatan 12' } })}
                {field('city', 'Stad', { wide: true, input: { autoComplete: 'address-level2', placeholder: 'Stockholm' } })}
              </div>
            </fieldset>
          )}
          {step === 1 && (
            <fieldset>
              <legend>Kontaktuppgifter</legend>
              <p className="form-step-description">Vem ska vi kontakta om restaurangens ansökan?</p>
              <div className="form-fields">
                {field('phone', 'Restaurangens telefonnummer', { input: { type: 'tel', autoComplete: 'tel', placeholder: '010-123 45 67' } })}
                {field('email', 'E-postadress', { input: { type: 'email', autoComplete: 'email', placeholder: 'namn@restaurang.se' } })}
                {field('firmatecknare', 'Firmatecknare', { input: { autoComplete: 'name', placeholder: 'För- och efternamn' } })}
                {field('ownerMobile', 'Ägarens mobilnummer', { input: { type: 'tel', autoComplete: 'tel', placeholder: '070-123 45 67' } })}
              </div>
            </fieldset>
          )}
          {step === 2 && (
            <fieldset>
              <legend>Uppgifter för utbetalning</legend>
              <p className="form-step-description">Informationen används för att betala ut restaurangens intäkter.</p>
              <aside className="privacy-notice">
                Dina uppgifter behandlas konfidentiellt och används enbart för att administrera utbetalningar.
              </aside>
              <div className="form-fields">
                {field('bank', 'Bank', { wide: true, input: { autoComplete: 'off', placeholder: 'T.ex. Swedbank, SEB, Handelsbanken' } })}
                {field('accountNumber', 'Kontonummer / Bankgironummer', { wide: true, input: { inputMode: 'numeric', autoComplete: 'off', placeholder: 'T.ex. 8327-9, 123 45 67-8' } })}
                {field('ownerPersonnummer', 'Ägarens personnummer', { wide: true, input: { inputMode: 'numeric', autoComplete: 'off', placeholder: 'ÅÅMMDD-XXXX' } })}
              </div>
            </fieldset>
          )}
          {step === 3 && (
            <fieldset>
              <legend>Granska din ansökan</legend>
              <p className="form-step-description">Kontrollera att uppgifterna stämmer innan du skickar.</p>
              <dl className="application-review">
                <div><dt>Restaurang</dt><dd>{formData.restaurantName}</dd></div>
                <div><dt>Organisationsnummer</dt><dd>{formData.organizationNumber}</dd></div>
                <div><dt>Adress</dt><dd>{formData.address}, {formData.city}</dd></div>
                <div><dt>Firmatecknare</dt><dd>{formData.firmatecknare}</dd></div>
                <div><dt>Kontakt</dt><dd>{formData.phone}<br />{formData.email}<br />{formData.ownerMobile}</dd></div>
                <div><dt>Utbetalning</dt><dd>{formData.bank}<br />{formData.accountNumber}<br />{formData.ownerPersonnummer.replace(/\d(?=\d{4})/g, '•')}</dd></div>
              </dl>
            </fieldset>
          )}
          <div className="application-navigation">
            {step > 0 && <button className="button button-secondary-action" type="button" onClick={() => setStep((current) => current - 1)}>Tillbaka</button>}
            {step < 3 ? <button className="button" type="button" onClick={nextStep}>Nästa <span aria-hidden="true">›</span></button> : <button className="button" type="submit">Skicka ansökan</button>}
          </div>
        </form>
      </div>
    </section>
  );
}
