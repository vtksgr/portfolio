export default function AboutSection() {
  return (
    <section id="about-me" className="px-5 sm:px-8 md:px-[4.2rem] my-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end gap-4 md:gap-6">
          <span
            className="text-[1.1rem] font-bold leading-none md:text-[1rem]"
            style={{ color: 'var(--accent)' }}
          >
            01
          </span>
          <h2 className="text-[3rem] leading-none font-semibold text-[var(--text)] md:text-[5rem]">
            About
          </h2>
          <div className="mb-3 hidden h-px flex-1 md:block">
            <div
              className="h-px w-full"
              style={{ backgroundColor: 'rgba(255, 59, 52, 0.45)' }}
            />
          </div>
        </div>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,560px)] md:items-start md:gap-14">
          <div className="space-y-12 md:space-y-14">
            <p className="max-w-[820px] text-[1.2rem] leading-[1.75] text-[var(--text)] md:text-[1.5rem]">
              <span
                className="mr-2 inline-block h-[1.5rem] w-[0.28rem] align-middle md:h-[1.4rem]"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              am a web developer and UI designer based in Saitama, Japan, with
              hands-on experience building everything from corporate websites to
              Shopify e-commerce stores of clean design and practical
              engineering.
            </p>

            <p className="max-w-[780px] text-[1rem] leading-[1.85] text-[var(--text)] md:text-[1.15rem]">
              At Comworks Co., Ltd., I develop and maintain WordPress websites,
              build out Shopify stores, design responsive UI layouts, and create
              marketing graphics. Outside of work, I continuously push my
              skills forward by building with React, Vue, and Node.js.
            </p>

            <p className="max-w-[760px] text-[1rem] leading-[1.85] text-[var(--text)] md:text-[1.15rem]">
              I care deeply about details, spacing, typography, and interaction,
              because great design should feel intuitive before it is even
              noticed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
            <article
              data-cursor-hover
              className="min-h-[150px] border bg-[#f7f7f7] px-6 py-8 md:min-h-[162px] md:px-7 md:py-9"
              style={{ borderColor: 'var(--accent)' }}
            >
              <h3 className="text-[2.4rem] leading-none font-semibold text-[var(--text)] md:text-[3rem]">
                4+
              </h3>
              <p
                className="mt-5 text-[1rem] leading-[1.2] font-medium tracking-[0.01em] md:text-[1.05rem]"
                style={{ color: 'var(--accent)' }}
              >
                YEARS OF EXPEIENCE
              </p>
            </article>

            <article
              data-cursor-hover
              className="min-h-[150px] border bg-[#f7f7f7] px-6 py-8 md:min-h-[162px] md:px-7 md:py-9"
              style={{ borderColor: 'var(--accent)' }}
            >
              <h3 className="text-[2.4rem] leading-none font-semibold text-[var(--text)] md:text-[3rem]">
                3
              </h3>
              <p
                className="mt-5 text-[1rem] leading-[1.2] font-medium tracking-[0.01em] md:text-[1.05rem]"
                style={{ color: 'var(--accent)' }}
              >
                LANGUAGE SPOKEN
              </p>
            </article>

            <article
              data-cursor-hover
              className="min-h-[150px] border bg-[#f7f7f7] px-6 py-8 md:min-h-[162px] md:px-7 md:py-9"
              style={{ borderColor: 'var(--accent)' }}
            >
              <h3 className="text-[2.4rem] leading-none font-semibold text-[var(--text)] md:text-[3rem]">
                2
              </h3>
              <p
                className="mt-5 text-[1rem] leading-[1.2] font-medium tracking-[0.01em] md:text-[1.05rem]"
                style={{ color: 'var(--accent)' }}
              >
                CMS PLATFORMS
              </p>
            </article>

            <article
              data-cursor-hover
              className="min-h-[150px] border bg-[#f7f7f7] px-6 py-8 md:min-h-[162px] md:px-7 md:py-9"
              style={{ borderColor: 'var(--accent)' }}
            >
              <h3 className="text-[2.4rem] leading-none font-semibold text-[var(--text)] md:text-[3rem]">
                &infin;
              </h3>
              <p
                className="mt-5 text-[1rem] leading-[1.2] font-medium tracking-[0.01em] md:text-[1.05rem]"
                style={{ color: 'var(--accent)' }}
              >
                PIXELS PUSHED
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
