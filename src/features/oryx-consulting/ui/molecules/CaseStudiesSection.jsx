import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import Card from '../../../../shared/ui/atoms/Card'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import { TrendingUp, Users, Clock, CheckCircle, Building2, MapPin, Target, Code, Quote, Zap, ArrowRight, Sparkles } from 'lucide-react'
import './CaseStudiesSection.css'

export default function CaseStudiesSection({ caseStudies }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  const getMetricIcon = (index) => {
    const icons = [TrendingUp, Clock, CheckCircle, Users]
    return icons[index % icons.length]
  }

  if (!caseStudies || caseStudies.length === 0) {
    return null
  }

  return (
    <Section id="case-studies" variant="gradient" className="case-studies-section">
      <Container>
        <div className="case-studies-section__header">
          <div className="case-studies-section__badge">
            <Sparkles size={16} />
            <span>Caso de Éxito Real</span>
          </div>
          <h2 className="case-studies-section__title">Resultados que Hablan por Sí Solos</h2>
          <p className="case-studies-section__subtitle">
            Transformaciones reales con métricas comprobables que demuestran el impacto tangible de nuestras soluciones
          </p>
        </div>

        <div ref={ref} className="case-studies-section__grid">
          {caseStudies.map((caseStudy, caseIndex) => (
            <Card
              key={caseStudy.id}
              variant="neumorphic"
              interactive
              className={`case-study-card ${isVisible ? 'case-study-card--visible' : ''}`}
              style={{ animationDelay: `${caseIndex * 200}ms` }}
            >
              <div className="case-study-card__header">
                <div className="case-study-card__company-info">
                  <div className="case-study-card__company-icon">
                    <Building2 size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="case-study-card__company-name">{caseStudy.company}</h3>
                    <div className="case-study-card__location">
                      <MapPin size={14} />
                      <span>{caseStudy.location}</span>
                    </div>
                  </div>
                </div>
                <div className="case-study-card__industry-badge">
                  <Target size={14} />
                  <span>{caseStudy.industry}</span>
                </div>
              </div>

              <div className="case-study-card__description">
                <p>{caseStudy.description}</p>
              </div>

              <div className="case-study-card__challenge">
                <h4 className="case-study-card__challenge-title">
                  <Zap size={18} />
                  Desafío
                </h4>
                <p>{caseStudy.challenge}</p>
              </div>

              <div className="case-study-card__solution">
                <h4 className="case-study-card__solution-title">
                  <Code size={18} />
                  Solución Implementada
                </h4>
                <p>{caseStudy.solution}</p>
                {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                  <div className="case-study-card__technologies">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="case-study-card__tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="case-study-card__results">
                <h4 className="case-study-card__results-title">Resultados Medibles</h4>
                <div className="case-study-card__metrics">
                  {caseStudy.results.map((result, index) => {
                    const IconComponent = getMetricIcon(index)
                    return (
                      <div key={index} className="case-study-card__metric">
                        <div className="case-study-card__metric-icon">
                          <IconComponent size={20} strokeWidth={2} />
                        </div>
                        <div className="case-study-card__metric-content">
                          <div className="case-study-card__metric-value">{result.metric}</div>
                          <div className="case-study-card__metric-label">{result.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {caseStudy.testimonial && (
                <div className="case-study-card__testimonial">
                  <Quote size={20} className="case-study-card__quote-icon" />
                  <p className="case-study-card__testimonial-content">
                    "{caseStudy.testimonial.content}"
                  </p>
                  <div className="case-study-card__testimonial-author">
                    <strong>{caseStudy.testimonial.author}</strong>
                    {caseStudy.testimonial.position && (
                      <span> — {caseStudy.testimonial.position}</span>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

