import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useI18n } from '../i18n/i18n.jsx'
import './Work.css'

const Work = () => {
  const { tk } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)

  const workItems = [
    { id: 1, thumbnail: '/images/ugc-creator-1.jpg', videoUrl: 'https://www.youtube.com/watch?v=example1' },
    { id: 2, thumbnail: '/images/ugc-creator-2.jpg', videoUrl: 'https://www.youtube.com/watch?v=example2' },
    { id: 3, thumbnail: '/images/ugc-creator-3.jpg', videoUrl: 'https://www.youtube.com/watch?v=example3' },
    { id: 4, thumbnail: '/images/ugc-creator-4.jpg', videoUrl: 'https://www.youtube.com/watch?v=example4' },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workItems.length) % workItems.length)
  }

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank')
  }

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
        <div className="work-gallery">
          <button className="nav-arrow" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <div className="work-grid">
            {workItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="work-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleVideoClick(item.videoUrl)}
              >
                <div className="work-thumbnail">
                  <img src={item.thumbnail} alt={`Work ${item.id}`} />
                  <div className="play-overlay">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="nav-arrow" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
        <div className="work-pagination">
          {workItems.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
