function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-line" />
          <p className="hero-tagline">Multispeciality Hospital</p>
          <h1 className="hero-title">
            Ziva: Premium <span className="highlight">Healthcare</span> in Mundi Kharar
          </h1>
          <p className="hero-subtitle">
            Premium healthcare, around the clock. Compassionate care meets clinical excellence at our state-of-the-art facility in Mundi Kharar.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule a Visit
            </a>
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden />
              Open 24 Hours
            </div>
          </div>
        </div>
      </div>
      <div className="hero-floating">
        <div className="float-card float-card-1 card-3d">
          <span className="float-icon">⏰</span>
          <span>Emergency Care</span>
        </div>
        <div className="float-card float-card-2 card-3d">
          <span className="float-icon">✓</span>
          <span>NABH Accredited</span>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
