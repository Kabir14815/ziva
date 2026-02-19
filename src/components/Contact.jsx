function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="contact-title">Ready to Schedule?</h2>
            <p className="contact-text">
              We're here for you 24 hours a day, 7 days a week. Reach out for appointments or emergencies.
            </p>
            <div className="contact-methods">
              <a href="tel:+911234567890" className="contact-link contact-link-emergency">
                <span className="contact-label">Emergency Call</span>
                <span className="contact-value">+91 123 456 7890</span>
              </a>
              <a href="tel:+911234567890" className="contact-link">
                <span className="contact-label">Appointments</span>
                <span className="contact-value">+91 123 456 7890</span>
              </a>
              <a href="mailto:info@zivahospital.com" className="contact-link">
                <span className="contact-label">Email</span>
                <span className="contact-value">info@zivahospital.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
