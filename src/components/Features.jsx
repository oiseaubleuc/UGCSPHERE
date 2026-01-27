import { motion } from 'framer-motion'
import { FiVideo, FiLayers, FiFilm, FiBarChart, FiTarget, FiShare2 } from 'react-icons/fi'
import { useI18n } from '../i18n/i18n.jsx'
import './Features.css'

const Features = () => {
  const { tk } = useI18n()
  const features = [
    {
      title: 'UGC Video Editing',
      description: 'Expert editing of your UGC footage with dynamic effects, transitions, and color grading for maximum impact.',
      icon: FiVideo
    },
    {
      title: 'Creative Project Management',
      description: 'Streamlined workflows for UGC campaigns, assigning tasks, and tracking progress efficiently.',
      icon: FiLayers
    },
    {
      title: 'UGC Creative Production',
      description: 'Deliver tailor-made UGC content that aligns with your brand vision and campaign goals.',
      icon: FiFilm
    },
    {
      title: 'Performance Reporting',
      description: 'Provide detailed performance reports and analytics to clients, focusing on key UGC metrics like CTR and ROAS.',
      icon: FiBarChart
    },
    {
      title: 'UGC Content Strategy',
      description: 'Develop effective UGC content strategies to boost engagement, drive results, and identify winning hooks.',
      icon: FiTarget
    },
    {
      title: 'Social Media Optimization',
      description: 'Manage and schedule UGC video posts across multiple platforms, optimized for each algorithm.',
      icon: FiShare2
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('features.title')}</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="feature-icon">
                {feature.icon && <feature.icon />}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
