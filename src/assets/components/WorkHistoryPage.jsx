import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { workHistory } from '../data/workHistory.js'
import CustomCursor from './CustomCursor.jsx'
import Footer from './Footer.jsx'
import ScrollToTopButton from './ScrollToTopButton.jsx'

const homeUrl = import.meta.env.BASE_URL

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

const textLink = `underline decoration-[rgba(34,34,34,0.3)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)] ${focusRing}`

const timelineColumns = 'md:grid-cols-[12rem_minmax(0,1fr)] lg:grid-cols-[15rem_minmax(0,1fr)]'

function getInitialLanguage() {
  const lang = new URLSearchParams(window.location.search).get('lang')
  return lang === 'ja' ? 'ja' : 'en'
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-[var(--accent)]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function SiteLinks({ links }) {
  return links.map((link, index) => (
    <span key={link}>
      {index > 0 && ', '}
      <a
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`[overflow-wrap:anywhere] ${textLink}`}
      >
        {link}
      </a>
    </span>
  ))
}

function Meta({ label, children }) {
  return (
    <div>
      <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-[#2563EB]">
        {label}
      </dt>
      <dd className="m-0">{children}</dd>
    </div>
  )
}

function Marker({ variant, className }) {
  const shape =
    variant === 'major'
      ? 'h-[13px] w-[13px] -left-[7px] bg-[var(--accent)]'
      : 'h-[11px] w-[11px] -left-[6px] rounded-full border-2 border-[var(--accent)] bg-[var(--left-bg)]'

  return (
    <span aria-hidden="true" className={`absolute top-[0.45rem] ${shape} ${className}`} />
  )
}

// One row of the timeline: prominent period on the left, details on the right.
// On mobile the period stacks above the details and the timeline line runs down the left edge.
function TimelineEntry({ period, periodNote, isUndated = false, variant = 'minor', children }) {
  return (
    <div
      className={`relative grid border-l border-[#E5E5E5] pl-6 md:border-l-0 md:pl-0 ${timelineColumns} md:gap-10`}
    >
      <Marker variant={variant} className="md:hidden" />

      <div className="pb-2 md:pb-12 md:text-right">
        <p
          className={`font-semibold leading-[1.5] tracking-[0.01em] ${
            isUndated ? 'text-[#525252]' : 'text-[var(--accent)]'
          } ${variant === 'major' ? 'text-[1.15rem] md:text-[1.3rem]' : 'text-[1.02rem] md:text-[1.12rem]'}`}
        >
          {period}
        </p>
        {periodNote && (
          <p className="text-[0.85rem] text-[#525252]">{periodNote}</p>
        )}
      </div>

      <div className="relative min-w-0 pb-12 md:border-l md:border-[#E5E5E5] md:pl-10">
        <Marker variant={variant} className="hidden md:block" />
        {children}
      </div>
    </div>
  )
}

function ProjectBody({ project, labels }) {
  const hasScope = project.scope?.length > 0
  const hasDuties = project.duties?.length > 0

  return (
    <div className="mt-4 grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div className="space-y-5">
        {project.overview && <p>{project.overview}</p>}
        {hasDuties && (
          <div>
            <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-[#2563EB]">
              {labels.duties}
            </p>
            <List items={project.duties} />
          </div>
        )}
        {hasScope && (
          <div>
            <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-[#2563EB]">
              {labels.plannedScope}
            </p>
            <List items={project.scope} />
          </div>
        )}
      </div>

      <dl className="space-y-4 lg:border-l lg:border-[#E5E5E5] lg:pl-8">
        {project.tech && (
          <Meta label={project.inDevelopment ? labels.plannedTech : labels.tech}>
            {project.tech}
          </Meta>
        )}
        {project.phases && <Meta label={labels.phases}>{project.phases}</Meta>}
        {project.team && <Meta label={labels.team}>{project.team}</Meta>}
        {project.links.length > 0 && (
          <Meta label={labels.website}>
            <SiteLinks links={project.links} />
          </Meta>
        )}
      </dl>
    </div>
  )
}

function SectionHeading({ number, title, id }) {
  return (
    <h2
      id={id}
      className="flex items-baseline gap-3 border-b border-[#E5E5E5] pb-4 text-[1.6rem]! leading-tight font-semibold text-[#171717] md:text-[2.1rem]!"
    >
      <span className="text-[0.9rem] font-bold text-[var(--accent)]">{number}</span>
      {title}
    </h2>
  )
}

export default function WorkHistoryPage() {
  const [lang, setLang] = useState(getInitialLanguage)
  const content = workHistory[lang]
  const { labels } = content

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = labels.pageTitle

    const url = new URL(window.location.href)
    if (lang === 'ja') {
      url.searchParams.set('lang', 'ja')
    } else {
      url.searchParams.delete('lang')
    }
    window.history.replaceState(null, '', url)
  }, [lang, labels.pageTitle])

  return (
    <>
      <CustomCursor />

      <div
        className={`bg-[var(--left-bg)] px-5 py-8 text-[1rem] text-[#333333] sm:px-8 md:py-12 md:text-[1.0625rem] lg:px-12 ${
          lang === 'ja' ? 'leading-[1.95]' : 'leading-[1.75]'
        }`}
      >
        <div className="mx-auto max-w-[1160px]">
          <nav
            aria-label={labels.documentTitle}
            className="flex flex-wrap items-center justify-between gap-4 text-[0.85rem]"
          >
            <a
              href={homeUrl}
              className={`group inline-flex items-center gap-2 text-[#525252] transition-colors hover:text-[var(--accent)] ${focusRing}`}
            >
              <FaArrowLeft
                aria-hidden="true"
                className="h-3 w-3 transition-transform group-hover:-translate-x-0.5"
              />
              <span className="underline decoration-[rgba(34,34,34,0.3)] underline-offset-4 group-hover:decoration-[var(--accent)]">
                {labels.backLink}
              </span>
            </a>

            <div className="flex items-center gap-1" role="group" aria-label="Language">
              {languages.map((language, index) => (
                <span key={language.code} className="flex items-center gap-1">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-[#525252]">
                      /
                    </span>
                  )}
                  <button
                    type="button"
                    lang={language.code}
                    aria-pressed={lang === language.code}
                    onClick={() => setLang(language.code)}
                    className={`px-1 transition-colors ${focusRing} ${
                      lang === language.code
                        ? 'font-semibold text-[var(--accent)]'
                        : 'text-[#525252] hover:text-[#171717]'
                    }`}
                  >
                    {language.label}
                  </button>
                </span>
              ))}
            </div>
          </nav>

          <main>
            <header className="flex flex-col gap-3 pb-10 pt-10 md:flex-row md:items-end md:justify-between md:pb-14 md:pt-14">
              <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-[1.15] font-semibold text-[#171717]">
                {labels.documentTitle}
              </h1>
              <p className="text-[0.95rem] text-[#525252] md:text-right">
                <span className="font-medium text-[#171717]">{labels.name}</span>
                <span aria-hidden="true"> · </span>
                {labels.location}
                <br />
                {labels.asOf}
              </p>
            </header>

            <div
              aria-hidden="true"
              className={`mb-8 hidden text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#525252] md:grid md:gap-10 ${timelineColumns}`}
            >
              <span className="text-right">{labels.periodColumn}</span>
              <span className="pl-10">{labels.detailsColumn}</span>
            </div>

            <div className="space-y-16 md:space-y-20">
              <section aria-labelledby="employment">
                <SectionHeading number="01" title={labels.sections.employment} id="employment" />

                <div className="mt-10">
                  {content.employment.map((job) => (
                    <div key={job.company}>
                      <TimelineEntry period={job.period} variant="major">
                        <h3 className="text-[1.45rem]! leading-[1.3] font-semibold text-[#171717] md:text-[1.75rem]!">
                          {job.company}
                        </h3>
                        <p className="mt-2 max-w-[60rem] text-[0.95rem] text-[#525252]">
                          <span className="font-semibold">{labels.business}: </span>
                          {job.business}
                        </p>
                      </TimelineEntry>

                      {job.projects.map((project) => (
                        <TimelineEntry key={project.title} period={project.period}>
                          <h4 className="text-[1.15rem]! leading-[1.45] font-semibold text-[#171717] md:text-[1.3rem]!">
                            {project.title}
                          </h4>
                          {project.subtitle && (
                            <p className="text-[0.95rem] text-[#525252]">
                              {project.subtitle}
                            </p>
                          )}
                          <ProjectBody project={project} labels={labels} />
                        </TimelineEntry>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="freelance">
                <SectionHeading number="02" title={labels.sections.freelance} id="freelance" />

                <div className="mt-10">
                  {content.freelance.map((project) => (
                    <TimelineEntry
                      key={project.title}
                      period={project.period ?? labels.noPeriod}
                      periodNote={project.periodNote}
                      isUndated={!project.period}
                    >
                      <h3 className="text-[1.15rem]! leading-[1.45] font-semibold text-[#171717] md:text-[1.3rem]!">
                        {project.title}
                      </h3>
                      <p className="text-[0.85rem] font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                        {project.type}
                      </p>
                      <ProjectBody project={project} labels={labels} />
                    </TimelineEntry>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  )
}
