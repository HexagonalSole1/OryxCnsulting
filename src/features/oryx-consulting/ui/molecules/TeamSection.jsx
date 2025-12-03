import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import TeamMemberCard from '../atoms/TeamMemberCard'
import EngineeringPromise from './EngineeringPromise'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import { ArrowRight } from 'lucide-react'
import './TeamSection.css'

export default function TeamSection({ teamData }) {
  const [flowRef, isFlowVisible] = useIntersectionObserver({ threshold: 0.2 })
  
  // Ordenar miembros: Analista primero, Arquitecto después
  const sortedMembers = [...teamData.members].sort((a, b) => {
    if (a.role.includes('Analista')) return -1
    if (b.role.includes('Analista')) return 1
    return 0
  })

  return (
    <Section id="team" variant="light" className="team-section">
      <Container>
        <div className="team-section__header">
          <h2 className="team-section__title">{teamData.title}</h2>
          <p className="team-section__subtitle">{teamData.subtitle}</p>
        </div>

        <div className="team-section__flow-container" ref={flowRef}>
          <div className={`team-section__grid team-section__grid--flow ${isFlowVisible ? 'team-section__grid--visible' : ''}`}>
            {sortedMembers.map((member, index) => (
              <div key={member.id} className="team-section__member-wrapper" style={{ animationDelay: `${index * 200}ms` }}>
                <TeamMemberCard member={member} />
                {index < sortedMembers.length - 1 && (
                  <div className="team-section__flow-arrow">
                    <ArrowRight className="team-section__flow-arrow-icon" size={32} strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {teamData.engineeringPromise && (
          <EngineeringPromise promise={teamData.engineeringPromise} />
        )}

        <div className="team-section__connection">
          <div className="team-section__connection-line" />
          <p className="team-section__connection-text">
            La experiencia del <strong>Analista de Estrategia y Datos</strong> se conecta directamente 
            con la ejecución del <strong>Arquitecto de Software y Cloud</strong>, 
            creando un ciclo virtuoso donde el análisis informa la ingeniería y la ingeniería valida el análisis.
          </p>
        </div>
      </Container>
    </Section>
  )
}

