import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../molecules/Navigation'
import Footer from '../molecules/Footer'
import Container from '../../../../shared/ui/atoms/Container'
import Section from '../../../../shared/ui/atoms/Section'
import { landingPageConfig } from '../../domain/LandingPageConfig'
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Mail, Shield, ArrowLeft } from 'lucide-react'
import './LegalPage.css'

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Términos de Servicio - OryxCnsulting'
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
              <Scale className="legal-page__icon" size={48} strokeWidth={1.5} />
            </div>
            <h1 className="legal-page__title">Términos de Servicio</h1>
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
                <FileText size={20} />
                1. Aceptación de los Términos
              </h2>
              <p className="legal-page__text">
                Al acceder y utilizar los servicios de OryxCnsulting, usted acepta estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <CheckCircle size={20} />
                2. Descripción de los Servicios
              </h2>
              <p className="legal-page__text">
                OryxCnsulting ofrece servicios de consultoría tecnológica especializados en:
              </p>
              <ul className="legal-page__list">
                <li>Optimización de procesos mediante Inteligencia Artificial y Machine Learning</li>
                <li>Migración y modernización de sistemas a arquitecturas cloud</li>
                <li>Consultoría estratégica tecnológica</li>
                <li>Análisis de datos y Business Intelligence</li>
                <li>Arquitectura de software y desarrollo de sistemas escalables</li>
              </ul>
              <p className="legal-page__text">
                Todos los servicios se proporcionan de acuerdo con acuerdos específicos de servicio que detallan el alcance, los entregables, los plazos y los términos de pago.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <AlertTriangle size={20} />
                3. Uso Aceptable
              </h2>
              <p className="legal-page__text">
                Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de manera que no:
              </p>
              <ul className="legal-page__list">
                <li>Viole ninguna ley, regulación o derecho de terceros</li>
                <li>Interfiera con el funcionamiento de nuestros servicios o sistemas</li>
                <li>Intente acceder no autorizado a sistemas, datos o información</li>
                <li>Transmita virus, malware o código malicioso</li>
                <li>Utilice nuestros servicios para actividades fraudulentas o engañosas</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Scale size={20} />
                4. Propiedad Intelectual
              </h2>
              <p className="legal-page__text">
                Todos los materiales, incluyendo pero no limitado a código, documentación, diseños, metodologías y procesos desarrollados por OryxCnsulting en el curso de proporcionar servicios, son propiedad de OryxCnsulting, a menos que se acuerde lo contrario por escrito.
              </p>
              <p className="legal-page__text">
                El cliente retiene todos los derechos sobre su información, datos y sistemas existentes. Cualquier trabajo personalizado desarrollado específicamente para el cliente será transferido según los términos del acuerdo de servicio específico.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <CheckCircle size={20} />
                5. Obligaciones del Cliente
              </h2>
              <p className="legal-page__text">
                El cliente se compromete a:
              </p>
              <ul className="legal-page__list">
                <li>Proporcionar información precisa, completa y actualizada</li>
                <li>Colaborar de buena fe en el desarrollo del proyecto</li>
                <li>Proporcionar acceso oportuno a sistemas, datos y personal necesario</li>
                <li>Realizar pagos según los términos acordados</li>
                <li>Mantener la confidencialidad de cualquier información propietaria compartida</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <XCircle size={20} />
                6. Limitación de Responsabilidad
              </h2>
              <p className="legal-page__text">
                En la máxima medida permitida por la ley:
              </p>
              <ul className="legal-page__list">
                <li>OryxCnsulting no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos</li>
                <li>Nuestra responsabilidad total no excederá el monto total pagado por el cliente en los 12 meses anteriores al evento que dio lugar a la reclamación</li>
                <li>No garantizamos resultados específicos de negocio, aunque nos comprometemos a proporcionar servicios profesionales de alta calidad</li>
                <li>No somos responsables de decisiones tomadas basándose en nuestras recomendaciones sin evaluación independiente</li>
              </ul>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Shield size={20} />
                7. Confidencialidad
              </h2>
              <p className="legal-page__text">
                Ambas partes se comprometen a mantener la confidencialidad de toda la información propietaria y confidencial compartida durante el curso de la relación comercial. Esta obligación permanecerá vigente incluso después de la terminación de los servicios.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <AlertTriangle size={20} />
                8. Terminación
              </h2>
              <p className="legal-page__text">
                Cualquier parte puede terminar un acuerdo de servicio:
              </p>
              <ul className="legal-page__list">
                <li>Con 30 días de notificación escrita, salvo que el acuerdo específico establezca lo contrario</li>
                <li>Inmediatamente en caso de incumplimiento material de estos términos</li>
                <li>En caso de insolvencia, quiebra o disolución de cualquiera de las partes</li>
              </ul>
              <p className="legal-page__text">
                En caso de terminación, el cliente será responsable del pago de todos los servicios prestados hasta la fecha de terminación.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Scale size={20} />
                9. Garantías y Disclaimer
              </h2>
              <p className="legal-page__text">
                Proporcionamos nuestros servicios "tal cual" y "según disponibilidad". No garantizamos que:
              </p>
              <ul className="legal-page__list">
                <li>Los servicios serán ininterrumpidos, libres de errores o completamente seguros</li>
                <li>Los resultados cumplirán con todas las expectativas del cliente</li>
                <li>Los defectos serán corregidos</li>
              </ul>
              <p className="legal-page__text">
                Sin embargo, nos comprometemos a utilizar estándares profesionales de la industria y mejores prácticas en todos nuestros servicios.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <FileText size={20} />
                10. Modificaciones de los Términos
              </h2>
              <p className="legal-page__text">
                Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios significativos serán notificados mediante publicación en esta página y actualización de la fecha de "Última actualización". El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos términos.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Scale size={20} />
                11. Ley Aplicable y Jurisdicción
              </h2>
              <p className="legal-page__text">
                Estos Términos de Servicio se rigen por las leyes de México. Cualquier disputa que surja de o esté relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de México.
              </p>
            </section>

            <section className="legal-page__section">
              <h2 className="legal-page__section-title">
                <Mail size={20} />
                12. Contacto
              </h2>
              <p className="legal-page__text">
                Para preguntas sobre estos Términos de Servicio, puede contactarnos:
              </p>
              <div className="legal-page__contact-info">
                <p><strong>Email:</strong> <a href="mailto:deskrun@gmail.com" className="legal-page__link">deskrun@gmail.com</a></p>
                <p><strong>Teléfono:</strong> <a href="tel:+525591392919" className="legal-page__link">+52 55 9139 2919</a></p>
              </div>
            </section>
          </div>
        </Container>
      </Section>
      <Footer footerData={landingPageConfig.footer} />
    </div>
  )
}

