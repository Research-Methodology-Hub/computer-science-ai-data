import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { LOCALES, useLocale } from '../i18n/locale'
import { useStrings } from '../i18n/strings'
import './SiteHeader.css'

export default function SiteHeader() {
  const { locale, setLocale } = useLocale()
  const t = useStrings()

  const nav = [
    { label: t.nav.methodologies, to: '/methodologies' },
    { label: t.nav.about, to: '/about' },
  ]

  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand" aria-label={t.nav.homeAriaLabel}>
        <Logo scale={0.5} />
      </Link>
      <nav className="site-header__nav">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `site-header__link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="site-header__lang" role="group" aria-label="Language">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              lang={l}
              className={`site-header__lang-btn${l === locale ? ' active' : ''}`}
              aria-pressed={l === locale}
              onClick={() => setLocale(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}
