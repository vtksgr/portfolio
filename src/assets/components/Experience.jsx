import { translations } from '../../data/translations.js'

function ExperienceRow({ item }) {
  return (
    <article className="grid gap-6 border-b border-[rgba(255,59,52,0.22)] py-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
      <div className="space-y-1.5">
        <p
          className="font-mono text-[0.72rem] uppercase tracking-[0.12em]"
          style={{ color: 'var(--accent)' }}
        >
          {item.period}
        </p>
        <p className="text-[0.92rem] leading-[1.45] text-[var(--muted)]">
          {item.place}
          <br />
          {item.location}
        </p>
      </div>

      <div>
        <h3 className="text-[1.95rem] leading-[1.08] font-semibold text-[var(--text)] md:text-[2.9rem]">
          {item.title}
        </h3>

        <p className="mt-5 max-w-[1100px] text-[0.98rem] leading-[1.85] text-[var(--text)] md:text-[1.02rem]">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default function Experience({ language = 'en' }) {
  const t = translations[language]
  
  return (
    <section
      id="experience"
      className="border-y border-[rgba(255,59,52,0.45)] bg-[var(--right-bg)] px-5 py-14 sm:px-8 md:px-[4.2rem] md:py-18"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end gap-4 md:gap-6">
          <span
            className="text-[1.1rem] font-bold leading-none md:text-[1rem]"
            style={{ color: 'var(--accent)' }}
          >
            03
          </span>
          <h2 className="text-[3rem] leading-none font-semibold tracking-[0.01em] text-[var(--text)] md:text-[4.35rem]">
            {t.experience.title}
          </h2>
          <div className="mb-3 hidden h-px flex-1 md:block">
            <div
              className="h-px w-full"
              style={{ backgroundColor: 'rgba(255, 59, 52, 0.45)' }}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(255,59,52,0.22)] md:mt-16">
          {t.experience.items.map((item) => (
            <ExperienceRow key={`${item.period}-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
