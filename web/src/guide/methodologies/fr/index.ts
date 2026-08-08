import type { Methodology } from '../../types'
import { csAiFr } from './cs-ai'
import { educationalFr } from './educational'
import { engineeringFr } from './engineering'
import { healthFr } from './health'

/**
 * French translations, keyed by guide id. A guide without an entry here falls
 * back to its English version. Add a translation by importing it here.
 */
export const FR_METHODOLOGIES: Record<string, Methodology> = {
  [csAiFr.id]: csAiFr,
  [educationalFr.id]: educationalFr,
  [engineeringFr.id]: engineeringFr,
  [healthFr.id]: healthFr,
}
