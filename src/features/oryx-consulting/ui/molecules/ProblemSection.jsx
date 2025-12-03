import { AlertTriangle } from 'lucide-react'
import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import './ProblemSection.css'

export default function ProblemSection({ problems }) {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.3 })
  
  return (
    <Section id="problems" variant="light" className="problem-section">
      <Container>
        <div 
          ref={headerRef}
          className={`problem-section__header ${isHeaderVisible ? 'problem-section__header--visible' : ''}`}
        >
          <h2 className="problem-section__title">
            ¿Reconoce Estos Desafíos en Su Empresa?
          </h2>
          <p className="problem-section__subtitle">
            Estos problemas comunes están limitando el crecimiento y la eficiencia de su organización
          </p>
        </div>
        
        <div className="problem-section__grid">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={problem.id} 
              problem={problem} 
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ProblemCard({ problem, delay }) {
  const [cardRef, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  
  return (
    <div 
      ref={cardRef}
      className={`problem-card ${isVisible ? 'problem-card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="problem-card__icon">
        <AlertTriangle className="problem-card__icon-svg" size={32} strokeWidth={1.5} />
      </div>
      <h3 className="problem-card__title">{problem.title}</h3>
      <p className="problem-card__description">{problem.description}</p>
    </div>
  )
}

