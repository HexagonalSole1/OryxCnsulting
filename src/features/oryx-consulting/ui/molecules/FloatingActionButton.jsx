import { MessageCircle } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import './FloatingActionButton.css'

export default function FloatingActionButton() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <button
      onClick={() => scrollToSection('contact')}
      className="fab"
      aria-label="Solicitar consulta gratuita"
      type="button"
    >
      <MessageCircle className="fab__icon" size={24} strokeWidth={2.5} />
      <span className="fab__text">Consulta Gratuita</span>
    </button>
  )
}

