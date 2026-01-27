import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './Contact.css'

const Contact = () => {
  const { tk, lang } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(lang === 'nl' ? 'Bedankt! We nemen snel contact met je op.' : 'Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('contact.title')}</h2>
          <p className="contact-subtitle">{tk('contact.note')}</p>
        </motion.div>
        <div className="contact-content">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">{tk('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={tk('contact.placeholders.name')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{tk('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={tk('contact.placeholders.email')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">{tk('contact.service')}</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">{tk('contact.serviceOptions.select')}</option>
                <option value="instagram">{tk('contact.serviceOptions.instagram')}</option>
                <option value="shorts">{tk('contact.serviceOptions.shorts')}</option>
                <option value="long">{tk('contact.serviceOptions.long')}</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">{tk('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={tk('contact.placeholders.message')}
                required
                rows="5"
              />
            </div>
            <button type="submit" className="submit-button">
              {tk('contact.submit')}
            </button>
          </motion.form>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-details">
              <div className="contact-item">
                <strong>{tk('contact.emailLabel')}</strong>
                <a href="mailto:info@spherecreators.com">info@spherecreators.com</a>
              </div>
              <div className="contact-item">
                <strong>{tk('contact.phoneLabel')}</strong>
                <a href="tel:+31123456789">+31 12 345 6789</a>
              </div>
              <div className="contact-item">
                <strong>{tk('contact.locationLabel')}</strong>
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
