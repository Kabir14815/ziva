import { useState } from 'react'

const faqs = [
  {
    q: 'What are your operating hours?',
    a: 'Ziva Multispeciality Hospital is open 24 hours a day, 7 days a week. Our emergency services are available round the clock.',
  },
  {
    q: 'Do you handle emergencies?',
    a: 'Yes. Our emergency department operates 24/7 with trained staff and critical care facilities. No appointment is needed for emergencies.',
  },
  {
    q: 'Where is the hospital located?',
    a: 'We are Located on Chandigarh-Kharar Highway, Opposite Pillar No. 16, Adjoining Hotel Harmony, Mundi Kharar, Punjab 140301.',
  },
  {
    q: 'What specialties do you offer?',
    a: 'We offer general medicine, emergency care, diagnostics, lab services, imaging, and specialist consultations across multiple medical disciplines.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <button className="faq-question" aria-expanded={isOpen}>
        {q}
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq-grid">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                {...item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
