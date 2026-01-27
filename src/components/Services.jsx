import { motion } from 'framer-motion'
import { FiInstagram, FiYoutube, FiZap, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { useI18n } from '../i18n/i18n.jsx'
import './Services.css'

const Services = () => {
  const { tk } = useI18n()
  const services = [
    {
      title: 'Instagram Reels',
      description: 'Create scroll-stopping UGC Reels to boost engagement and reach.',
      icon: FiInstagram
    },
    {
      title: 'YouTube Videos',
      description: 'Produce high-quality UGC videos for YouTube to increase watch time and subscribers.',
      icon: FiYoutube
    },
    {
      title: 'TikTok Clips',
      description: 'Design viral UGC clips tailored for TikTok\'s algorithm to maximize views and trends.',
      icon: FaTiktok
    },
    {
      title: 'Youtube Shorts',
      description: 'Create short, engaging videos for quick viewer engagement.',
      icon: FiZap
    },
    {
      title: 'Facebook Ads',
      description: 'Create and optimize video ads for better engagement and reach.',
      icon: FiFacebook
    },
    {
      title: 'LinkedIn Videos',
      description: 'Craft professional videos for business growth and networking.',
      icon: FiLinkedin
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('services.title')}</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="service-icon">
                {service.icon && <service.icon />}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
