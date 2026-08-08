import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { getMethodologies } from '../guide/methodologies'
import { useLocale } from '../i18n/locale'
import { useStrings } from '../i18n/strings'
import './Catalogue.css'

export default function Catalogue() {
  const { locale } = useLocale()
  const t = useStrings()

  return (
    <div className="catalogue">
      <SiteHeader />

      <main className="catalogue__main">
        <header className="catalogue__intro">
          <p className="catalogue__eyebrow">{t.catalogue.eyebrow}</p>
          <h1 className="catalogue__title">{t.catalogue.title}</h1>
          <p className="catalogue__lead">{t.catalogue.lead}</p>
        </header>

        <ul className="catalogue__grid">
          {getMethodologies(locale).map((m) => {
            const available = m.status === 'available'
            const inner = (
              <>
                <div className="methodology-card__head">
                  <span className="methodology-card__domain">{m.domain}</span>
                  {available ? (
                    <span className="methodology-card__steps">{t.catalogue.stepCount(m.steps.length)}</span>
                  ) : (
                    <span className="methodology-card__badge">{t.catalogue.comingSoon}</span>
                  )}
                </div>
                <h2 className="methodology-card__title">{m.title}</h2>
                <p className="methodology-card__blurb">{m.blurb}</p>
                <span className="methodology-card__cta">{available ? t.catalogue.openGuide : t.catalogue.previewOutline}</span>
              </>
            )
            return (
              <li key={m.id}>
                <Link
                  to={`/guide/${m.id}`}
                  className={`methodology-card${available ? '' : ' methodology-card--soon'}`}
                >
                  {inner}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className="catalogue__footer">
        <div className="catalogue__footer-mark">
          <LogoMark size={20} />
          <span>{t.footer.brand}</span>
        </div>
        <span className="catalogue__footer-credit">{t.footer.credit}</span>
        <span className="catalogue__footer-note">{t.catalogue.footerNote}</span>
      </footer>
    </div>
  )
}
