import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig.js'
import { useI18n } from '../i18n/i18n.jsx'
import { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
  const { t, tk, lang } = useI18n()
  const [openAccordion, setOpenAccordion] = useState(null)

  const offers = Object.values(siteConfig.offers).sort((a, b) => a.sort - b.sort)

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const formatPrice = (price) => {
    if (!price) return ''
    const amount = price.amount.toLocaleString('nl-NL')
    return `€${amount}`
  }

  const periodLabel = (period) => {
    if (period === 'month') return lang === 'nl' ? '/maand' : '/month'
    return ''
  }

  const handleCheckout = (offerId) => {
    const link = siteConfig.stripe.paymentLinks[offerId]
    if (link) {
      window.open(link, '_blank')
    } else {
      alert('Payment link not configured yet')
    }
  }

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('pricing.title')}</h2>
          <p className="pricing-subtitle-wide">{tk('pricing.subtitle')}</p>
        </motion.div>

        <div className="pricing-grid">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.id}
              className={`pricing-card ${offer.badge ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {offer.badge && (
                <div className="popular-badge">{t(offer.badge)}</div>
              )}
              <div className="pricing-card-header">
                <h3 className="pricing-title">{t(offer.title)}</h3>
                <p className="pricing-subtitle">{t(offer.tagline)}</p>
              </div>
              <div className="pricing-amount">
                <span className="price">{formatPrice(offer.price)}</span>
                <span className="period">{periodLabel(offer.price?.period)}</span>
              </div>
              <button
                className="pricing-button"
                onClick={() => handleCheckout(offer.id)}
              >
                {tk('pricing.cta')}
              </button>

              <ul className="pricing-highlights">
                {offer.highlights?.[lang]?.map((item, i) => (
                  <li key={i} className="highlight-item">
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pricing-details">
                <button
                  className="details-toggle"
                  onClick={() => toggleAccordion(offer.id)}
                >
                  {openAccordion === offer.id ? tk('pricing.hideDetails') : tk('pricing.viewDetails')}
                  <span className={`details-chevron ${openAccordion === offer.id ? 'open' : ''}`}>
                    +
                  </span>
                </button>
                {openAccordion === offer.id && (
                  <motion.div
                    className="details-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pricing-block">
                      <div className="pricing-block-title">
                        {t(offer.sections.coreOfferTitle)}
                      </div>
                      <ul className="pricing-features">
                        {offer.coreOffer?.[lang]?.map((item, i) => (
                          <li key={i} className="feature-item">
                            <span className="check-icon">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {offer.bonuses && (
                      <div className="pricing-block">
                        <div className="pricing-block-title">
                          {t(offer.sections.bonusesTitle)}
                        </div>
                        <ul className="pricing-features">
                          {offer.bonuses[lang]?.map((item, i) => (
                            <li key={i} className="feature-item">
                              <span className="check-icon">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {offer.guarantee && (
                      <div className="pricing-block">
                        <div className="pricing-block-title">
                          {t(offer.sections.guaranteeTitle)}
                        </div>
                        <p className="pricing-guarantee">{t(offer.guarantee)}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
