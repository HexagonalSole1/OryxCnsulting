import Container from '../../../../shared/ui/atoms/Container'
import Button from '../../../../shared/ui/atoms/Button'
import './Footer.css'

export default function Footer({ footerData }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__company-name">{footerData.companyName}</h3>
            <p className="footer__tagline">{footerData.tagline}</p>
          </div>

          <div className="footer__links">
            <div className="footer__links-group">
              <h4 className="footer__links-title">Navegación</h4>
              <ul className="footer__links-list">
                {footerData.links.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="footer__link"
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Contacto</h4>
              <ul className="footer__links-list">
                <li>
                  <a href={`mailto:${footerData.contact.email}`} className="footer__link">
                    {footerData.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${footerData.contact.phone}`} className="footer__link">
                    {footerData.contact.phoneFormatted || footerData.contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Legal</h4>
              <ul className="footer__links-list">
                {footerData.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__cta">
            <Button 
              variant="accent" 
              size="medium"
              onClick={() => scrollToSection('contact')}
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {footerData.companyName}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

