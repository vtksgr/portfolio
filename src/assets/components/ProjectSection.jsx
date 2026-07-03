const projects = [
  {
    id: 1,
    title: "WordPress Corporate Sites",
    subtitle: "Comworks Corporate Websites",
    type: "Employed",
    description:
      "Responsible for maintaining and improving four corporate websites at Comworks. Involved in planning, UI design, and front-end development while ensuring responsive performance.",
    tech: ["WordPress", "HTML", "CSS", "Figma", "Photoshop"],
    links: [
      "comworks.co.jp",
      "sharako.com",
      "cloudstudio.jp",
      "comstation.jp",
    ],
  },
  {
    id: 2,
    title: "Shopify E-commerce Store",
    subtitle: "Comworks Online Store",
    type: "Employed",
    description:
      "Developed and customized a full Shopify store including product pages, inventory management, UI improvements, and web design. Built as part of a 4-member development team.",
    tech: ["Shopify", "Photoshop", "Illustrator"],
    links: ["comworks.jp"],
  },
  {
    id: 3,
    title: "Fullstack Web Application",
    subtitle: "Network Camera Photo Capture System",
    type: "Employed",
    description:
      "Worked on UI/UX design and responsive front-end development for a web application used to capture and manage images from network cameras.",
    tech: ["React", "Tailwind CSS", "Figma"],
    links: [],
  },
  {
    id: 4,
    title: "Shopify E-commerce Store",
    subtitle: "Pokhara Trading Online Store",
    type: "Freelance",
    description:
      "Designed and developed a complete Shopify store including product management, UI improvements, responsive design, and promotional banner graphics.",
    tech: ["Shopify", "Photoshop", "Illustrator"],
    links: ["pokharatrading.jp"],
  },
  {
    id: 5,
    title: "Shopify E-commerce Store",
    subtitle: "Talbarahi Online Store",
    type: "Freelance",
    description:
      "Built a fully customized Shopify store including UI design improvements, product management, and marketing graphics.",
    tech: ["Shopify", "Photoshop", "Illustrator"],
    links: ["talbarahi.com"],
  },
  {
    id: 6,
    title: "Horizon Group Website",
    subtitle: "Corporate Website + Basic CMS",
    type: "Freelance",
    description:
      "Planned and developed a corporate website including UI/UX design, responsive front-end development, and backend implementation.",
    tech: ["React", "Tailwind CSS", "Figma", "Node.js"],
    links: ["horizongroup.co.jp"],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>{String(project.id).padStart(3, "0")}</span>
              <span>{project.type}</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-500 mb-3">{project.subtitle}</p>

            <div className="h-[2px] bg-red-400 w-full mb-4"></div>

            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-white text-xs px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="text-xs text-gray-500 flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
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
  );
}
