const FOOTER_ADDRESS = 'Chandigarh Rd, adjacent Hotel Harmony, opposite pillar number 16, Sunny Enclave, Mundi Kharar, Kharar, Punjab 140301'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#" className="footer-logo">Ziva</a>
          <p className="footer-address">{FOOTER_ADDRESS}</p>
          <p className="footer-hours">Open 24 hours</p>
          <p className="footer-copy">© 2025 Ziva Multispeciality Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
