import type { Methodology } from '../../types'

/**
 * French translation of the Computer Science & AI guide (see ../cs-ai.ts).
 * Structurally identical to the English source: same id, same 7 steps, same
 * items — content only is translated.
 */
export const csAiFr: Methodology = {
  id: 'cs-ai',
  title: 'Conduire une recherche en informatique et en IA',
  domain: 'Informatique · IA · Science des données',
  blurb:
    'Un flux de travail de recherche computationnelle pour les études empiriques, théoriques et d’ingénierie — jeux de données, architectures, bancs d’essai et rédaction reproductible (ACM / IEEE / NeurIPS).',
  status: 'available',
  intro: [
    'Conduire une étude de recherche en informatique, en intelligence artificielle ou en science des données est un processus intensif mais profondément gratifiant. Ce tutoriel fournit un guide étape par étape pour mener une étude de recherche computationnelle selon les normes académiques standard et celles des conférences à comité de lecture (ACM, IEEE, NeurIPS, SIGKDD). Les recommandations s’adaptent aux projets d’informatique théorique, d’ingénierie des systèmes ou d’apprentissage automatique appliqué.',
  ],
  overviewTopics: [
    'Objectifs de la recherche en informatique et en IA',
    'Philosophie de la recherche computationnelle (empirique, théorique, ingénierie)',
    'Considérations éthiques en IA (confidentialité des données, biais, équité algorithmique et propriété intellectuelle)',
    'Introduction au processus de recherche technique',
    'Aperçu de la rédaction d’un article en informatique (format IMRAD / conférence)',
  ],
  steps: [
    {
      n: 1,
      title: 'Formulation du problème et conceptualisation',
      summary: 'Transformer une idée brute en un énoncé de problème précis, des questions de recherche et un cadre computationnel.',
      items: [
        { text: 'Explorer des idées de recherche computationnelle (remue-méninges)' },
        { text: 'Passer en revue les domaines architecturaux et algorithmiques intéressants à considérer' },
        { text: 'Identifier l’énoncé central du problème, les contraintes du système et le plan expérimental' },
        { text: 'Rédiger les objectifs, les questions de recherche et les objectifs techniques à partir des contraintes du système et du plan expérimental' },
        { text: 'Rédiger la section Cadre de recherche pour décrire le paradigme computationnel retenu' },
      ],
    },
    {
      n: 2,
      title: 'Documenter le contexte',
      summary: 'Explorer le domaine, formuler la motivation et positionner votre contribution par rapport à l’état de l’art.',
      items: [
        { text: 'Rechercher dans la littérature les études de l’état de l’art (SOTA) traitant le problème visé' },
        { text: 'Rédiger la suite du chapitre 1 : Introduction, en mettant l’accent sur la motivation du problème et vos contributions techniques spécifiques' },
        { text: 'Rédiger le chapitre 2 : Revue de littérature et travaux connexes, en comparant les méthodes actuelles de l’état de l’art à la solution que vous proposez' },
      ],
    },
    {
      n: 3,
      title: 'Ingénierie des données et sélection des références',
      summary: 'Définir le domaine de données, la procédure d’échantillonnage ou de simulation, et les références (baselines) servant de comparaison.',
      items: [
        { text: 'Considérer le domaine de données cible ou l’environnement du problème en cohérence avec vos objectifs' },
        { text: 'Selon les contraintes matérielles et logistiques, sélectionner la procédure d’échantillonnage du jeu de données ou de simulation de l’environnement' },
        { text: 'Rédiger les sections Caractérisation du jeu de données, Bancs d’essai (benchmarks) et Partitions des données (entraînement / validation / test)' },
      ],
    },
    {
      n: 4,
      title: 'Méthodologie et instrumentation du système',
      summary: 'Concevoir l’algorithme ou l’architecture, le formaliser et analyser sa complexité et sa validité théorique.',
      items: [
        { text: 'Choisir ou concevoir un algorithme, une architecture de réseau ou un modèle mathématique adapté à votre problème' },
        { text: 'Adopter ou adapter des architectures neuronales ou des cadres algorithmiques préexistants' },
        { text: 'Rédiger les formulations mathématiques et le pseudo-code' },
        { text: 'Développer le pipeline du système et la stratégie d’optimisation' },
        { text: 'Évaluer l’analyse de complexité de l’algorithme (notation Big-O)' },
        { text: 'Évaluer la validité théorique et la convergence du modèle' },
        { text: 'Rédiger la section Méthodologie / Architecture proposée pour décrire les composants du système' },
      ],
    },
    {
      n: 5,
      title: 'Implémentation et dispositif expérimental',
      summary: 'Construire l’artefact et spécifier le matériel, les logiciels, les hyperparamètres et les métriques.',
      items: [
        { text: 'Pour les études empiriques, comparatives et expérimentales, développer un prototype, un pipeline système ou un artefact qui influence les métriques de performance' },
        { text: 'Rédiger la section Dispositif expérimental : matériel (GPU / CPU), environnement logiciel, hyperparamètres et modalités de comparaison avec les références (baselines)' },
        { text: 'Rédiger la section Métriques d’évaluation : métriques quantitatives liées aux questions de recherche (p. ex. exactitude, F1-score, latence, débit, empreinte mémoire)' },
      ],
    },
    {
      n: 6,
      title: 'Exécution, bancs d’essai et analyse des données',
      summary: 'Exécuter les expériences selon la configuration spécifiée et analyser rigoureusement les résultats.',
      items: [
        { text: 'Exécuter les bancs d’essai et les expériences en suivant strictement les configurations décrites au chapitre 3 : Méthodologie' },
        {
          text: 'Analyser les données computationnelles selon la section Métriques d’évaluation',
          children: [
            'Extraire les journaux (logs) et les métriques de performance des exécutions d’entraînement et de test',
            'Calculer les agrégats statistiques descriptifs (moyenne, écart-type sur plusieurs graines aléatoires)',
            'Réaliser des tests de signification statistique (p. ex. test t, test de Wilcoxon)',
            'Mener des études d’ablation pour évaluer l’impact de chaque composant du système',
          ],
        },
        { text: 'Créer les tableaux (matrice de bancs d’essai) et les figures (courbes de perte, courbes ROC, graphiques de latence)' },
      ],
    },
    {
      n: 7,
      title: 'Rédaction et diffusion',
      summary: 'Rédiger les résultats et la discussion, puis publier des matériaux supplémentaires reproductibles.',
      items: [
        { text: 'Rédiger le chapitre 4 : Résultats expérimentaux et bancs d’essai' },
        { text: 'Rédiger le chapitre 5 : Discussion, limites (cas limites, modes de défaillance, coûts de calcul) et conclusion' },
        { text: 'Créer les matériaux supplémentaires (dépôt de code open source, configurations d’hyperparamètres et scripts de reproductibilité)' },
        { text: 'Réinvestir les enseignements de l’étude dans des logiciels de production, des bibliothèques open source ou de futurs cadres d’ingénierie' },
      ],
    },
  ],
}
