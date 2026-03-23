import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (currentPath === '/gallery') {
    return (
      <>
        <Header />
        <main>
          <Gallery />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
