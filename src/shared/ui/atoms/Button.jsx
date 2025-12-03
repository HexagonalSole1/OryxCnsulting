import './Button.css'

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props 
}) {
  return (
    <button 
      className={`button button--${variant} button--${size} ${fullWidth ? 'button--full-width' : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

