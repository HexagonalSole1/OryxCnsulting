import './HeroTitle.css'

export default function HeroTitle({ children, className = '' }) {
  return (
    <h1 className={`hero-title ${className}`}>
      {children}
    </h1>
  )
}

