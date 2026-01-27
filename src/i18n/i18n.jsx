import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { messages } from './messages'

const I18nContext = createContext(null)

const STORAGE_KEY = 'sphereugc_lang'

export function I18nProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    return stored || defaultLang
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const api = useMemo(() => {
    const t = (objOrString) => {
      if (objOrString == null) return ''
      if (typeof objOrString === 'string') return objOrString
      if (typeof objOrString === 'object') return objOrString[lang] || objOrString.en || ''
      return String(objOrString)
    }

    const tk = (key) => {
      const parts = key.split('.')
      let current = messages[lang] || messages['en']
      for (const part of parts) {
        if (current && typeof current === 'object' && part in current) {
          current = current[part]
        } else {
          return key
        }
      }
      return typeof current === 'string' ? current : key
    }

    const setLanguage = (next) => {
      setLang(next)
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // ignore
      }
    }

    return { lang, setLanguage, t, tk }
  }, [lang])

  return <I18nContext.Provider value={api}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
