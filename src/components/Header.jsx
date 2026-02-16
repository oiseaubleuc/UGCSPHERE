import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../i18n/i18n.jsx'
import logoLight from '../images/logo_header_black.png'
import logoDark from '../images/wit.png'
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

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

  const overlayContent = mobileMenuOpen && (
    <div
      className="nav-overlay-portal"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="nav-overlay-header">
        <span className="nav-overlay-title">Menu</span>
        <button type="button" className="lang-toggle lang-toggle-in-nav" onClick={toggleLanguage}>
          {lang.toUpperCase()}
        </button>
        <button
          type="button"
          className="nav-close-btn"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Sluit menu"
        >
          ✕
        </button>
      </div>
      <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
        {lang === 'nl' ? 'Home' : 'Home'}
      </a>
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
      <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>
        FAQ
      </a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
        {tk('nav.contact')}
      </a>
    </div>
  )

  return (
    <>
      {createPortal(overlayContent, document.body)}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img src={logoLight} alt="Sphere Creators" className="logo-image logo-image-light" />
            <img src={logoDark} alt="Sphere Creators" className="logo-image logo-image-dark" />
          </div>
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
            {lang === 'nl' ? 'Home' : 'Home'}
          </a>
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
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>
            FAQ
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
            {tk('nav.contact')}
          </a>
        </nav>
        <button className={`lang-toggle ${mobileMenuOpen ? 'lang-toggle-hidden' : ''}`} onClick={toggleLanguage}>
          {lang.toUpperCase()}
        </button>
        <button
          type="button"
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    </>
  )
}

export default Header
