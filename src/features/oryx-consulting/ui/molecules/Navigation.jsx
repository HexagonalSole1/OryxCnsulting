import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import Button from '../../../../shared/ui/atoms/Button'
import Container from '../../../../shared/ui/atoms/Container'
import ThemeToggle from '../../../../components/ThemeToggle'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // Si estamos en la landing page, hacer scroll suave
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    } else {
      // Si estamos en otra página, navegar a la landing con hash
      navigate(`/#${sectionId}`)
      setIsMobileMenuOpen(false)
    }
  }
  
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Si estamos en la landing, scroll al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Si estamos en otra página, navegar a la landing
      navigate('/')
    }
  }

  // Detectar sección activa al hacer scroll
  const [activeSection, setActiveSection] = useState('')
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'process', 'team', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Llamar una vez al montar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      ref={navRef}
      className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <Container>
        <div className="navigation__content">
          <Link 
            to="/"
            className="navigation__logo"
            onClick={handleLogoClick}
            aria-label="Ir al inicio"
          >
            <span className="navigation__logo-text">OryxCnsulting</span>
          </Link>
          
          <button
            className="navigation__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span className={`navigation__hamburger ${isMobileMenuOpen ? 'navigation__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          {isMobileMenuOpen && (
            <div 
              className="navigation__overlay"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          
          <div className={`navigation__links ${isMobileMenuOpen ? 'navigation__links--open' : ''}`}>
            <button 
              className={`navigation__link ${activeSection === 'services' ? 'navigation__link--active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Servicios
            </button>
            <button 
              className={`navigation__link ${activeSection === 'process' ? 'navigation__link--active' : ''}`}
              onClick={() => scrollToSection('process')}
            >
              Metodología
            </button>
            <button 
              className={`navigation__link ${activeSection === 'team' ? 'navigation__link--active' : ''}`}
              onClick={() => scrollToSection('team')}
            >
              Equipo
            </button>
            <button 
              className={`navigation__link ${activeSection === 'contact' ? 'navigation__link--active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </button>
          </div>
          
          <div className="navigation__actions">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="navigation__cta navigation__cta--desktop"
              aria-label="Solicitar consulta gratuita"
            >
              <MessageCircle className="navigation__cta-icon" size={18} strokeWidth={2.5} />
              <span className="navigation__cta-text">Consulta Gratuita</span>
              <ArrowRight className="navigation__cta-arrow" size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

