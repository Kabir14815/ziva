import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '24/7', text: 'Emergency & OPD services' },
  { icon: '+', text: 'Multiple specialties under one roof' },
  { icon: '★', text: 'Experienced medical professionals' },
]

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    gender: 'male',
    role: 'Senior Physician',
    qualification: 'MBBS, MD (General Medicine)',
    bio: 'Over 15 years of experience in general medicine and emergency care. Committed to patient-centric care.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500',
  },
  {
    name: 'Dr. Priya Sharma',
    gender: 'female',
    role: 'Senior Physician',
    qualification: 'MBBS, MD (Internal Medicine)',
    bio: 'Expert in internal medicine with a focus on preventive care and chronic disease management.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500',
  },
]

function About() {
  const [ref, isVisible] = useScrollReveal()
  const [doctorsRef, doctorsVisible] = useScrollReveal()
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
            <div className="visual-card">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
                alt="Ziva Multispeciality Hospital - Modern healthcare facility"
                className="about-image"
              />
            </div>
          </div>
        </div>

        <div id="doctors" ref={doctorsRef} className={`doctors-section ${doctorsVisible ? 'reveal' : ''}`}>
          <div className="section-header">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet Our Doctors</h2>
            <p className="section-desc">
              Experienced medical professionals dedicated to your health and wellbeing.
            </p>
          </div>
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="doctor-card card-3d">
                <div className="doctor-image-wrap">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.role}`}
                    className="doctor-image"
                  />
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-role">{doctor.role}</p>
                  <p className="doctor-qualification">{doctor.qualification}</p>
                  <p className="doctor-bio">{doctor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
