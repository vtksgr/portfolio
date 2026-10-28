import { translations } from '../../data/translations.js'
import { projects as projectData } from '../data/projects.js'

export default function ProjectSection({ language = 'en' }) {
  const t = translations[language]
  const projects = t.projects.items
  const workHistoryUrl = `${import.meta.env.BASE_URL}work-history/${
    language === 'ja' ? '?lang=ja' : ''
  }`

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-semibold">{t.projects.title}</h2>

        <a
          href={workHistoryUrl}
          className="inline-flex items-center gap-2 border border-[var(--text)] px-4 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-[0.82rem]"
        >
          {t.projects.workHistoryLink}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const { tech, links } = projectData[index]

          return (
            <div
              key={projectData[index].id}
              className="border border-gray-300 p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>{String(index + 1).padStart(3, '0')}</span>
                <span>{project.type}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-3">{project.subtitle}</p>

              <div className="h-[2px] bg-red-400 w-full mb-4"></div>

              <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="bg-black text-white text-xs px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {links.length > 0 && (
                <div className="text-xs text-gray-500 flex flex-wrap gap-3">
                  {links.map((link) => (
                    <a
                      key={link}
                      href={`https://${link}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${link}`}
                      className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-red-600"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
