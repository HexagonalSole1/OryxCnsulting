import { useState } from 'react'
import Card from '../../../../shared/ui/atoms/Card'
import ServiceIcon from '../atoms/ServiceIcon'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import './ServiceCard.css'

export default function ServiceCard({ service }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.2 })

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <Card 
      ref={cardRef}
      variant="neumorphic" 
      interactive
      className={`service-card ${isVisible ? 'service-card--visible' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      <ServiceIcon icon={service.icon} />
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      
      <ul className="service-card__features">
        {service.features.map((feature, index) => (
          <li key={index} className="service-card__feature">
            <span className="service-card__feature-icon">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}

