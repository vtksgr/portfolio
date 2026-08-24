import { translations } from '../../data/translations.js'

const projectLinks = [
  ['comworks.co.jp', 'sharako.com', 'cloudstudio.jp', 'comstation.jp'],
  ['comworks.jp'],
  [],
  ['pokharatrading.jp'],
  ['talbarahi.com'],
  ['horizongroup.co.jp'],
]

const techStacks = [
  ['WordPress', 'HTML', 'CSS', 'Figma', 'Photoshop'],
  ['Shopify', 'Photoshop', 'Illustrator'],
  ['React', 'Tailwind CSS', 'Figma'],
  ['Shopify', 'Photoshop', 'Illustrator'],
  ['Shopify', 'Photoshop', 'Illustrator'],
  ['React', 'Tailwind CSS', 'Figma', 'Node.js'],
]

export default function ProjectSection({ language = 'en' }) {
  const t = translations[language]
  const projects = t.projects.items
  
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-12">{t.projects.title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
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
              {techStacks[index].map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-black text-white text-xs px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {projectLinks[index].length > 0 && (
              <div className="text-xs text-gray-500 flex flex-wrap gap-3">
                {projectLinks[index].map((link, linkIndex) => (
                  <a
                    key={linkIndex}
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
        ))}
      </div>
    </section>
  )
}
