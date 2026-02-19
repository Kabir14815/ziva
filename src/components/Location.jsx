const MAP_QUERY = 'Chandigarh+Rd+Sunny+Enclave+Mundi+Kharar+Kharar+Punjab+140301'
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`
const MAP_LINK = `https://maps.google.com/?q=${MAP_QUERY.replace(/\+/g, ' ')}`

const address = [
  'Chandigarh Rd, adjacent Hotel Harmony',
  'Opposite pillar number 16, Sunny Enclave',
  'Mundi Kharar, Kharar, Punjab 140301',
]

function Location() {
  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <div className="section-header">
              <span className="section-label">Find Us</span>
              <h2 className="section-title">Visit Our Hospital</h2>
            </div>
            <address className="address-block">
              {address.map((line) => (
                <p key={line} className="address-line">{line}</p>
              ))}
            </address>
            <div className="hours-block">
              <h4>Hours</h4>
              <p className="hours-text">Open 24 hours</p>
              <p className="hours-note">Emergency care available round the clock</p>
            </div>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View on Map
            </a>
          </div>
          <div className="location-map">
            <iframe
              src={MAP_EMBED}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ziva Multispeciality Hospital Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
