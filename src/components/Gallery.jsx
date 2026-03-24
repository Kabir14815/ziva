import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const photos = [
  '/gallery/2025-12-27.webp',
  '/gallery/2024-04-12.webp',
  '/gallery/2025-09-19.jpg',
  '/gallery/2025-01-18.jpg',
  '/gallery/2023-09-13.jpg',
  '/gallery/2023-08-20.jpg',
  '/gallery/2024-02-01.jpg',
  '/gallery/2023-09-17.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/9.jpg',
  '/gallery/10.png',
  '/gallery/12.jpg',
  '/gallery/13.jpg',
  '/gallery/14.jpg',


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
