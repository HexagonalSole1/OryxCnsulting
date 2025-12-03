import { Cloud, BarChart3, Code, Database, Server, Package, Zap } from 'lucide-react'
import Card from '../../../../shared/ui/atoms/Card'
import './TeamMemberCard.css'

export default function TeamMemberCard({ member }) {
  const getIcon = () => {
    if (member.role?.includes('Arquitecto') || member.role?.includes('Cloud')) {
      return <Cloud className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
    }
    if (member.role?.includes('Analista') || member.role?.includes('Datos')) {
      return <BarChart3 className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
    }
    return <Code className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
  }

  const getSkillIcon = (skill) => {
    const skillLower = skill.toLowerCase()
    if (skillLower.includes('aws') || skillLower.includes('cloud')) return <Cloud size={14} />
    if (skillLower.includes('sql') || skillLower.includes('database')) return <Database size={14} />
    if (skillLower.includes('docker') || skillLower.includes('ci/cd')) return <Package size={14} />
    if (skillLower.includes('spring') || skillLower.includes('java')) return <Server size={14} />
    if (skillLower.includes('react') || skillLower.includes('pwa')) return <Zap size={14} />
    return <Code size={14} />
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
      {member.name && (
        <p className="team-member-card__name">{member.name}</p>
      )}
      <p className="team-member-card__focus">{member.focus}</p>
      <p className="team-member-card__description">{member.description}</p>
      
      {member.skills && member.skills.length > 0 && (
        <div className="team-member-card__skills">
          <h4 className="team-member-card__skills-title">Habilidades Técnicas</h4>
          <div className="team-member-card__skills-list">
            {member.skills.map((skill, index) => (
              <div key={index} className="team-member-card__skill-badge">
                {getSkillIcon(skill)}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

