import Section from '../../../../shared/ui/atoms/Section'
import Container from '../../../../shared/ui/atoms/Container'
import TeamMemberCard from '../atoms/TeamMemberCard'
import './TeamSection.css'

export default function TeamSection({ teamData }) {
  return (
    <Section id="team" variant="light" className="team-section">
      <Container>
        <div className="team-section__header">
          <h2 className="team-section__title">{teamData.title}</h2>
          <p className="team-section__subtitle">{teamData.subtitle}</p>
        </div>

        <div className="team-section__grid">
          {teamData.members.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="team-section__connection">
          <div className="team-section__connection-line" />
          <p className="team-section__connection-text">
            La experiencia del <strong>Analista de Datos</strong> se conecta directamente 
            con la ejecución de los <strong>Programadores</strong> e <strong>Ingenieros</strong>, 
            creando un ciclo de innovación continuo.
          </p>
        </div>
      </Container>
    </Section>
  )
}

