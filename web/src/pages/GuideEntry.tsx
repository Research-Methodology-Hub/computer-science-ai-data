import { Link, Navigate, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { CONTACT_EMAILS } from '../guide/contacts'
import { getMethodology } from '../guide/methodologies'
import { useLocale } from '../i18n/locale'
import { useStrings } from '../i18n/strings'
import './GuideEntry.css'

export default function GuideEntry() {
  const { id } = useParams()
  const { locale } = useLocale()
  const t = useStrings()
  const methodology = getMethodology(id, locale)

  // Unknown slug → back to the catalogue.
  if (!methodology) {
    return <Navigate to="/methodologies" replace />
  }

  const { title, domain, intro, overviewTopics, steps, status, credit } = methodology
  const isComingSoon = status === 'coming-soon' || steps.length === 0

  return (
    <div className="guide">
      <SiteHeader />

      <main className="guide__main">
        {/* ---- intro ---- */}
        <header className="guide__intro">
          <p className="guide__eyebrow">
            <Link to="/methodologies" className="guide__breadcrumb">
              {t.guide.breadcrumb}
            </Link>{' '}
            / {domain}
          </p>
          <h1 className="guide__title">{title}</h1>
          {intro.map((p) => (
            <p className="guide__lead" key={p.slice(0, 32)}>
              {p}
            </p>
          ))}
          {!isComingSoon && (
            <p className="guide__lead">
              {t.guide.recommendationBefore}
              <a className="guide__inline-link" href="#overview">
                {t.guide.recommendationLink}
              </a>
              {t.guide.recommendationAfter}
            </p>
          )}
          <p className="guide__contact">
            {t.guide.contactPrompt}{' '}
            {CONTACT_EMAILS.map((email, i) => (
              <span key={email}>
                {i > 0 && ' · '}
                <a className="guide__inline-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            ))}
          </p>
        </header>

        {/* ---- overview ---- */}
        <section className="guide__overview" id="overview">
          <h2 className="guide__h2">
            <span className="guide__h2-rule" />
            {t.guide.overviewTitle}
          </h2>
          <ul className="guide__overview-list">
            {overviewTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>

        {/* ---- steps (or coming-soon notice) ---- */}
        {isComingSoon ? (
          <section className="guide__coming-soon">
            <span className="guide__badge">{t.guide.comingSoonBadge}</span>
            <p className="guide__coming-soon-text">
              {t.guide.comingSoonBefore}
              <a className="guide__inline-link" href={`mailto:${CONTACT_EMAILS[0]}`}>
                {t.guide.comingSoonLink}
              </a>
              {t.guide.comingSoonAfter}
            </p>
          </section>
        ) : (
          <>
            <section className="guide__steps">
              <h2 className="guide__h2">
                <span className="guide__h2-rule" />
                {t.guide.stepsTitle}
              </h2>

              <ol className="guide__step-grid">
                {steps.map((step) => (
                  <li className="step-card" key={step.n}>
                    <div className="step-card__head">
                      <span className="step-card__num">{String(step.n).padStart(2, '0')}</span>
                      <h3 className="step-card__title">{step.title}</h3>
                    </div>
                    <p className="step-card__summary">{step.summary}</p>
                    <ul className="step-card__items">
                      {step.items.map((item, i) => (
                        <li key={i}>
                          {item.text}
                          {item.children && (
                            <ul className="step-card__subitems">
                              {item.children.map((c, j) => (
                                <li key={j}>{c}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            <nav className="guide__next">
              <Link to={`/guide/${methodology.id}`} className="guide__next-btn">
                {t.guide.startWithStep(steps[0].title)}
              </Link>
            </nav>
          </>
        )}

        {credit && <p className="guide__credit">{credit}</p>}
      </main>

      <footer className="guide__footer">
        <div className="guide__footer-mark">
          <LogoMark size={20} />
          <span>{t.footer.brand}</span>
        </div>
        <span className="guide__footer-credit">{t.footer.credit}</span>
        <span className="guide__footer-note">{domain}</span>
      </footer>
    </div>
  )
}
