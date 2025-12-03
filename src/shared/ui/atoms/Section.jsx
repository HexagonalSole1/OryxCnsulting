import './Section.css'

export default function Section({ 
  children, 
  className = '', 
  variant = 'default',
  id 
}) {
  return (
    <section 
      id={id}
      className={`section section--${variant} ${className}`}
    >
      {children}
    </section>
  )
}

