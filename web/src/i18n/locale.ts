import { createContext, useContext } from 'react'

/** Supported interface languages. */
export type Locale = 'en' | 'fr'

export const LOCALES: readonly Locale[] = ['en', 'fr']

export const LOCALE_STORAGE_KEY = 'rmh-locale'

export interface LocaleValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleValue>({
  locale: 'en',
  setLocale: () => {},
})

export function useLocale(): LocaleValue {
  return useContext(LocaleContext)
}

export function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'fr'
}
