import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '24/7', text: 'Emergency & OPD services' },
  { icon: '+', text: 'Multiple specialties under one roof' },
  { icon: '★', text: 'Experienced medical professionals' },
]

function About() {
  const [ref, isVisible] = useScrollReveal()
  return (
    <section id="about" ref={ref} className={`section about ${isVisible ? 'reveal' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Care That Never Sleeps</h2>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              At Ziva Multispeciality Hospital, we believe exceptional healthcare should be accessible whenever you need it. Our state-of-the-art facility in Sunny Enclave, Mundi Kharar is committed to providing comprehensive medical care with compassion and precision—day or night.
            </p>
            <ul className="about-features">
              {features.map(({ icon, text }) => (
                <li key={text}>
                  <span className="feature-icon">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-visual">
            <div className="visual-card" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
