import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  { icon: '👶', title: 'Pediatrics', desc: 'Dedicated care for infants and children' },
  { icon: '🧬', title: 'PCOD', desc: 'Comprehensive management and hormonal care for PCOD/PCOS' },
  { icon: '🤰', title: 'High Risk Pregnancy', desc: 'Expert monitoring and care for complex maternal cases' },
  { icon: '⚕️', title: 'OB-GYN', desc: 'Complete women\'s health, obstetrics, and gynaecology services' },
  { icon: '🩹', title: 'Surgery', desc: 'Modern operation theatres and surgical excellence' },
  { icon: '🩺', title: 'General Medicine', desc: 'Complete primary care, health checkups, and preventive medicine' },
  { icon: '👩‍⚕️', title: 'Specialist Consultation', desc: 'Expert care across cardiology, ortho, and more' },
  { icon: '🏥', title: 'Emergency Care', desc: '24/7 emergency & trauma services with critical care' },
  { icon: '💉', title: 'Diagnostics', desc: 'Advanced lab, imaging, CT, and pathology facilities' },
]

function ServiceCard({ icon, title, desc, index }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <article
      ref={ref}
      className={`service-card card-3d ${isVisible ? 'reveal' : ''}`}
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Comprehensive Care</h2>
          <p className="section-desc">
            From emergency care to specialized treatments, Ziva offers a full spectrum of medical services under one roof.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
