const steps = [
  ['01', 'Anslut din restaurang', 'Skicka in dina uppgifter och berätta om din verksamhet.'],
  ['02', 'Vi hjälper dig komma igång', 'Hotmat hjälper till med uppsättning och förberedelser.'],
  ['03', 'Börja ta emot beställningar', 'Nå nya kunder och hantera dina beställningar via Hotmat.'],
];

export default function HowItWorks() {
  return (
    <section className="section section-light-background" id="sa-fungerar-det">
      <div className="container">
        <div className="section-introduction section-introduction-compact">
          <h2>Kom igång med Hotmat</h2>
          <p>Tre enkla steg och du är igång.</p>
        </div>
        <ol className="onboarding-steps">
          {steps.map(([number, title, text]) => (
            <li key={number}>
              <span className="onboarding-step-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
