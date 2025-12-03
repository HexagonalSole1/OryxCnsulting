import { useEffect, useRef, useState } from 'react'
import { Cloud } from 'lucide-react'
import HeroTitle from '../atoms/HeroTitle'
import HeroSubtitle from '../atoms/HeroSubtitle'
import Button from '../../../../shared/ui/atoms/Button'
import Container from '../../../../shared/ui/atoms/Container'
import './HeroWithDataViz.css'

export default function HeroWithDataViz({ heroData }) {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let nodes = []
    let connections = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const initNodes = () => {
      nodes = []
      const nodeCount = 30
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 2
        })
      }
    }

    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })
    }

    const drawConnections = () => {
      connections = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            connections.push({ from: nodes[i], to: nodes[j], distance })
            ctx.strokeStyle = `rgba(78, 14, 52, ${1 - distance / 150})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const drawNodes = () => {
      nodes.forEach(node => {
        ctx.fillStyle = 'rgba(122, 18, 43, 0.6)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateNodes()
      drawConnections()
      drawNodes()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initNodes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Animación escalonada al cargar
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Efecto parallax sutil
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        setParallaxOffset(scrollProgress * 30)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={heroRef} className="hero-with-data-viz">
      <canvas 
        ref={canvasRef} 
        className="hero-with-data-viz__canvas"
        style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        aria-hidden="true"
      />
      <div className="hero-with-data-viz__overlay" />
      <Container>
        <div className="hero-with-data-viz__content">
          <div 
            className={`hero-with-data-viz__title-wrapper ${isVisible ? 'hero-with-data-viz__title-wrapper--visible' : ''}`}
            style={{ animationDelay: '0ms' }}
          >
            <HeroTitle>{heroData.title}</HeroTitle>
          </div>
          <div 
            className={`hero-with-data-viz__subtitle-wrapper ${isVisible ? 'hero-with-data-viz__subtitle-wrapper--visible' : ''}`}
            style={{ animationDelay: '150ms' }}
          >
            <HeroSubtitle>{heroData.subtitle}</HeroSubtitle>
          </div>
          
          <div 
            className={`hero-with-data-viz__ctas ${isVisible ? 'hero-with-data-viz__ctas--visible' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            <Button 
              variant="accent" 
              size="large"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {heroData.ctaPrimary}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={() => {
                // Aquí se podría abrir un modal o descargar un PDF
                alert('Descargando caso de estudio...')
              }}
            >
              {heroData.ctaSecondary}
            </Button>
          </div>

          {heroData.credibilityLogos && heroData.credibilityLogos.length > 0 && (
            <div 
              className={`hero-with-data-viz__credibility ${isVisible ? 'hero-with-data-viz__credibility--visible' : ''}`}
              style={{ animationDelay: '450ms' }}
            >
              <p className="hero-with-data-viz__credibility-label">Certificaciones y Partners:</p>
              <div className="hero-with-data-viz__logos">
                {heroData.credibilityLogos.map((logo, index) => (
                  <div key={index} className="hero-with-data-viz__logo">
                    <Cloud className="hero-with-data-viz__logo-icon" size={20} strokeWidth={1.5} />
                    <span className="hero-with-data-viz__logo-name">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

