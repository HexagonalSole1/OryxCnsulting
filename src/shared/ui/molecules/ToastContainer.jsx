import { createPortal } from 'react-dom'
import Toast from './Toast'
import './ToastContainer.css'

export default function ToastContainer({ toasts, onClose }) {
  if (!toasts || toasts.length === 0) return null

  return createPortal(
    <div className="toast-container" role="region" aria-label="Notificaciones">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onClose?.(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>,
    document.body
  )
}

