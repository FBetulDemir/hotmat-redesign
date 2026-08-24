const benefits = [
  { icon: '↗', title: 'Få fler beställningar', text: 'Bli synlig för hungriga kunder i ditt område och öka din försäljning.' },
  { icon: '%', title: 'Marknadens låga provision', text: 'Med bara 8 % provision får du behålla mer av varje beställning.' },
  { icon: '♡', title: 'Personlig service', text: 'Du får snabb hjälp av människor som känner din restaurang och din marknad.' },
  { icon: '⌁', title: 'Enkelt att komma igång', text: 'Vi hjälper till med meny och upplägg så att du snabbt kan börja ta emot order.' },
];

export default function WhyHotmat() {
  return (
    <section className="section" id="varfor">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Därför väljer restauranger Hotmat</p>
          <h2>En bättre affär för din restaurang</h2>
          <p>Vi växer när våra restaurangpartners växer. Därför har vi byggt en tjänst som är enkel, prisvärd och personlig.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="icon-box" aria-hidden="true">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
