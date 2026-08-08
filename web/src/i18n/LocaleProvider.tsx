import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LocaleContext, LOCALE_STORAGE_KEY, isLocale, type Locale } from './locale'

function getInitialLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (isLocale(stored)) {
    return stored
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
