import type { Methodology } from '../../types'

/**
 * French translation of the Health Research placeholder (see ../health.ts).
 * Same id and coming-soon status — content only is translated.
 */
export const healthFr: Methodology = {
  id: 'health',
  title: 'Conduire une recherche en santé',
  domain: 'Clinique · Santé publique · Biomédical',
  blurb:
    'Un flux de travail de recherche clinique et en santé publique — plan d’étude, éthique et approbation du comité d’éthique (IRB), collecte des données, biostatistique et rédaction normalisée (CONSORT / STROBE).',
  status: 'coming-soon',
  intro: [
    'Un guide étape par étape pour la recherche clinique, en santé publique et biomédicale est en cours de rédaction. L’aperçu ci-dessous en décrit le périmètre prévu ; le processus complet — du plan d’étude à la rédaction — suivra.',
  ],
  overviewTopics: [
    'Objectifs et types de la recherche en santé (observationnelle vs interventionnelle)',
    'Éthique de la recherche, consentement éclairé et approbation du comité d’éthique (IRB)',
    'Plan d’étude (essai contrôlé randomisé, cohorte, cas-témoins, transversal)',
    'Échantillonnage, recrutement et collecte des données',
    'Biostatistique et analyse (tailles d’effet, intervalles de confiance, analyse de survie)',
    'Rédaction normalisée (CONSORT pour les essais, STROBE pour les études observationnelles)',
  ],
  steps: [],
}
