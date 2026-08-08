import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { meridien } from '../brand/palette'
import { useStrings } from '../i18n/strings'
import './Landing.css'

export default function Landing() {
  const t = useStrings()

  return (
    <div className="landing">
      {/* faint construction grid, à la Méridien */}
      <svg className="landing__grid" aria-hidden="true">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={meridien.ink} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <SiteHeader />

      <main className="landing__hero">
        <p className="landing__eyebrow">{t.landing.eyebrow}</p>
        <h1 className="landing__title">
          {t.landing.titleBefore}
          <span className="landing__title-accent">{t.landing.titleAccent}</span>
          {t.landing.titleAfter}
        </h1>
        <p className="landing__lede">{t.landing.lede}</p>
        <div className="landing__cta">
          <Link to="/methodologies" className="landing__btn landing__btn--primary">
            {t.landing.exploreCta}
          </Link>
          <a href="#" className="landing__btn landing__btn--ghost">
            {t.landing.browseCta}
          </a>
        </div>
      </main>

      <footer className="landing__footer">
        <div className="landing__footer-mark">
          <LogoMark size={20} />
          <span>{t.footer.brand}</span>
        </div>
        <span className="landing__footer-credit">{t.footer.credit}</span>
        <span className="landing__footer-note">{t.landing.footerNote}</span>
      </footer>
    </div>
  )
}
