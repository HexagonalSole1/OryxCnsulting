import { forwardRef } from 'react'
import './Card.css'

const Card = forwardRef(function Card({ 
  children, 
  className = '',
  variant = 'default',
  interactive = false,
  ...props
}, ref) {
  return (
    <div 
      ref={ref}
      className={`card card--${variant} ${interactive ? 'card--interactive' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

export default Card

