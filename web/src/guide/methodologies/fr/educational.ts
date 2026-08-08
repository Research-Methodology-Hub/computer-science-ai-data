import type { Methodology } from '../../types'

/**
 * French translation of the Educational Research guide (see ../educational.ts).
 * Structurally identical to the English source: same id, same 7 steps, same
 * items — content only is translated.
 */
export const educationalFr: Methodology = {
  id: 'educational',
  title: 'Conduire une recherche en éducation',
  domain: 'Éducation · Sciences sociales',
  blurb:
    'Un flux de travail de recherche en sciences sociales — variables clés, plan de recherche, échantillonnage, fiabilité et validité des instruments, et chapitres du mémoire (Introduction → Conclusion).',
  status: 'available',
  credit: 'Adapté de Katrina A. Korb, « Conducting Educational Research » (korbedpsych.com).',
  intro: [
    'Conduire une étude de recherche en éducation est un processus intensif mais profondément gratifiant. Ce tutoriel fournit un guide étape par étape pour mener une étude de recherche en éducation selon les normes standard de la recherche en éducation. Les principes généraux des méthodes de recherche peuvent être adaptés par d’autres chercheurs en sciences sociales à leur propre domaine d’étude.',
  ],
  overviewTopics: [
    'Objectifs de la recherche en éducation',
    'Philosophie de la recherche',
    'Considérations éthiques de la conduite d’une recherche',
    'Introduction au processus de recherche',
    'Aperçu de la rédaction d’une étude de recherche',
  ],
  steps: [
    {
      n: 1,
      title: 'Formulation du problème et plan de recherche',
      summary: 'Passer d’une idée de recherche aux variables clés, aux questions de recherche, aux hypothèses et à un plan choisi.',
      items: [
        { text: 'Explorer des idées de recherche (remue-méninges)' },
        { text: 'Passer en revue les variables éducatives intéressantes à considérer' },
        { text: 'Identifier les variables clés et le plan de recherche' },
        { text: 'Rédiger les objectifs, les questions de recherche et les hypothèses à partir des variables clés et du plan de recherche' },
        { text: 'Rédiger la section Plan de recherche pour décrire le plan retenu' },
      ],
    },
    {
      n: 2,
      title: 'Population et échantillonnage',
      summary: 'Définir qui vous allez étudier et comment vous les sélectionnerez.',
      items: [
        { text: 'Considérer la population en cohérence avec vos objectifs' },
        { text: 'Selon les contraintes logistiques, sélectionner la procédure d’échantillonnage' },
        { text: 'Rédiger les sections Population, Échantillon et Technique d’échantillonnage' },
      ],
    },
    {
      n: 3,
      title: 'Littérature et instrumentation',
      summary: 'Rechercher les études antérieures et choisir un instrument fiable et valide pour chaque variable clé.',
      items: [
        { text: 'Rechercher dans la littérature d’autres études portant sur vos variables clés' },
        {
          text: 'Choisir un instrument approprié pour chaque variable clé',
          children: [
            'Adopter ou adapter des instruments préexistants',
            'Rédiger les items du questionnaire',
            'Développer le format de l’instrument',
            'Évaluer la fiabilité de l’instrument',
            'Évaluer la validité de l’instrument',
          ],
        },
        { text: 'Rédiger la section Instruments pour décrire les instruments' },
      ],
    },
    {
      n: 4,
      title: 'Méthode : collecte des données et plan d’analyse',
      summary: 'Spécifier l’éventuel traitement et les procédures de collecte et d’analyse des données.',
      items: [
        { text: 'Pour les études expérimentales et quasi expérimentales, développer un traitement censé influencer les variables dépendantes' },
        { text: 'Rédiger la section Méthode de collecte des données : le traitement et les modalités d’administration des instruments' },
        { text: 'Rédiger la section Méthode d’analyse des données : les statistiques appropriées selon les questions de recherche et les hypothèses' },
      ],
    },
    {
      n: 5,
      title: 'Documenter le contexte',
      summary: 'Rédiger l’introduction et la revue de littérature pertinente autour de vos variables clés.',
      items: [
        { text: 'Rédiger la suite du chapitre 1 : Introduction, en mettant l’accent sur les variables clés des objectifs' },
        { text: 'Rédiger le chapitre 2 : Revue de la littérature pertinente, en mettant l’accent sur les variables clés des objectifs' },
      ],
    },
    {
      n: 6,
      title: 'Collecte et analyse des données',
      summary: 'Collecter les données selon la procédure planifiée et les analyser au regard de vos questions de recherche.',
      items: [
        { text: 'Collecter les données en suivant strictement les procédures décrites au chapitre 3 : Méthodes' },
        {
          text: 'Analyser les données selon la Méthode d’analyse des données',
          children: [
            'Coder les données issues de l’instrument',
            'Calculer les statistiques descriptives',
            'Réaliser les statistiques inférentielles pour analyser les questions de recherche et les hypothèses',
            'Créer les tableaux et les figures',
          ],
        },
      ],
    },
    {
      n: 7,
      title: 'Rédaction et diffusion',
      summary: 'Rédiger les résultats et la conclusion, et appliquer les enseignements tirés.',
      items: [
        { text: 'Rédiger le chapitre 4 : Résultats' },
        { text: 'Rédiger le chapitre 5 : Conclusion' },
        { text: 'Créer les matériaux supplémentaires' },
        { text: 'Mettre en œuvre dans l’éducation les enseignements tirés de l’étude de recherche' },
      ],
    },
  ],
}
