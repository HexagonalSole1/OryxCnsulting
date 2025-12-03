import Navigation from '../molecules/Navigation'
import HeroWithDataViz from '../organisms/HeroWithDataViz'
import ProblemSection from '../molecules/ProblemSection'
import ServicesGrid from '../organisms/ServicesGrid'
import TestimonialCarousel from '../molecules/TestimonialCarousel'
import TeamSection from '../molecules/TeamSection'
import ProcessSection from '../molecules/ProcessSection'
import ContactForm from '../molecules/ContactForm'
import Footer from '../molecules/Footer'
import { landingPageConfig } from '../../domain/LandingPageConfig'
import './LandingPageTemplate.css'

export default function LandingPageTemplate() {
  return (
    <div className="landing-page-template">
      <Navigation />
      <HeroWithDataViz heroData={landingPageConfig.hero} />
      <ProblemSection problems={landingPageConfig.problems} />
      <ServicesGrid services={landingPageConfig.services} />
      <TestimonialCarousel testimonials={landingPageConfig.testimonials} />
      <TeamSection teamData={landingPageConfig.team} />
      <ProcessSection processData={landingPageConfig.process} />
      <ContactForm contactData={landingPageConfig.contact} />
      <Footer footerData={landingPageConfig.footer} />
    </div>
  )
}

