import type { Locale } from '../../i18n/locale'
import type { Methodology } from '../types'
import { csAi } from './cs-ai'
import { educational } from './educational'
import { health } from './health'
import { FR_METHODOLOGIES } from './fr'

/** All methodologies, in catalogue order. Add a new guide by importing it here. */
export const METHODOLOGIES: Methodology[] = [csAi, educational, health]

/** The catalogue in the given locale; untranslated guides fall back to English. */
export function getMethodologies(locale: Locale): Methodology[] {
  return METHODOLOGIES.map((m) => localize(m, locale))
}

export function getMethodology(id: string | undefined, locale: Locale = 'en'): Methodology | undefined {
  const methodology = METHODOLOGIES.find((m) => m.id === id)
  return methodology && localize(methodology, locale)
}

function localize(methodology: Methodology, locale: Locale): Methodology {
  if (locale === 'en') {
    return methodology
  }
  return FR_METHODOLOGIES[methodology.id] ?? methodology
}
