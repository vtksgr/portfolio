const skillGroups = [
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Frameworks & UI',
    items: ['React', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Node.js'],
  },
  {
    title: 'CMS & E-commerce',
    items: ['WordPress', 'Shopify'],
  },
  {
    title: 'Design Tools',
    items: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    title: 'Infrastructure',
    items: ['AWS EC2', 'GitHub'],
  },
  {
    title: 'Other',
    items: ['UI/UX Design', 'Graphic Design', 'Web Marketing', 'Page Planning'],
  },
]

function SkillCard({ title, items }) {
  return (
    <article
      data-cursor-hover
      className="bg-[#f3f3f3] px-4 py-7 transition-colors duration-200 hover:bg-[#efefef] md:px-6 md:py-8"
    >
      <p
        className="font-mono text-[0.68rem] uppercase tracking-[0.18em] md:text-[0.72rem] font-bold"
        style={{ color: 'var(--accent)' }}
      >
        {title}
      </p>

      <div
        className="mt-4 h-px w-full"
        style={{ backgroundColor: 'rgba(255, 59, 52, 0.45)' }}
      />

      <div className="mt-5 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            data-cursor-hover
            className="border px-3 py-1.5 text-[0.8rem] leading-none transition-colors duration-200 hover:text-[var(--accent)] md:text-[0.82rem]"
            style={{
              color: '#ffffff',
              backgroundColor: '#222222',
              borderColor: '#222222',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="border-y border-[rgba(255,59,52,0.55)] bg-[#f3f3f3] px-5 py-14 sm:px-8 md:px-[4.2rem] md:py-18"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end gap-4 md:gap-6">
          <span
            className="text-[1.1rem] font-bold leading-none md:text-[1rem]"
            style={{ color: 'var(--accent)' }}
          >
            02
          </span>
          <h2 className="text-[3rem] leading-none font-semibold tracking-[0.01em] text-[var(--text)] md:text-[4.35rem]">
            Skills
          </h2>
          <div className="mb-3 hidden h-px flex-1 md:block">
            <div
              className="h-px w-full"
              style={{ backgroundColor: 'rgba(255, 59, 52, 0.45)' }}
            />
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-px border md:mt-10 md:grid-cols-3"
          style={{
            borderColor: 'rgba(34, 34, 34, 0.25)',
            backgroundColor: 'rgba(34, 34, 34, 0.25)',
          }}
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
