import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './Process.css'

const Process = () => {
  const { tk } = useI18n()

  const steps = [
    {
      number: '01',
      title: 'Submit Request',
      description: 'Share your UGC content needs and project details to get started.',
    },
    {
      number: '02',
      title: 'UGC Creative Production',
      description: 'Our team produces and edits your UGC, and you can request revisions to perfect it.',
    },
    {
      number: '03',
      title: 'Final Delivery & Testing',
      description: 'Receive the final UGC videos with all necessary adjustments, ready for deployment and testing.',
    },
  ]

  return (
    <section id="process" className="process">
      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('process.title')}</h2>
        </motion.div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
