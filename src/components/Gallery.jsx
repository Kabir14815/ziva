import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const photos = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
]

function Gallery() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div className="gallery-page">
      <section className="section page-header">
        <div className="container">
          <h1 className="section-title">Photo Gallery</h1>
          <p className="section-desc">Take a look inside Ziva Multispeciality Hospital and our world-class facilities and team.</p>
        </div>
      </section>

      <section ref={ref} className={`section gallery-section ${isVisible ? 'reveal' : ''}`}>
        <div className="container">
          <div className="gallery-grid">
            {photos.map((src, i) => (
              <div key={i} className="gallery-item card-3d" style={{ '--delay': `${i * 100}ms` }}>
                <img src={src} alt={`Ziva Hospital Gallery Image ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
