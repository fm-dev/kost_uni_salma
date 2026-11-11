import { FAQS } from "@/data/kosData";

export default function FAQAccordion() {
  return <div className="faq-container">{FAQS.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-symbol" aria-hidden="true" /></summary><p className="faq-answer">{faq.answer}</p></details>)}</div>;
}
