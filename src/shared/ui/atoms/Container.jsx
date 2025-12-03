import './Container.css'

export default function Container({ 
  children, 
  className = '',
  size = 'large' 
}) {
  return (
    <div className={`container container--${size} ${className}`}>
      {children}
    </div>
  )
}

