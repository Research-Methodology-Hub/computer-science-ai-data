import type { Methodology } from '../../types'

/**
 * French translation of the Engineering Research guide. The English source is
 * proposed separately (see PR for the engineering guide); this translation is
 * dormant until that guide is registered, since the catalogue derives from
 * the English list. Structurally identical: same id, same 7 steps, same items.
 */
export const engineeringFr: Methodology = {
  id: 'engineering',
  title: 'Conduire une recherche en ingénierie',
  domain: 'Mécanique · Électrique · Génie civil · Industriel',
  blurb:
    'Un flux de travail de recherche par conception et expérimentation pour les systèmes d’ingénierie — exigences, modélisation et simulation, prototypage, essais instrumentés, vérification et validation, et rédaction conforme aux normes (IEEE / ISO / ASTM).',
  status: 'available',
  intro: [
    'Conduire une étude de recherche en ingénierie est un processus intensif mais profondément gratifiant. Ce tutoriel fournit un guide étape par étape pour mener une étude de recherche par conception et expérimentation selon la pratique standard de la recherche en ingénierie : un système physique ou d’ingénierie est spécifié, modélisé, prototypé et validé au regard d’exigences mesurables. Les recommandations s’adaptent aux projets de génie mécanique, électrique, civil, chimique et industriel, que la contribution soit un nouveau dispositif, un procédé, un matériau ou une méthode.',
  ],
  overviewTopics: [
    'Objectifs et types de la recherche en ingénierie (orientée conception, expérimentale, analytique)',
    'Philosophie de la recherche en ingénierie (science de la conception, niveaux de maturité technologique, vérification vs validation)',
    'Considérations éthiques en ingénierie (sécurité, impact environnemental, codes de déontologie professionnels, propriété intellectuelle)',
    'Introduction au processus de recherche en ingénierie',
    'Aperçu de la rédaction d’un mémoire ou d’un article d’ingénierie (formats IMRAD et rapport technique)',
  ],
  steps: [
    {
      n: 1,
      title: 'Formulation du problème et spécification des exigences',
      summary: 'Transformer un besoin d’ingénierie en un énoncé de problème précis, des exigences mesurables et des questions de recherche.',
      items: [
        { text: 'Identifier un besoin d’ingénierie ou un écart de performance issu de l’industrie, de la société ou de recherches antérieures' },
        { text: 'Passer en revue les systèmes, procédés et technologies candidats à considérer' },
        { text: 'Définir l’énoncé du problème, les exigences fonctionnelles et les contraintes de conception (performance, coût, sécurité, environnement)' },
        { text: 'Rédiger les objectifs, les questions de recherche et les objectifs techniques mesurables à partir des exigences et des contraintes' },
        { text: 'Rédiger la section Spécification des exigences pour décrire le système visé et ses critères de réussite' },
      ],
    },
    {
      n: 2,
      title: 'Documenter le contexte',
      summary: 'Rechercher dans la littérature, les brevets et les normes, et positionner votre contribution par rapport aux solutions existantes.',
      items: [
        { text: 'Rechercher dans la littérature, les bases de brevets et les normes applicables (IEEE, ISO, ASTM) les solutions existantes au problème visé' },
        { text: 'Rédiger la suite du chapitre 1 : Introduction, en mettant l’accent sur le besoin d’ingénierie, la motivation et vos contributions techniques spécifiques' },
        { text: 'Rédiger le chapitre 2 : Revue de littérature et état de l’art, en comparant les conceptions, procédés et matériaux existants à la solution proposée' },
      ],
    },
    {
      n: 3,
      title: 'Conception préliminaire et modélisation',
      summary: 'Générer des variantes de conception, modéliser le système analytiquement ou numériquement, et sélectionner un concept par analyse de compromis.',
      items: [
        { text: 'Générer des concepts de conception candidats satisfaisant les exigences' },
        { text: 'Développer des modèles analytiques ou des simulations numériques (p. ex. éléments finis, CFD, simulation de circuits ou de procédés) des concepts candidats' },
        { text: 'Mener une analyse de compromis et de faisabilité au regard des exigences (performance, coût, fabricabilité, risque)' },
        { text: 'Sélectionner le concept à développer et justifier ce choix' },
        { text: 'Rédiger les sections Conception préliminaire et Modélisation du système' },
      ],
    },
    {
      n: 4,
      title: 'Plan d’expériences et instrumentation',
      summary: 'Définir les variables, le plan d’essais et l’instrumentation, et quantifier l’incertitude de mesure avant les essais.',
      items: [
        { text: 'Identifier les variables indépendantes, dépendantes et contrôlées de l’étude' },
        { text: 'Concevoir les expériences (matrice d’essais, plan d’expériences, nombre de répétitions) pour répondre aux questions de recherche' },
        {
          text: 'Spécifier le banc d’essai et l’instrumentation pour chaque variable mesurée',
          children: [
            'Sélectionner des capteurs et des équipements de mesure d’étendue et de résolution adéquates',
            'Étalonner les instruments par rapport à des étalons de référence',
            'Estimer l’incertitude de mesure de chaque instrument',
            'Définir la procédure d’acquisition des données et la fréquence d’échantillonnage',
          ],
        },
        { text: 'Rédiger les sections Plan d’expériences et Instrumentation' },
      ],
    },
    {
      n: 5,
      title: 'Prototypage et préparation des essais',
      summary: 'Construire le prototype ou les éprouvettes et préparer un protocole d’essai sûr et répétable.',
      items: [
        { text: 'Fabriquer le prototype, le banc d’essai ou les éprouvettes conformément à la conception retenue' },
        { text: 'Documenter les matériaux, composants, dimensions et procédés de fabrication afin que l’artefact soit reproductible' },
        { text: 'Rédiger la section Protocole d’essai : procédure pas à pas, conditions de fonctionnement et mesures de sécurité' },
        { text: 'Réaliser des essais pilotes pour vérifier que le banc, l’instrumentation et la procédure fonctionnent comme spécifié' },
      ],
    },
    {
      n: 6,
      title: 'Essais, validation et analyse des données',
      summary: 'Réaliser les essais selon le protocole, analyser les données avec leur incertitude et confronter l’expérience au modèle et aux exigences.',
      items: [
        { text: 'Exécuter la campagne d’essais en suivant strictement les procédures décrites dans le Protocole d’essai' },
        {
          text: 'Analyser les données expérimentales selon le Plan d’expériences',
          children: [
            'Réduire les mesures brutes en grandeurs d’intérêt',
            'Calculer les statistiques descriptives et propager l’incertitude de mesure',
            'Réaliser des tests de signification statistique lorsque le plan d’expériences l’exige',
            'Comparer les résultats expérimentaux aux modèles analytiques ou de simulation (validation du modèle)',
          ],
        },
        { text: 'Vérifier le système au regard des exigences (vérification) et le valider au regard du besoin d’ingénierie initial (validation)' },
        { text: 'Créer les tableaux et les figures (courbes de performance, barres d’erreur, comparaisons modèle-expérience)' },
      ],
    },
    {
      n: 7,
      title: 'Rédaction et diffusion',
      summary: 'Rédiger les résultats, les limites et les recommandations de conception, et publier une documentation technique reproductible.',
      items: [
        { text: 'Rédiger le chapitre 4 : Résultats et validation' },
        { text: 'Rédiger le chapitre 5 : Discussion, limites (domaine de fonctionnement, modes de défaillance, considérations de passage à l’échelle) et conclusion' },
        { text: 'Créer les matériaux supplémentaires (plans, schémas, nomenclature, données d’essai et scripts d’analyse)' },
        { text: 'Diffuser les travaux par des revues, des conférences, des brevets ou un transfert technologique vers l’industrie' },
      ],
    },
  ],
}
