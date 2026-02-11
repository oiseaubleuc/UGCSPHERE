import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './Work.css'

const Work = () => {
  const { tk } = useI18n()

  const workItems = [
    { id: 1, src: '/videos/work-1.mp4' },
    { id: 2, src: '/videos/work-2.mp4' },
    { id: 3, src: '/videos/work-3.mp4' },
  ]

  return (
    <section id="work" className="work">
      <div className="work-container">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('work.title')}</h2>
        </motion.div>
        <div className="work-grid">
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="work-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="work-video-wrapper">
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label={`Work ${item.id}`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
