import { translations } from '../../data/translations.js'

export default function Footer({ language = 'en' }) {
  const currentYear = new Date().getFullYear()
  const t = translations[language]

  return (
    <footer className="flex flex-col gap-3 border-t border-[rgba(255,59,52,0.22)] bg-[var(--left-bg)] px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between md:px-[4.2rem]">
      <div className="text-[0.95rem] text-[var(--muted)]">
        Sagar <span style={{ color: 'var(--accent)' }}>Pariyar</span> - {t.footer.text}
      </div>

      <div className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[var(--muted)]">
        {t.footer.copyright.replace('{year}', currentYear)}
      </div>
    </footer>
  )
}
