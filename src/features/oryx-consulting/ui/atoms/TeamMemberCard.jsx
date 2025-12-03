import { Laptop, Settings, BarChart3 } from 'lucide-react'
import Card from '../../../../shared/ui/atoms/Card'
import './TeamMemberCard.css'

export default function TeamMemberCard({ member }) {
  const getIcon = () => {
    switch (member.role) {
      case 'Programador':
        return <Laptop className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
      case 'Ingeniero de Desarrollo':
        return <Settings className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
      case 'Analista de Datos':
        return <BarChart3 className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
      default:
        return <Laptop className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
    }
  }

  return (
    <Card variant="neumorphic" className="team-member-card">
      <div className="team-member-card__header">
        <div className="team-member-card__icon">
          {getIcon()}
        </div>
        <div className="team-member-card__count">
          {member.count}x
        </div>
      </div>
      <h3 className="team-member-card__role">{member.role}</h3>
      <p className="team-member-card__focus">{member.focus}</p>
      <p className="team-member-card__description">{member.description}</p>
    </Card>
  )
}

