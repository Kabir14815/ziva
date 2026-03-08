import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Exceptional care at Ziva. The doctors and staff were compassionate and professional. Highly recommend!',
    author: 'Priya S.',
    role: 'Patient',
  },
  {
    quote: '24/7 availability saved us during an emergency. Quick response and excellent medical attention.',
    author: 'Rahul M.',
    role: 'Patient',
  },
  {
    quote: 'Clean facility, skilled specialists, and affordable care. Ziva has become our family hospital.',
    author: 'Anita K.',
    role: 'Patient',
  },
]

function TestimonialCard({ quote, author, role, delay }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`testimonial-card card-3d ${isVisible ? 'reveal' : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-author">
        <strong>{author}</strong>
        <span>{role}</span>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} {...t} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
