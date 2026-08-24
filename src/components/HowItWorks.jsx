const steps = [
  ['01', 'Skicka din ansökan', 'Fyll i formuläret med information om din restaurang. Det tar bara några minuter.'],
  ['02', 'Vi kontaktar dig', 'En av våra säljare hör av sig inom två arbetsdagar och hjälper dig vidare.'],
  ['03', 'Börja ta emot order', 'Vi lägger upp din restaurang och meny. Sedan är du redo att nå nya kunder.'],
];

export default function HowItWorks() {
  return (
    <section className="section section-tint" id="sa-fungerar-det">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">En smidig start</p>
          <h2>Kom igång i tre enkla steg</h2>
        </div>
        <ol className="steps-list">
          {steps.map(([number, title, text]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
