import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LandingPageTemplate from '../templates/LandingPageTemplate'
import './OryxLandingPage.css'

export default function OryxLandingPage() {
  const location = useLocation()

  useEffect(() => {
    // Manejar scroll a secciones cuando se navega desde otras páginas
    const hash = location.hash || window.location.hash
    if (hash) {
      const sectionId = hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300) // Aumentar delay para asegurar que el DOM esté listo
    } else {
      // Scroll al inicio si no hay hash
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="oryx-landing-page">
      <LandingPageTemplate />
    </div>
  )
}

