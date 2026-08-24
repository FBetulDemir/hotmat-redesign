import { useState } from 'react';
import { faqItems } from '../data/faq.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="vanliga-fragor">
      <div className="container faq-layout">
        <div className="faq-heading">
          <p className="eyebrow">Vanliga frågor</p>
          <h2>Det här brukar restauranger undra</h2>
          <p>Hittar du inte svaret? Hör av dig så hjälper vi dig.</p>
        </div>
        <div className="accordion">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={isOpen ? 'accordion-item is-open' : 'accordion-item'} key={item.question}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                    {item.question}<span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div className="accordion-panel" id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={!isOpen}><p>{item.answer}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
