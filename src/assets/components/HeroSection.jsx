import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
// import portrait from '../images/sgr-portfolio.png'
import portrait2 from '../images/sgr-portfolio.png'

const navItems = [
  { label: 'ABOUT ME', href: '#about-me' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

const rotatingAudience = ['FOR STARTUPS', 'FOR BUSINESSES', 'FOR BRANDS']

export default function HeroSection() {
  const [audienceIndex, setAudienceIndex] = useState(0)
  const [isAudienceVisible, setIsAudienceVisible] = useState(true)

  useEffect(() => {
    let timeoutId

    const intervalId = window.setInterval(() => {
      setIsAudienceVisible(false)

      timeoutId = window.setTimeout(() => {
        setAudienceIndex((currentIndex) =>
          currentIndex === rotatingAudience.length - 1 ? 0 : currentIndex + 1
        )
        setIsAudienceVisible(true)
      }, 320)
    }, 2600)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 hidden md:grid md:grid-cols-[43%_28%_29%]">
        <div style={{ backgroundColor: 'var(--left-bg)' }} />
        <div style={{ backgroundColor: '#f8f8f8' }} />
        <div
          style={{
            background: 'linear-gradient(180deg, #f6f6f6 0%, #acacac 100%)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, var(--left-bg) 0%, #f6f6f6 48%, #d2d2d2 100%)',
        }}
      />

      <nav className="absolute inset-x-0 top-0 z-20 flex flex-col gap-6 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between md:px-[3.2rem] md:py-9">
        <a
          href="#top"
          className="flex items-center gap-2 text-[clamp(1.35rem,4vw,2.1rem)] font-bold leading-none tracking-[0.03em]"
        >
          <span style={{ color: 'var(--text)' }}>SAGAR</span>
          <span style={{ color: 'var(--accent)' }}>PARIYAR</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] font-semibold tracking-[0.04em] md:gap-8 md:text-[0.92rem]">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-opacity hover:opacity-65"
                style={{ color: 'var(--text)' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative z-10 grid min-h-screen grid-cols-1 px-5 pb-0 pt-32 sm:px-8 md:grid-cols-[43%_57%] md:px-0 md:pb-0 md:pt-[8.4rem]">
        <div className="flex items-center md:px-[3.2rem] md:pr-[3.6rem]">
          <div className="flex w-full flex-col justify-center">
            <p
              className="mb-4 text-[1rem] font-normal md:mb-5 md:text-[1.25rem]"
              style={{ color: 'var(--accent)' }}
            >
              Full-Stack Web Developer and Designer based in Japan.
            </p>

            <h1 className="mb-4 text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-bold xl:text-[clamp(5.5rem,7vw,8.5rem)]">
              Craft<span style={{ color: 'var(--accent)' }}>ing</span>
              <br />
              Digital
              <br />
              Experiences
            </h1>

            <p
              className="mb-2 text-[1.05rem] font-medium md:mb-3 md:text-[1.5rem]"
              style={{ color: 'var(--accent)' }}
            >
              <span
                className={`hero-audience inline-block ${
                  isAudienceVisible ? 'is-visible' : 'is-hidden'
                }`}
              >
                {rotatingAudience[audienceIndex]}
              </span>
            </p>

            <p
              className="mb-7 max-w-[36rem] text-[1rem] leading-[1.45] md:mb-8 md:text-[1.15rem]"
              style={{ color: 'var(--muted)' }}
            >
              I design and develop modern websites, scalable web applications, and high-performing e-commerce platforms.
            </p>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 md:mb-6 md:max-w-[32rem]">
              <div className="flex flex-wrap items-center gap-4 md:gap-[1.1rem]">
                <a
                  href="#projects"
                  className="inline-flex items-center px-5 py-3 text-[0.82rem] font-medium tracking-[0.03em] text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  VIEW PROJECTS
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center border-b border-[#bdbdbd] pb-1 text-[0.82rem] font-medium text-[#767676] transition-colors hover:text-[var(--text)]"
                >
                  HIRE ME
                </a>
              </div>

              <div className="flex items-center gap-5 text-[#2d2d2d]">
                <a
                  href="https://github.com/vtksgr"
                  aria-label="GitHub"
                  className="transition-opacity hover:opacity-65"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  aria-label="Email"
                  className="transition-opacity hover:opacity-65"
                >
                  <HiOutlineMail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex min-h-[34rem] items-end justify-center overflow-hidden md:mt-0 md:min-h-0">
          <div className="absolute inset-x-0 bottom-[10] z-10 flex justify-center sm:bottom-[-2rem] md:bottom-[-6rem]">
            <img
              src={portrait2}
              alt="Sagar portrait"
              className="block h-[38rem] w-auto object-contain grayscale sm:h-[45rem] md:h-[calc(100vh-1rem)] md:max-h-[980px] md:-translate-x-9"
            />
          </div>

          <article
            className="absolute bottom-[32%] right-0 z-20 min-w-[15rem] px-4 py-3 md:min-w-[19rem] md:px-[1.15rem] md:py-[0.65rem]"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <p
              className="mb-1 text-[0.85rem] font-medium leading-none md:text-[0.93rem]"
              style={{ color: 'var(--accent)' }}
            >
              EXPERIENCE
            </p>
            <h3 className="mb-1 text-[2.35rem] leading-none font-bold text-black md:text-[2.65rem]">
              4+
            </h3>
            <p className="text-[0.95rem] leading-[1.2] text-black">
              Years professional work
            </p>
          </article>

          <article
            className="absolute bottom-[16%] right-0 z-20 min-w-[15rem] px-4 py-3 md:min-w-[19rem] md:px-[1.15rem] md:py-[0.65rem]"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <p
              className="mb-1 text-[0.85rem] font-medium leading-none md:text-[0.93rem]"
              style={{ color: 'var(--accent)' }}
            >
              SPECIALIZATIONS
            </p>
            <h3 className="mb-1 text-[1.7rem] leading-none font-bold text-black md:text-[2rem]">
              Web &amp; E-com
            </h3>
            <p className="text-[0.95rem] leading-[1.2] text-black">
              WordPress &nbsp;&bull;&nbsp; Shopify &nbsp;&bull;&nbsp; React &nbsp;&bull;&nbsp; Nodejs
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
