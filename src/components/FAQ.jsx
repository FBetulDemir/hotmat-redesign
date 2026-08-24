import { useState } from 'react';
import { faqItems } from '../data/faq.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="section" id="vanliga-fragor">
      <div className="container faq-content">
        <h2>Vanliga frågor</h2>
        <div className="accordion">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={isOpen ? 'accordion-item is-open' : 'accordion-item'} key={item.question}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                    {item.question}<span className={isOpen ? 'accordion-chevron is-open' : 'accordion-chevron'} aria-hidden="true">⌄</span>
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
