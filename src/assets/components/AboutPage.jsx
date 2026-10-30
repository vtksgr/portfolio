import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
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

function getInitialLanguage() {
  const lang =
    new URLSearchParams(window.location.search).get('lang') ??
    localStorage.getItem('portfolio-language')
  return lang === 'ja' ? 'ja' : 'en'
}

const content = {
  en: {
    backLink: 'Back to Portfolio',
    pageTitle: 'About Me | Sagar Pariyar',
    metaDescription:
      'Learn about Sagar Pariyar, a Web Engineer in Saitama, Japan—his journey from Manipur through Nepal, his career, freelance work, and personal projects.',
    heading: 'About Me',
    sections: [
      {
        title: 'From Manipur to Nepal to Japan',
        paragraphs: [
          'My name is Sagar Pariyar, and I am a Web Engineer based in Saitama, Japan.',
          'I was born and raised in Imphal, Manipur, India, where I completed my early education. I later moved to Nepal before coming to Japan in 2014 to study Japanese.',
          'Moving to Japan opened a new chapter in my life. Adapting to a different language, culture, and environment helped me become more independent and adaptable, and more comfortable navigating different cultural and professional settings.',
        ],
      },
      {
        title: 'My Education',
        paragraphs: [
          'After studying Japanese in Japan, I continued my education in information technology and graduated from Nippon International College in March 2021 with a Diploma in Information Technology.',
          'My education gave me a foundation for developing my technical skills and beginning my career in web development.',
        ],
      },
      {
        title: 'Building My Career in Japan',
        paragraphs: [
          'In April 2021, I joined Comworks Co., Ltd., where I began applying my technical knowledge to real-world projects.',
          'My work spans website maintenance, WordPress development, Shopify e-commerce, frontend development, UI design, and digital marketing. I also create web pages, landing pages, and visual materials, monitor website performance, and support Google Ads campaigns.',
          'Working across these areas has helped me understand how design, engineering, and business goals come together to create useful digital experiences.',
        ],
      },
      {
        title: 'Freelance Projects & Collaborations',
        paragraphs: [
          'Alongside my full-time role, I take on freelance projects for businesses looking to establish or improve their online presence. These include a Shopify store for Pokhara Trading and corporate websites for Fine Rise Corporation and HORIZON GROUP, including a site with a basic content management system.',
          'Working on projects with different requirements has given me the opportunity to apply my development and design skills in new contexts. It has also helped me strengthen my approach to problem-solving and creating practical solutions that balance usability, design, and functionality.',
        ],
      },
      {
        title: 'Building Educate Japan',
        paragraphs: [
          'Educate Japan is my personal project: a Japanese language learning platform in development. It is designed to offer structured learning resources, including JLPT N5, N4, N3, N2, N1 curricula, vocabulary, kanji, grammar, and reading practice.',
          'Building it gives me room to explore application architecture, reusable components, structured learning content, user experience, and SEO while continuing to grow as an engineer.',
        ],
      },
      {
        title: 'My Approach to Development',
        paragraphs: [
          'I believe good web engineering involves more than writing code. It means understanding user needs, organizing information clearly, paying attention to detail, and building solutions that are reliable, maintainable, and easy to use.',
          'My experience across professional work, freelance projects, and personal development has shaped how I approach problem-solving. I value thoughtful UI design, responsive layouts, clear information architecture, and practical implementation.',
          'I enjoy learning new technologies, refining my skills, and finding better ways to turn ideas into useful digital products.',
        ],
      },
      {
        title: 'Looking Ahead',
        paragraphs: [
          'I want to continue growing as a Web Engineer, deepen my technical knowledge, and contribute to meaningful projects that bring thoughtful design and practical engineering together.',
          'I am especially interested in building useful digital products, improving my frontend and application development skills, and collaborating with people who value usability, quality, and continuous learning.',
          'My goal is to keep learning through real projects and create digital experiences that make a genuine difference for the people who use them.',
        ],
      },
    ],
  },
  ja: {
    backLink: 'ポートフォリオに戻る',
    pageTitle: '私について | Sagar Pariyar',
    metaDescription:
      '埼玉県を拠点に活動するウェブエンジニア、Sagar Pariyarの歩みをご紹介します。マニプルからネパール、日本へ移った経験、仕事、フリーランス活動、個人プロジェクトについてお伝えします。',
    heading: '私について',
    sections: [
      {
        title: 'マニプルからネパール、そして日本へ',
        paragraphs: [
          'Sagar Pariyarと申します。埼玉県を拠点に活動するウェブエンジニアです。',
          'インドのマニプル州インパールで生まれ育ち、初等教育を修了しました。その後ネパールに移り、2014年に日本語を学ぶために来日しました。',
          '日本への移住は、私の人生の新しい章の始まりでした。異なる言語や文化、環境に適応する経験を通じて、自立心と柔軟性を身につけ、さまざまな文化や職場環境に対応できるようになりました。',
        ],
      },
      {
        title: '学歴',
        paragraphs: [
          '日本で日本語を学んだ後、情報技術の教育を続け、2021年3月にNippon International Collegeで情報技術のディプロマを取得しました。',
          'ここで身につけた基礎をもとに技術力を磨き、ウェブ開発のキャリアをスタートしました。',
        ],
      },
      {
        title: '日本でのキャリア構築',
        paragraphs: [
          '2021年4月にComworks Co., Ltd.に入社し、実際のプロジェクトを通じて技術知識を活かし始めました。',
          'ウェブサイトの保守、WordPressでの開発、Shopifyのeコマース、フロントエンド開発、UIデザイン、デジタルマーケティングなど、幅広い業務に携わっています。ウェブページやランディングページ、各種ビジュアル素材の制作に加え、サイトのパフォーマンス監視やGoogle広告キャンペーンの運用支援も行っています。',
          'こうした業務を通じて、デザイン、エンジニアリング、ビジネスの目標を結びつけ、役立つデジタル体験を生み出すことへの理解を深めてきました。',
        ],
      },
      {
        title: 'フリーランスのプロジェクト・協業',
        paragraphs: [
          '本業と並行して、オンラインでの情報発信を始めたい、または改善したい企業向けにフリーランスのプロジェクトにも取り組んでいます。これまでにPokhara TradingのShopifyストアやFine Rise Corporation、HORIZON GROUPのコーポレートサイトを制作し、その中には基本的なコンテンツ管理機能を備えたサイトもあります。',
          '異なる要件のプロジェクトに取り組むことで、開発やデザインのスキルをさまざまな場面で活かしてきました。また、使いやすさ、デザイン、機能性のバランスを考えた実践的な解決策を形にする力も磨いています。',
        ],
      },
      {
        title: 'Educate Japanの開発',
        paragraphs: [
          'Educate Japanは、私が個人で開発している日本語学習プラットフォームです。JLPT N5・N4・N3・N2・N1のカリキュラムをはじめ、語彙、漢字、文法、読解の練習など、体系的な学習リソースの提供を目指しています。',
          '開発を通じて、アプリケーションの設計、再利用可能なコンポーネント、学習コンテンツの整理、ユーザー体験、SEOについて学びながら、エンジニアとしての成長を続けています。',
        ],
      },
      {
        title: '開発へのアプローチ',
        paragraphs: [
          '優れたウェブエンジニアリングには、コードを書く以上のことが必要だと考えています。ユーザーのニーズを理解し、情報を整理し、細部に気を配り、信頼性・保守性・使いやすさを備えたものを作ることが大切です。',
          '本業、フリーランス、個人開発での経験を通じて、問題解決への姿勢を培ってきました。丁寧なUIデザイン、レスポンシブなレイアウト、分かりやすい情報設計、実用的な実装を大切にしています。',
          '新しい技術を学び、スキルを磨きながら、アイデアを役立つデジタルプロダクトにする方法を探ることにやりがいを感じます。',
        ],
      },
      {
        title: '今後の展望',
        paragraphs: [
          'ウェブエンジニアとして成長を続け、技術的な知識を深めながら、丁寧なデザインと実践的なエンジニアリングを結びつけるプロジェクトに貢献したいと考えています。',
          '使う人に役立つデジタルプロダクトの開発や、フロントエンド・アプリケーション開発のスキル向上に関心があります。使いやすさや品質、継続的な学びを大切にする方々との協業にも取り組んでいきたいです。',
          '実際のプロジェクトを通じて学び続け、使う人にとって本当に価値のあるデジタル体験を作ることが目標です。',
        ],
      },
    ],
  },
}

function Section({ number, title, paragraphs }) {
  return (
    <section className="pt-10 first:pt-0 md:pt-14 first:md:pt-0">
      <h2 className="flex items-baseline gap-3 border-b border-[#E5E5E5] pb-4 text-[1.35rem] leading-tight font-semibold text-[#171717] md:text-[1.75rem]">
        <span className="text-[0.85rem] font-bold text-[var(--accent)]">{number}</span>
        {title}
      </h2>
      <div className="mt-6 space-y-5 md:mt-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="max-w-[72ch]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default function AboutPage() {
  const [lang, setLang] = useState(getInitialLanguage)
  const c = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = c.pageTitle
    localStorage.setItem('portfolio-language', lang)
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', c.metaDescription)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', c.metaDescription)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', c.pageTitle)

    const url = new URL(window.location.href)
    if (lang === 'ja') {
      url.searchParams.set('lang', 'ja')
    } else {
      url.searchParams.delete('lang')
    }
    window.history.replaceState(null, '', url)
  }, [lang, c.metaDescription, c.pageTitle])

  return (
    <>
      <CustomCursor />

      <div
        className={`bg-[var(--page-bg)] px-5 py-8 text-[1rem] text-[#333333] sm:px-8 md:py-12 md:text-[1.0625rem] lg:px-12 ${
          lang === 'ja' ? 'leading-[1.95]' : 'leading-[1.75]'
        }`}
      >
        <div className="mx-auto max-w-[800px]">
          <nav
            aria-label="About page navigation"
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
                {c.backLink}
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
            <header className="pb-10 pt-10 md:pb-14 md:pt-14">
              <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-[1.15] font-semibold text-[#171717]">
                {c.heading}
              </h1>
            </header>

            <div className="space-y-0">
              {c.sections.map((section, index) => (
                <Section
                  key={section.title}
                  number={String(index + 1).padStart(2, '0')}
                  title={section.title}
                  paragraphs={section.paragraphs}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer language={lang} />
      <ScrollToTopButton />
    </>
  )
}
