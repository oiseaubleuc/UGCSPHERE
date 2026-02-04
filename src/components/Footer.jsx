import { motion } from 'framer-motion'
import { FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { useI18n } from '../i18n/i18n.jsx'
import logoImage from '../images/sphere_logo_glow.png'
import './Footer.css'

const Footer = () => {
  const { tk } = useI18n()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImage} alt="Sphere Creators" className="footer-logo-image" />
            </div>
            <p className="footer-description">{tk('footer.description')}</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FiYoutube />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{tk('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>
                  {tk('nav.process')}
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>
                  {tk('nav.work')}
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>
                  {tk('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
                  {tk('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{tk('footer.about')}</h4>
            <ul className="footer-links">
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>
                  {tk('footer.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">{tk('footer.contact')}</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:info@spherecreators.com">info@spherecreators.com</a>
              </li>
              <li>
                <a href="tel:+31123456789">+31 12 345 6789</a>
              </li>
              <li>Antwerp, Belgium</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {tk('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
