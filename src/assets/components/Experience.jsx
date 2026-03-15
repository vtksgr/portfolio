const experienceItems = [
  {
    period: 'Apr 2021 - Present',
    place: 'Comworks Co., Ltd.',
    location: 'Japan',
    title: 'Web Developer',
    description:
      'Designing and developing WordPress websites and Shopify e-commerce stores. Creating responsive HTML/CSS/JS layouts, planning page structure and UI/UX, improving existing websites, and producing banners, flyers, posters, and web graphics for marketing campaigns.',
    tags: ['WordPress', 'Shopify', 'HTML/CSS/JS', 'Figma', 'Photoshop', 'Illustrator'],
  },
  {
    period: '2018 - 2021',
    place: 'Nippon International IT College',
    location: 'Japan',
    title: 'Diploma in Information Technology',
    description:
      'Studied foundational and applied computing from low-level programming in C and Java through to web development with PHP and JavaScript. Built a strong technical base that supports everything I do professionally today.',
    tags: ['C', 'Java', 'PHP', 'JavaScript', 'Web Development'],
  },
]

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

        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em]"
              style={{
                color: '#ffffff',
                backgroundColor: '#222222',
                borderColor: '#222222',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
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
            Experience
          </h2>
          <div className="mb-3 hidden h-px flex-1 md:block">
            <div
              className="h-px w-full"
              style={{ backgroundColor: 'rgba(255, 59, 52, 0.45)' }}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(255,59,52,0.22)] md:mt-16">
          {experienceItems.map((item) => (
            <ExperienceRow key={`${item.period}-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
