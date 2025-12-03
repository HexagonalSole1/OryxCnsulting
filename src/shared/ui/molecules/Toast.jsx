import { useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import './Toast.css'

export default function Toast({ 
  message, 
  type = 'info', 
  onClose, 
  duration = 5000 
}) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info
  }

  const Icon = icons[type] || Info

  return (
    <div 
      className={`toast toast--${type}`}
      role="alert"
      aria-live="polite"
    >
      <Icon className="toast__icon" size={20} />
      <span className="toast__message">{message}</span>
      {onClose && (
        <button
          className="toast__close"
          onClick={onClose}
          aria-label="Cerrar notificación"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

