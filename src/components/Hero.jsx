import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './Hero.css'

const Hero = () => {
  const { tk } = useI18n()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-video-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-video-container">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={`${import.meta.env.BASE_URL}videos/hero-video.mp4`}
            >
              <source src={`${import.meta.env.BASE_URL}videos/hero-video.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tk('hero.badge') && <div className="hero-badge">{tk('hero.badge')}</div>}
          {tk('hero.subtitle') && <div className="hero-subtitle">{tk('hero.subtitle')}</div>}
          <div className="hero-text">
            <h1 className="hero-title">{tk('hero.title')}</h1>
            <p className="hero-description">{tk('hero.description')}</p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection('pricing')}
              >
                {tk('hero.ctaPrimary')}
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection('process')}
              >
                {tk('hero.ctaSecondary')}
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{tk('hero.statLabel')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
