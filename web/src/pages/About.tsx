import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import { LogoMark } from '../brand/Logo'
import { CONTACT_EMAILS } from '../guide/contacts'
import { useStrings } from '../i18n/strings'
import './About.css'

export default function About() {
  const t = useStrings()

  return (
    <div className="about">
      <SiteHeader />

      <main className="about__main">
        <header className="about__intro">
          <p className="about__eyebrow">{t.about.eyebrow}</p>
          <h1 className="about__title">{t.about.title}</h1>
        </header>

        {/* ---- Quoi / What ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            {t.about.whatTitle}
          </h2>
          <p className="about__body">
            {t.about.whatBefore}
            <Link className="about__inline-link" to="/methodologies">
              {t.about.whatLink}
            </Link>
            {t.about.whatAfter}
          </p>
        </section>

        {/* ---- Pourquoi / Why ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            {t.about.whyTitle}
          </h2>
          <p className="about__body">
            {t.about.whyBefore}
            <strong>{t.about.whyStrong}</strong>
            {t.about.whyAfter}
          </p>
          <p className="about__body">{t.about.builtFor}</p>
          <ul className="about__list">
            {t.about.audience.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        {/* ---- Par qui / Who ---- */}
        <section className="about__section">
          <h2 className="about__h2">
            <span className="about__h2-rule" />
            {t.about.whoTitle}
          </h2>
          <p className="about__body">
            {t.about.whoBefore}
            <strong>{t.about.whoStrong}</strong>
            {t.about.whoMid}
            <a className="about__inline-link" href="https://github.com/Research-Methodology-Hub" target="_blank" rel="noreferrer">
              Research-Methodology-Hub
            </a>
            {t.about.whoAfter}
          </p>
          <p className="about__contact">
            {t.about.getInTouch}{' '}
            {CONTACT_EMAILS.map((email, i) => (
              <span key={email}>
                {i > 0 && ' · '}
                <a className="about__inline-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            ))}
          </p>
        </section>
      </main>

      <footer className="about__footer">
        <div className="about__footer-mark">
          <LogoMark size={20} />
          <span>{t.footer.brand}</span>
        </div>
        <span className="about__footer-credit">{t.footer.credit}</span>
        <span className="about__footer-note">{t.about.footerNote}</span>
      </footer>
    </div>
  )
}
