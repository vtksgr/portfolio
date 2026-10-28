import { translations } from '../../data/translations.js'

export default function ContactSection({ language = 'en' }) {
  const t = translations[language]
  
  const contactInfo = [
    {
      label: t.contact.currentRole,
      value: t.contact.currentRoleValue,
    },
    {
      label: t.contact.availableFor,
      value: t.contact.availableForValue,
    },
    {
      label: t.contact.education,
      value: t.contact.educationValue,
    },
  ]

  return (
    <section
      id="contact"
      className="border-t border-[rgba(255,59,52,0.45)] bg-[var(--right-bg)] px-5 py-16 sm:px-8 md:px-[4.2rem] md:py-20"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="text-[3.2rem] leading-[1.02] font-semibold text-[var(--text)] md:text-[clamp(3.4rem,5vw,5.25rem)]">
            {t.contact.title}
            <br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              {t.contact.titleEmphasis}
            </span>
            <br />
            {t.contact.titleEnd}
          </h2>

          <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-[1.85] text-[var(--muted)] md:text-[1.02rem]">
            {t.contact.description}
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:vtksgr@gmail.com"
              className="flex items-center gap-4 text-[0.95rem] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              <span
                className="w-[72px] font-mono text-[0.68rem] uppercase tracking-[0.12em]"
                style={{ color: 'var(--accent)' }}
              >
                {t.contact.emailLabel}
              </span>
              <span>vtksgr@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 text-[0.95rem] text-[var(--text)]">
              <span
                className="w-[72px] font-mono text-[0.68rem] uppercase tracking-[0.12em]"
                style={{ color: 'var(--accent)' }}
              >
                {t.contact.locationLabel}
              </span>
              <span>{t.contact.locationValue}</span>
            </div>
          </div>
        </div>

        <div className="border border-[rgba(255,59,52,0.25)] bg-[rgba(255,255,255,0.55)] p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-8">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[1rem] leading-[1.7] text-[var(--text)]">
                  {item.value}
                </p>
              </div>
            ))}

            <div>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                {t.contact.languages}
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {t.contact.languagesList.map((lang) => (
                  <span
                    key={lang}
                    className="border px-3 py-1.5 text-[0.82rem]"
                    style={{
                      color: 'var(--text)',
                      borderColor: 'rgba(255,59,52,0.22)',
                      backgroundColor: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
