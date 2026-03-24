import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '#', text: 'Routine OPD Services' },
  { icon: '+', text: 'Multiple specialties under one roof' },
  { icon: '★', text: 'Experienced medical professionals' },
]

const doctors = [
  {
    name: 'Dr. Parul Jaiswal',
    role: 'Obstetrician and Gynaecologist',
    availability: '11:00am - 2:00pm and 5:00pm-7:00pm',
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
    role: 'Managing Director Ziva Hospital, Emergency & Medicine Specialist',
    availability: '10:00am-8:00pm',
    qualifications: [
      'MBBS (Emergency & Medicine)',
      'Fellowship in E. Medicine',
    ],
    experience: [
      'Ex. Ivy & Max Hospital, Mohali',
      'Ex. Government Hospital, Sec-16, GMC Hospital',
    ],
    specialties: ['Emergency Medicine', 'Critical Care'],
    phone: '9646284108',
    image: '/IMG_3343.JPG.jpeg',
  },
  {
    name: 'Dr. Vineet Saggar',
    role: 'Neuro Surgeon',
    qualifications: [
      'MS-MCh Neuro-Surgeon',
    ],
    experience: [
      'Head Neuro Interventional and Endovascular Neurosurgery, Chandigarh',
    ],
    specialties: ['Spine Surgery', 'Neuro Surgery'],
    image: '/vineet_saggar.jpeg',
  },
  {
    name: 'Dr. Ruchir Rastogi',
    role: 'Cardiologist',
    qualifications: [
      'MD Medicine-JLNMC Ajmer',
      'DM Cardiology-SMS Hospital Jaipur',
    ],
    experience: [
      'Associate Consultant at MAX Mohali (2016-2019)',
      'Cheif Consultant CMC, Mohali (2019-2023)',
      'Sr. Consultant at Livasa Mohali 2023',
    ],
    specialties: ['Interventional Cardiology', 'Angioplasty'],
    image: '/ruchir_rastogi.jpg',
  },
  {
    name: 'Dr. Divij Jayant',
    role: 'General Surgeon',
    qualifications: [
      'Senior Residency, Surgery(PGIMER)',
      'MS Surgery(PGIMER)',
    ],
    experience: [
      'Consultant HPB GI Surgery and General Surgery(2024-2026)',
    ],
    specialties: ['Liver Surgery', 'Gastrointestinal Surgery'],
    image: '',
  },
  {
    name: 'Dr. Gaurav Chopra',
    role: 'Orthopedics',
    qualifications: [
      'MBBS (GMC Patiala)',
      'MS Orthopedics ',
    ],
    experience: [
      'Ex Registar DMC(Ludhiana)',
      'Ex-Consultant IVY Hospital',
    ],
    specialties: ['Orthopedics'],
    image: '',
  },
  {
    name: 'Dr. Ravleen Kaur',
    role: 'Physiotherapist',
    qualifications: [
      'Bachelor of Physiotherapy',
      'Certified in Cupping Therapy',
      'Dry Needling',
    ],
    specialties: ['Manual Therapy', 'Kinesio Taping', 'IASTM'],
    image: '',
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
                  {icon && <span className="feature-icon">{icon}</span>}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <img
                src="/IMG_5052.JPG.jpeg"
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
                  {doctor.availability && (
                    <div className="doctor-availability">
                      <span className="availability-icon">🕒</span>
                      <span className="availability-text">{doctor.availability}</span>
                    </div>
                  )}
                  <div className="doctor-qualifications">
                    {doctor.qualifications?.map((q) => (
                      <span key={q} className="doctor-qual-tag">{q}</span>
                    ))}
                  </div>
                  <div className="doctor-experience">
                    {doctor.experience?.map((exp) => (
                      <p key={exp} className="doctor-exp-item">{exp}</p>
                    ))}
                  </div>
                  <div className="doctor-specialties">
                    {doctor.specialties?.map((s) => (
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
