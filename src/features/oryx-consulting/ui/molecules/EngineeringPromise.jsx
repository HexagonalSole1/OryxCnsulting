import { Code2, Layers, Zap, Shield } from 'lucide-react'
import Card from '../../../../shared/ui/atoms/Card'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import './EngineeringPromise.css'

export default function EngineeringPromise({ promise }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  
  const getPrincipleIcon = (principle) => {
    if (principle.includes('SOLID')) return <Code2 size={24} />
    if (principle.includes('MVVM')) return <Layers size={24} />
    if (principle.includes('Escalable')) return <Zap size={24} />
    return <Shield size={24} />
  }

  return (
    <div ref={ref} className={`engineering-promise ${isVisible ? 'engineering-promise--visible' : ''}`}>
      <Card variant="neumorphic" className="engineering-promise__card">
        <div className="engineering-promise__header">
          <div className="engineering-promise__icon-wrapper">
            <Code2 className="engineering-promise__icon" size={40} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="engineering-promise__title">{promise.title}</h3>
            <p className="engineering-promise__description">{promise.description}</p>
          </div>
        </div>
        
        {promise.principles && promise.principles.length > 0 && (
          <div className="engineering-promise__principles">
            {promise.principles.map((principle, index) => (
              <div key={index} className="engineering-promise__principle">
                {getPrincipleIcon(principle)}
                <span>{principle}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

