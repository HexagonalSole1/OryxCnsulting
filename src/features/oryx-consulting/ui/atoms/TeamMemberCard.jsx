import { useState } from 'react'
import { Cloud, BarChart3, Code, Database, Server, Package, Zap, User } from 'lucide-react'
import Card from '../../../../shared/ui/atoms/Card'
import './TeamMemberCard.css'

export default function TeamMemberCard({ member }) {
  const [imageError, setImageError] = useState(false)

  const getIcon = () => {
    if (member.role?.includes('Arquitect') || member.role?.includes('Cloud')) {
      return <Cloud className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
    }
    if (member.role?.includes('Analista') || member.role?.includes('Datos')) {
      return <BarChart3 className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
    }
    return <Code className="team-member-card__icon-svg" size={48} strokeWidth={1.5} />
  }

  const getImagePath = () => {
    return member.image || null
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

  const imagePath = getImagePath()
  const showImage = imagePath && !imageError

  return (
    <Card variant="neumorphic" className="team-member-card">
      <div className="team-member-card__header">
        <div className="team-member-card__avatar">
          {showImage ? (
            <img
              src={imagePath}
              alt={`${member.name} - ${member.role}`}
              className="team-member-card__photo"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="team-member-card__icon">
              {getIcon()}
            </div>
          )}
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

      {member.certifications && member.certifications.length > 0 && (
        <div className="team-member-card__certifications">
          <h4 className="team-member-card__certifications-title">Certificaciones Clave</h4>
          <div className="team-member-card__certifications-list">
            {member.certifications.slice(0, 3).map((cert, index) => (
              <span key={index} className="team-member-card__certification-badge">
                {cert}
              </span>
            ))}
            {member.certifications.length > 3 && (
              <span className="team-member-card__certification-more">
                +{member.certifications.length - 3} más
              </span>
            )}
          </div>
        </div>
      )}

      {member.links && (member.links.github || member.links.linkedin) && (
        <div className="team-member-card__links">
          {member.links.github && (
            <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="team-member-card__link">
              GitHub
            </a>
          )}
          {member.links.linkedin && (
            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="team-member-card__link">
              LinkedIn
            </a>
          )}
        </div>
      )}
    </Card>
  )
}

