import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const photos = [
  '/gallery/1.png',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.png',
  '/gallery/9.jpg',
  '/gallery/10.png',
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
