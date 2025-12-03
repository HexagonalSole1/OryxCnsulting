import { Brain, Cloud, BarChart3 } from 'lucide-react'
import './ServiceIcon.css'

const iconMap = {
  'brain': Brain,
  'cloud': Cloud,
  'chart': BarChart3,
}

export default function ServiceIcon({ icon, className = '' }) {
  const IconComponent = iconMap[icon] || Brain
  
  return (
    <div className={`service-icon ${className}`}>
      <IconComponent className="service-icon__svg" size={40} strokeWidth={1.5} />
    </div>
  )
}

