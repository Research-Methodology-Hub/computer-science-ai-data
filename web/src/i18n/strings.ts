import { useLocale, type Locale } from './locale'

/**
 * All interface strings, per locale. The single interface guarantees every
 * locale defines every key. Guide content is translated separately, one file
 * per guide, under guide/methodologies/<locale>/.
 */
export interface UiStrings {
  nav: {
    methodologies: string
    about: string
    homeAriaLabel: string
  }
  footer: {
    brand: string
    credit: string
  }
  landing: {
    eyebrow: string
    titleBefore: string
    titleAccent: string
    titleAfter: string
    lede: string
    exploreCta: string
    browseCta: string
    footerNote: string
  }
  catalogue: {
    eyebrow: string
    title: string
    lead: string
    stepCount: (n: number) => string
    comingSoon: string
    openGuide: string
    previewOutline: string
    footerNote: string
  }
  guide: {
    breadcrumb: string
    recommendationBefore: string
    recommendationLink: string
    recommendationAfter: string
    contactPrompt: string
    overviewTitle: string
    stepsTitle: string
    comingSoonBadge: string
    comingSoonBefore: string
    comingSoonLink: string
    comingSoonAfter: string
    startWithStep: (title: string) => string
  }
  about: {
    eyebrow: string
    title: string
    whatTitle: string
    whatBefore: string
    whatLink: string
    whatAfter: string
    whyTitle: string
    whyBefore: string
    whyStrong: string
    whyAfter: string
    builtFor: string
    audience: string[]
    whoTitle: string
    whoBefore: string
    whoStrong: string
    whoMid: string
    whoAfter: string
    getInTouch: string
    footerNote: string
  }
}

const en: UiStrings = {
  nav: {
    methodologies: 'Methodologies',
    about: 'About',
    homeAriaLabel: 'Research Methodology Hub — home',
  },
  footer: {
    brand: 'Research Methodology Hub',
    credit: 'Initialised by Mohamed El Hajji',
  },
  landing: {
    eyebrow: 'Est. 2026 · Open research methodology',
    titleBefore: 'A centralized hub for research ',
    titleAccent: 'methodology',
    titleAfter: '.',
    lede:
      'Sharing research methodologies, frameworks, and tools across diverse academic and scientific disciplines — built for reproducibility, rigor, and structure.',
    exploreCta: 'Explore the guides →',
    browseCta: 'Browse the catalogue',
    footerNote: 'Methods · Frameworks · Tools',
  },
  catalogue: {
    eyebrow: 'Methodologies',
    title: 'Research methodology guides',
    lead:
      'Step-by-step methodology guides across disciplines. Each follows the same rigorous structure — overview, then an ordered research process — adapted to its field. Pick a methodology to begin.',
    stepCount: (n) => `${n} steps`,
    comingSoon: 'Coming soon',
    openGuide: 'Open guide →',
    previewOutline: 'Preview outline →',
    footerNote: 'Methods across disciplines',
  },
  guide: {
    breadcrumb: 'Methodologies',
    recommendationBefore: 'We recommend starting with the ',
    recommendationLink: 'Overview of Scientific Research',
    recommendationAfter:
      ' so the general principles are clear. If you have already started and need advice on a particular step, jump straight to it below. If you are just beginning, follow the steps in order to review the entire research process before you start.',
    contactPrompt: 'Questions, comments, or corrections?',
    overviewTitle: 'Overview of Scientific Research',
    stepsTitle: 'Steps in Conducting Scientific Research',
    comingSoonBadge: 'Coming soon',
    comingSoonBefore:
      'The full step-by-step guide for this methodology is being written. The overview above outlines the intended scope. Want to help shape it? ',
    comingSoonLink: 'Get in touch',
    comingSoonAfter: '.',
    startWithStep: (title) => `Start with Step 1 · ${title} →`,
  },
  about: {
    eyebrow: 'About',
    title: 'About Research Methodology Hub',
    whatTitle: 'What it is',
    whatBefore:
      'Research Methodology Hub is an open-source toolbox of standardized guidelines, frameworks, and templates for conducting rigorous, reproducible research in Computer Science, Artificial Intelligence, and Data Science. At its core are step-by-step ',
    whatLink: 'methodology guides',
    whatAfter:
      ' that walk through the full research lifecycle — from problem formulation and literature review to methodology, experimentation, analysis, and dissemination — across multiple disciplines.',
    whyTitle: 'Why it exists',
    whyBefore:
      'In modern Computer Science and AI research, reproducibility is a major challenge. Methods are often under-documented, baselines inconsistent, and results hard to reproduce. This hub exists to improve',
    whyStrong: ' reproducibility, rigor, and structure',
    whyAfter:
      ' — giving researchers a shared, dependable process for data management, model evaluation, and software engineering in science.',
    builtFor: 'It is built for:',
    audience: [
      "Master's students — learning to structure a research project",
      'PhD students — conducting and publishing original research',
      'Supervisors & teachers — guiding and reviewing student work (encadrement)',
      'Scientific researchers — standardizing methodology across projects',
      'AI assistants & agents — supporting researchers throughout the workflow',
    ],
    whoTitle: 'Who is behind it',
    whoBefore: 'This project was ',
    whoStrong: 'initialised by Mohamed El Hajji',
    whoMid: ' and is built with the community, hosted by the ',
    whoAfter:
      ' organization. Contributions — frameworks, templates, and best-practice guides — are welcome.',
    getInTouch: 'Get in touch:',
    footerNote: 'Computer Science · AI · Data Science',
  },
}

const fr: UiStrings = {
  nav: {
    methodologies: 'Méthodologies',
    about: 'À propos',
    homeAriaLabel: 'Research Methodology Hub — accueil',
  },
  footer: {
    brand: 'Research Methodology Hub',
    credit: 'Initié par Mohamed El Hajji',
  },
  landing: {
    eyebrow: 'Fondé en 2026 · Méthodologie de recherche ouverte',
    titleBefore: 'Un hub centralisé pour la ',
    titleAccent: 'méthodologie',
    titleAfter: ' de recherche.',
    lede:
      'Partager des méthodologies, des cadres et des outils de recherche à travers diverses disciplines académiques et scientifiques — au service de la reproductibilité, de la rigueur et de la structure.',
    exploreCta: 'Explorer les guides →',
    browseCta: 'Parcourir le catalogue',
    footerNote: 'Méthodes · Cadres · Outils',
  },
  catalogue: {
    eyebrow: 'Méthodologies',
    title: 'Guides de méthodologie de recherche',
    lead:
      'Des guides méthodologiques étape par étape à travers les disciplines. Chacun suit la même structure rigoureuse — un aperçu, puis un processus de recherche ordonné — adaptée à son domaine. Choisissez une méthodologie pour commencer.',
    stepCount: (n) => `${n} étapes`,
    comingSoon: 'Bientôt disponible',
    openGuide: 'Ouvrir le guide →',
    previewOutline: 'Aperçu du plan →',
    footerNote: 'Des méthodes à travers les disciplines',
  },
  guide: {
    breadcrumb: 'Méthodologies',
    recommendationBefore: "Nous recommandons de commencer par l'",
    recommendationLink: 'Aperçu de la recherche scientifique',
    recommendationAfter:
      " afin de clarifier les principes généraux. Si vous avez déjà commencé et cherchez des conseils sur une étape particulière, accédez-y directement ci-dessous. Si vous débutez, suivez les étapes dans l'ordre pour passer en revue l'ensemble du processus de recherche avant de vous lancer.",
    contactPrompt: 'Questions, commentaires ou corrections ?',
    overviewTitle: 'Aperçu de la recherche scientifique',
    stepsTitle: "Étapes de la conduite d'une recherche scientifique",
    comingSoonBadge: 'Bientôt disponible',
    comingSoonBefore:
      "Le guide complet, étape par étape, de cette méthodologie est en cours de rédaction. L'aperçu ci-dessus en décrit le périmètre prévu. Vous souhaitez contribuer à le façonner ? ",
    comingSoonLink: 'Contactez-nous',
    comingSoonAfter: '.',
    startWithStep: (title) => `Commencer par l'étape 1 · ${title} →`,
  },
  about: {
    eyebrow: 'À propos',
    title: 'À propos de Research Methodology Hub',
    whatTitle: 'Ce que c’est',
    whatBefore:
      'Research Methodology Hub est une boîte à outils open source de lignes directrices, de cadres et de modèles normalisés pour conduire une recherche rigoureuse et reproductible en informatique, en intelligence artificielle et en science des données. En son cœur se trouvent des ',
    whatLink: 'guides méthodologiques',
    whatAfter:
      " étape par étape qui parcourent l'ensemble du cycle de vie de la recherche — de la formulation du problème et la revue de littérature à la méthodologie, l'expérimentation, l'analyse et la diffusion — à travers plusieurs disciplines.",
    whyTitle: 'Pourquoi ce hub existe',
    whyBefore:
      'Dans la recherche moderne en informatique et en IA, la reproductibilité est un défi majeur. Les méthodes sont souvent insuffisamment documentées, les références (baselines) incohérentes et les résultats difficiles à reproduire. Ce hub existe pour améliorer',
    whyStrong: ' la reproductibilité, la rigueur et la structure',
    whyAfter:
      " — en donnant aux chercheurs un processus commun et fiable pour la gestion des données, l'évaluation des modèles et le génie logiciel scientifique.",
    builtFor: 'Il est conçu pour :',
    audience: [
      'Étudiants en master — apprendre à structurer un projet de recherche',
      'Doctorants — conduire et publier une recherche originale',
      'Encadrants et enseignants — guider et évaluer les travaux des étudiants (encadrement)',
      'Chercheurs scientifiques — normaliser la méthodologie entre les projets',
      "Assistants et agents d'IA — accompagner les chercheurs tout au long du flux de travail",
    ],
    whoTitle: 'Qui est derrière ce projet',
    whoBefore: 'Ce projet a été ',
    whoStrong: 'initié par Mohamed El Hajji',
    whoMid: " ; il est construit avec la communauté et hébergé par l'organisation ",
    whoAfter:
      '. Les contributions — cadres, modèles et guides de bonnes pratiques — sont les bienvenues.',
    getInTouch: 'Nous contacter :',
    footerNote: 'Informatique · IA · Science des données',
  },
}

export const STRINGS: Record<Locale, UiStrings> = { en, fr }

export function useStrings(): UiStrings {
  const { locale } = useLocale()
  return STRINGS[locale]
}
