import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ProjectsPage from '../features/projects-showcase/ui/pages/ProjectsPage'
import OryxLandingPage from '../features/oryx-consulting/ui/pages/OryxLandingPage'
import PrivacyPolicyPage from '../features/oryx-consulting/ui/pages/PrivacyPolicyPage'
import TermsOfServicePage from '../features/oryx-consulting/ui/pages/TermsOfServicePage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<OryxLandingPage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          {/* Ruta catch-all: redirige cualquier ruta desconocida a la landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

