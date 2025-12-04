import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import TeamMemberCard from '../atoms/TeamMemberCard'
import EngineeringPromise from './EngineeringPromise'
import { useIntersectionObserver } from '../../../../shared/ui/hooks/useIntersectionObserver'
import { ArrowRight } from 'lucide-react'
import './TeamSection.css'

export default function TeamSection({ teamData }) {
  const [flowRef, isFlowVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section id="team" variant="light" className="team-section">
      <Container>
        <div className="team-section__header">
          <h2 className="team-section__title">{teamData.title}</h2>
          <p className="team-section__subtitle">{teamData.subtitle}</p>
        </div>

        <div className="team-section__members-container" ref={flowRef}>
          <div className={`team-section__members-grid ${isFlowVisible ? 'team-section__members-grid--visible' : ''}`}>
            {teamData.members.map((member, index) => (
              <div
                key={member.id}
                className="team-section__member-item"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {teamData.engineeringPromise && (
          <EngineeringPromise promise={teamData.engineeringPromise} />
        )}

        <div className="team-section__credibility">
          <h3 className="team-section__credibility-title">Certificaciones de Plataforma que Generan Confianza</h3>
          <div className="team-section__credibility-items">
            <div className="team-section__credibility-item">
              <strong>AWS Architecting:</strong> Nuestro equipo está doblemente certificado en diseño de soluciones Cloud, garantizando modernización y rendimiento en sus sistemas.
            </div>
            <div className="team-section__credibility-item">
              <strong>Microservicios y Seguridad:</strong> Expertos en arquitecturas desacopladas (Spring Boot, Quarkus) y seguridad (Spring Security, Network Support).
            </div>
            <div className="team-section__credibility-item">
              <strong>Inteligencia de Negocio:</strong> Dominio en la traducción de datos operativos en valor financiero a través de SAP, SQL y Power BI.
            </div>
          </div>
        </div>

        <div className="team-section__connection">
          <div className="team-section__connection-line" />
          <p className="team-section__connection-text">
            La experiencia del <strong>Analista de Estrategia y Datos</strong> se conecta directamente 
            con la ejecución de nuestros <strong>Arquitectos de Software y Cloud</strong>, 
            creando un ciclo virtuoso donde el análisis informa la ingeniería y la ingeniería valida el análisis.
          </p>
        </div>
      </Container>
    </Section>
  )
}

