import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './FAQ.css'

const FAQ = () => {
  const { tk, lang } = useI18n()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = lang === 'nl'
    ? [
        {
          question: 'Welke services bieden jullie aan?',
          answer: 'We leveren UGC content (scripts, creators, opname en montage), creative testing en optimalisatie afgestemd op jouw doelen.',
        },
        {
          question: 'Hoe snel zien we resultaten?',
          answer: 'Veel klanten zien binnen 2 weken al betere CTR/engagement. Grote groei komt meestal vanaf maand 2 door iteratie en testing.',
        },
        {
          question: 'Bieden jullie revisies aan?',
          answer: 'Ja. Het aantal revisies hangt af van het pakket. In elk pakket staat duidelijk hoeveel revisierondes inbegrepen zijn.',
        },
        {
          question: 'Voor welke platformen maken jullie content?',
          answer: 'We optimaliseren voor Instagram, TikTok, Facebook, YouTube (Shorts/long-form) en meer, inclusief formaten per kanaal.',
        },
        {
          question: 'Kunnen we eigen footage aanleveren?',
          answer: 'Zeker. Je kan eigen footage sturen, of wij leveren creators + raw footage. We kiezen de aanpak die het best converteert.',
        },
        {
          question: 'Hoe starten we?',
          answer: 'Kies een pakket, rond de betaling af, en we plannen direct de eerste kickoff. Daarna start productie volgens de planning.',
        },
      ]
    : [
        {
          question: 'What services do you offer?',
          answer: 'We deliver UGC content (scripts, creators, filming and editing), creative testing and optimization aligned with your goals.',
        },
        {
          question: 'How quickly will we see results?',
          answer: 'Most clients see improved CTR/engagement within the first 2 weeks. Significant growth typically happens by month 2 with iteration and testing.',
        },
        {
          question: 'Do you offer revisions?',
          answer: 'Yes. Revisions depend on the package. Each package clearly lists how many revision rounds are included.',
        },
        {
          question: 'What platforms do you create content for?',
          answer: 'We optimize for Instagram, TikTok, Facebook, YouTube (Shorts/long-form) and more, including formats per channel.',
        },
        {
          question: 'Can we provide our own footage?',
          answer: 'Absolutely. You can send your own footage, or we provide creators + raw footage. We choose the approach that converts best.',
        },
        {
          question: 'How do we get started?',
          answer: 'Choose a package, complete payment, and we schedule the first kickoff immediately. Then production starts according to the plan.',
        },
      ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{tk('faq.title')}</h2>
          <p className="faq-subtitle">{tk('faq.subtitle')}</p>
          <button className="faq-cta-button" onClick={() => {
            const element = document.getElementById('contact')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>{tk('faq.cta')}</button>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
