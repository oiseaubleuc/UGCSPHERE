import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/i18n.jsx'
import logoImage from '../images/logo_header_black.png'
import './Header.css'

const Header = () => {
  const { tk, lang, setLanguage } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'nl' : 'en')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <img src={logoImage} alt="Sphere Creators" className="logo-image" />
        </div>
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>
            {tk('nav.process')}
          </a>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>
            {tk('nav.work')}
          </a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>
            {tk('nav.pricing')}
          </a>
          <a href="#ugcExplained" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>
            {tk('nav.ugcExplained')}
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            {tk('nav.contact')}
          </a>
        </nav>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {lang.toUpperCase()}
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
