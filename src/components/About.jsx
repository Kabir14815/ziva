import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '24/7', text: 'Emergency & OPD services' },
  { icon: '+', text: 'Multiple specialties under one roof' },
  { icon: '★', text: 'Experienced medical professionals' },
]

const doctors = [
  {
    name: 'Dr. Parul Jaiswal',
    role: 'Gynae & Laparoscopy Expert',
    qualifications: [
      'MBBS (CMC Ludhiana)',
      'MD OBS & Gynae (GMCH-32 Chandigarh)',
      'DNB (NBE) MRCOG (I)',
    ],
    experience: [
      'Ex-SR AIIMS, New Delhi',
      'Ex-Bedi Hospital, Chandigarh',
    ],
    specialties: ['High Risk Pregnancy', 'PCOD', 'Infertility', 'Laparoscopy'],
    image: '/IMG_3313.JPG.jpeg',
  },
  {
    name: 'Dr. Pankaj Chopra',
    role: 'Emergency & Medicine Specialist',
    qualifications: [
      'MBBS (Emergency & Medicine)',
      'Fellowship in E. Medicine',
    ],
    experience: [
      'Ex. Ivy & Max Hospital, Mohali',
    ],
    specialties: ['Emergency Medicine', 'Critical Care'],
    phone: '9646284108',
    image: '/IMG_3343.JPG.jpeg',
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
                src="/IMG_3264.DNG"
                alt="Ziva Multispeciality Hospital - Modern healthcare facility"
                className="about-image"
              />
            </div>
          </div>
        </div>

        <div id="doctors" ref={doctorsRef} className={`doctors-section ${doctorsVisible ? 'reveal' : ''}`}>
          <div className="doctors-section-header">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet Our Doctors</h2>
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
                  <div className="doctor-qualifications">
                    {doctor.qualifications.map((q) => (
                      <span key={q} className="doctor-qual-tag">{q}</span>
                    ))}
                  </div>
                  <div className="doctor-experience">
                    {doctor.experience.map((exp) => (
                      <p key={exp} className="doctor-exp-item">{exp}</p>
                    ))}
                  </div>
                  <div className="doctor-specialties">
                    {doctor.specialties.map((s) => (
                      <span key={s} className="doctor-specialty-tag">{s}</span>
                    ))}
                  </div>
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
