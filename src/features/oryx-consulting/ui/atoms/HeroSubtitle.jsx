import './HeroSubtitle.css'

export default function HeroSubtitle({ children, className = '' }) {
  return (
    <p className={`hero-subtitle ${className}`}>
      {children}
    </p>
  )
}

