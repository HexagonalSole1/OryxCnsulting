import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../molecules/Navigation'
import Footer from '../molecules/Footer'
import Container from '../../../../shared/ui/atoms/Container'
import Section from '../../../../shared/ui/atoms/Section'
import Button from '../../../../shared/ui/atoms/Button'
import { landingPageConfig } from '../../domain/LandingPageConfig'
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft, Calendar } from 'lucide-react'
import './LegalPage.css'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Política de Privacidad - OryxCnsulting'
  }, [])

  return (
    <div className="legal-page">
      <Navigation />
      <Section variant="default" className="legal-page__hero">
        <Container>
          <div className="legal-page__header">
            <Link to="/" className="legal-page__back-link">
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>
            <div className="legal-page__icon-wrapper">
              <Shield className="legal-page__icon" size={48} strokeWidth={1.5} />
            </div>
            <h1 className="legal-page__title">Política de Privacidad</h1>
            <p className="legal-page__subtitle">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="light" className="legal-page__content">
        <Container>
          <div className="legal-page__body">
            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Lock size={20} />
                1. Información que Recopilamos
              </h2>
              <p className="legal-page__text">
                En OryxCnsulting, nos comprometemos a proteger su privacidad. Recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="legal-page__list">
                <li>Completa nuestro formulario de contacto</li>
                <li>Solicita una consulta estratégica gratuita</li>
                <li>Se comunica con nosotros por correo electrónico o teléfono</li>
                <li>Descarga recursos o casos de estudio</li>
              </ul>
              <p className="legal-page__text">
                La información que recopilamos puede incluir: nombre completo, dirección de correo electrónico, número de teléfono, nombre de empresa, y cualquier mensaje o información adicional que nos proporcione.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Eye size={20} />
                2. Uso de la Información
              </h2>
              <p className="legal-page__text">
                Utilizamos la información recopilada para:
              </p>
              <ul className="legal-page__list">
                <li>Responder a sus consultas y solicitudes de contacto</li>
                <li>Proporcionar nuestros servicios de consultoría tecnológica</li>
                <li>Enviar información sobre nuestros servicios, casos de estudio y recursos relevantes</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y contractuales</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Shield size={20} />
                3. Protección de Datos
              </h2>
              <p className="legal-page__text">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
              </p>
              <ul className="legal-page__list">
                <li>Encriptación de datos en tránsito y en reposo</li>
                <li>Acceso restringido a información personal solo para personal autorizado</li>
                <li>Monitoreo regular de nuestros sistemas de seguridad</li>
                <li>Actualizaciones periódicas de nuestras prácticas de seguridad</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <FileText size={20} />
                4. Compartir Información
              </h2>
              <p className="legal-page__text">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="legal-page__list">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales o responder a solicitudes gubernamentales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)</li>
                <li>En caso de fusión, adquisición o venta de activos (con notificación previa)</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Mail size={20} />
                5. Sus Derechos
              </h2>
              <p className="legal-page__text">
                Usted tiene derecho a:
              </p>
              <ul className="legal-page__list">
                <li><strong>Acceder</strong> a la información personal que tenemos sobre usted</li>
                <li><strong>Rectificar</strong> información inexacta o incompleta</li>
                <li><strong>Solicitar la eliminación</strong> de su información personal</li>
                <li><strong>Oponerse</strong> al procesamiento de su información personal</li>
                <li><strong>Retirar su consentimiento</strong> en cualquier momento</li>
                <li><strong>Portabilidad de datos</strong> en formato estructurado</li>
              </ul>
              <p className="legal-page__text">
                Para ejercer estos derechos, puede contactarnos en <a href="mailto:deskrun@gmail.com" className="legal-page__link">deskrun@gmail.com</a>
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Calendar size={20} />
                6. Retención de Datos
              </h2>
              <p className="legal-page__text">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Generalmente, conservamos:
              </p>
              <ul className="legal-page__list">
                <li>Información de contacto: hasta que solicite su eliminación o durante 3 años de inactividad</li>
                <li>Información de clientes: durante la duración del contrato y 5 años después para fines legales</li>
                <li>Registros de comunicación: 2 años desde la última interacción</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Shield size={20} />
                7. Cookies y Tecnologías Similares
              </h2>
              <p className="legal-page__text">
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Mail size={20} />
                8. Contacto
              </h2>
              <p className="legal-page__text">
                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el manejo de su información personal, puede contactarnos:
              </p>
              <div className="legal-page__contact-info">
                <p><strong>Email:</strong> <a href="mailto:deskrun@gmail.com" className="legal-page__link">deskrun@gmail.com</a></p>
                <p><strong>Teléfono:</strong> <a href="tel:+525591392919" className="legal-page__link">+52 55 9139 2919</a></p>
              </div>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <FileText size={20} />
                9. Cambios a esta Política
              </h2>
              <p className="legal-page__text">
                Nos reservamos el derecho de actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Le recomendamos revisar esta política periódicamente.
              </p>
            </section>
          </div>
        </Container>
      </Section>
      <Footer footerData={landingPageConfig.footer} />
    </div>
  )
}

