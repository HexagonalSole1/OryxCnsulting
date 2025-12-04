import { useEffect, useRef, useState } from 'react'
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
            // Usar variables CSS para el color (adaptativo al theme)
            const root = getComputedStyle(document.documentElement)
            const isDark = root.getPropertyValue('--bg-primary').trim().includes('0A0E27') || 
                           document.documentElement.getAttribute('data-theme') === 'dark'
            const primaryColor = isDark ? '#C084FC' : '#4E0E34'
            const rgb = hexToRgb(primaryColor)
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(1 - distance / 150) * (isDark ? 0.6 : 1)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 78, g: 14, b: 52 }
    }

    const drawNodes = () => {
      const root = getComputedStyle(document.documentElement)
      const isDark = root.getPropertyValue('--bg-primary').trim().includes('0A0E27') || 
                     document.documentElement.getAttribute('data-theme') === 'dark'
      const nodeColor = isDark ? '#C084FC' : '#7A122B'
      const rgb = hexToRgb(nodeColor)
      nodes.forEach(node => {
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${isDark ? 0.4 : 0.6})`
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
    <section ref={heroRef} className="hero-with-data-viz" aria-label="Sección principal">
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
          </div>

        </div>
      </Container>
    </section>
  )
}

