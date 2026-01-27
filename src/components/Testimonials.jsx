import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './Testimonials.css'

const Testimonials = () => {
  const { tk } = useI18n()

  const testimonials = [
    {
      quote: 'The quality is outstanding! They always exceed our expectations, delivering more than we imagined',
      author: 'Sarah Johnson',
      badge: '100x Views'
    },
    {
      quote: 'They nailed everything we needed and went above and beyond to bring our vision to life',
      author: 'Michael Chen',
      badge: '100M+ Revenue'
    },
    {
      quote: 'Amazing service! They consistently deliver top-notch results and meet every requirement perfectly',
      author: 'Emma Williams',
      badge: '1M+ Subscribers'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('testimonials.title')}</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-badge">{testimonial.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
