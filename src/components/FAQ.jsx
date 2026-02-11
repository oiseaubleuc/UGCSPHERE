import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../i18n/i18n.jsx'
import './FAQ.css'

const FAQ = () => {
  const { tk, lang } = useI18n()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = lang === 'nl'
    ? [
      { question: 'Wat is UGC?', answer: 'UGC zijn korte video\'s of foto\'s die eruitzien alsof ze door echte mensen zijn gemaakt, niet door een grote productie.' },
      { question: 'Wat krijg ik als ik bestel?', answer: 'Je krijgt kant-en-klare video\'s (en/of foto\'s), geleverd via een link, gemaakt voor socials en ads.' },
      { question: 'Waar kan ik de content gebruiken?', answer: 'Op Instagram, TikTok en in betaalde ads op Meta en TikTok.' },
      { question: 'Wie maakt de video\'s?', answer: 'Onze eigen Sphere Creators (mannen en vrouwen) uit verschillende niches. Geen willekeurige freelancers.' },
      { question: 'Hoe werkt het?', answer: 'Kies een pakket, vul een korte vragenlijst in, wij maken en monteren, jij ontvangt je content.' },
      { question: 'Kan ik een creator of stijl kiezen?', answer: 'Je kunt je voorkeursstijl en voorbeelden delen. Wij matchen de beste creator bij jouw merk.' },
      { question: 'Kan ik om wijzigingen vragen?', answer: 'Ja. Kleine aanpassingen zijn inbegrepen afhankelijk van je pakket.' },
    ]
    : [
      { question: 'What is UGC?', answer: 'UGC is short videos or photos that look like they\'re made by real people, not a big production.' },
      { question: 'What do I get when I order?', answer: 'You get ready-to-use videos (and/or photos), delivered via a link, made for socials and ads.' },
      { question: 'Where can I use the content?', answer: 'On Instagram, TikTok, and in paid ads on Meta and TikTok.' },
      { question: 'Who makes the videos?', answer: 'Our own Sphere Creators (men and women) from different niches. Not random freelancers.' },
      { question: 'How does it work?', answer: 'Pick a package, fill in a short questionnaire, we create and edit, you receive your content.' },
      { question: 'Can I choose a creator or style?', answer: 'You can share your preferred style and examples. We match the best creator for your brand.' },
      { question: 'Can I ask for changes?', answer: 'Yes. Small edits are included depending on your package.' },
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
