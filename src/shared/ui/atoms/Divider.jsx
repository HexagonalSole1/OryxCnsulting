import './Divider.css'

export default function Divider({ variant = 'default', className = '' }) {
  return (
    <hr className={`divider divider--${variant} ${className}`} />
  )
}

