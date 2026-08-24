const benefits = [
  {
    title: 'Ingen bindningstid',
    text: 'Du kan använda Hotmat utan långa avtal.',
    icon: <><rect x="5" y="6" width="14" height="14" rx="2" /><path d="M8 4v4M16 4v4M5 10h14M9 14h6" /></>,
  },
  {
    title: 'Inga fasta kostnader',
    text: 'Du betalar när du faktiskt får beställningar.',
    icon: <><circle cx="12" cy="12" r="8" /><path d="M14.5 9.5c-.5-.5-1.3-.8-2.3-.8-1.3 0-2.2.7-2.2 1.7 0 2.6 4.5 1.2 4.5 3.8 0 1.1-1 1.9-2.4 1.9-1 0-1.9-.3-2.6-.9M12 7v10" /></>,
  },
  {
    title: 'Nå fler kunder',
    text: 'Gör din restaurang tillgänglig för fler kunder i ditt område.',
    icon: <><circle cx="12" cy="8" r="3" /><circle cx="6" cy="11" r="2" /><circle cx="18" cy="11" r="2" /><path d="M7 19v-2a5 5 0 0 1 10 0v2M2.5 19v-1a3.5 3.5 0 0 1 4-3.5M21.5 19v-1a3.5 3.5 0 0 0-4-3.5" /></>,
  },
  {
    title: 'Personlig support',
    text: 'Vi finns här när du behöver hjälp.',
    icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m6.5 6.5 2.7 2.7M14.8 14.8l2.7 2.7M17.5 6.5l-2.7 2.7M9.2 14.8l-2.7 2.7" /></>,
  },
];

export default function WhyHotmat() {
  return (
    <section className="section" id="for-restauranger">
      <div className="container">
        <div className="section-introduction">
          <h2>Mer till restaurangen</h2>
          <p>Hotmats affärsidé är enkel — vi skapar värde för restauranger genom att ge tillbaka så mycket som möjligt. Vi växer när våra restaurangpartners växer.</p>
        </div>
        <div className="restaurant-benefits-list">
          {benefits.map((benefit) => (
            <article className="restaurant-benefit" key={benefit.title}>
              <span className="restaurant-benefit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">{benefit.icon}</svg>
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
