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
    heading: 'About Me',
    sections: [
      {
        title: 'From Manipur to Nepal to Japan',
        paragraphs: [
          'My name is Sagar Pariyar. I am a Nepalese web developer and designer currently based in Saitama, Japan.',
          'I was born and grew up in Imphal, Manipur, India, where I also completed my college education. After spending my early years there, I moved to Nepal before eventually coming to Japan in 2014 to study Japanese.',
          'Moving to Japan opened a new chapter in my life. Adapting to a new language, culture, and environment gave me opportunities to grow both personally and professionally. It also taught me to be independent, adaptable, and comfortable navigating different cultural environments.',
        ],
      },
      {
        title: 'My Education',
        paragraphs: [
          'After studying Japanese in Japan, I continued my education in information technology and graduated from Nippon International College in March 2021 with a Diploma in Information Technology.',
          'This became an important step toward building my career in web development.',
        ],
      },
      {
        title: 'Building My Career in Japan',
        paragraphs: [
          'In April 2021, I joined Comworks Co., Ltd., where I began applying my technical knowledge to real-world projects.',
          'My work has included maintaining corporate websites, developing and customizing Shopify stores, designing user interfaces, and contributing to web application development.',
          'Over time, I have developed an interest in combining design and engineering to create digital experiences that are visually clear, responsive, and practical.',
          'Alongside my professional work, I have taken on freelance projects for different businesses and continue to explore new technologies through personal development projects.',
        ],
      },
      {
        title: 'Building Educate Japan',
        paragraphs: [
          'One of my main personal projects is Educate Japan, a Japanese language learning platform I am developing to provide structured learning resources, including vocabulary, kanji, grammar, and reading exercises.',
          'The project allows me to explore product development, application architecture, reusable components, content organization, and SEO while creating something useful for Japanese language learners.',
        ],
      },
      {
        title: 'My Approach to Development',
        paragraphs: [
          'I believe good web development is about more than writing code. It requires understanding people’s needs, organizing information clearly, paying attention to detail, and building solutions that are reliable and easy to use.',
          'My experiences across different places, educational environments, and professional settings have shaped my approach to learning and problem-solving.',
          'I enjoy challenging myself, improving my technical skills, and finding better ways to turn ideas into practical digital products.',
        ],
      },
      {
        title: 'Looking Ahead',
        paragraphs: [
          'Looking ahead, I want to continue growing as a developer, contribute to meaningful projects, collaborate with people from different backgrounds, and build digital experiences that make a genuine difference.',
        ],
      },
    ],
  },
  ja: {
    backLink: 'ポートフォリオに戻る',
    pageTitle: '私について | Sagar Pariyar',
    heading: '私について',
    sections: [
      {
        title: 'マニプルからネパール、そして日本へ',
        paragraphs: [
          '私の名前はSagar Pariyarです。埼玉県在住のネパール人ウェブ開発者・デザイナーです。',
          'インドのマニプル州インパールで生まれ育ち、大学教育もそこで修了しました。その後ネパールに移り、2014年に日本語を学ぶために来日しました。',
          '日本への移住は、私の人生の新しい章を開きました。新しい言語、文化、環境に適応する中で、個人的にも専門的にも成長する機会を得ました。自立心、適応力、そして異なる文化環境を快適に渡り歩く力を身につけることができました。',
        ],
      },
      {
        title: '学歴',
        paragraphs: [
          '日本で日本語を学んだ後、情報技術の教育を続け、2021年3月にNippon International Collegeで情報技術のディプロマを取得しました。',
          'これがウェブ開発のキャリアを築くための重要な一歩となりました。',
        ],
      },
      {
        title: '日本でのキャリア構築',
        paragraphs: [
          '2021年4月にComworks Co., Ltd.に入社し、技術知識を実際のプロジェクトに応用し始めました。',
          '企業ウェブサイトの保守、Shopifyストアの開発・カスタマイズ、ユーザーインターフェースの設計、ウェブアプリケーション開発への貢献など、幅広い業務に携わっています。',
          '時間とともに、デザインとエンジニアリングを組み合わせて、視覚的に明快でレスポンシブかつ実用的なデジタル体験を創ることに興味を持つようになりました。',
          '本業と並行して、さまざまなビジネス向けのフリーランスプロジェクトにも取り組み、個人の開発プロジェクトを通じて新しい技術を探求し続けています。',
        ],
      },
      {
        title: 'Educate Japanの開発',
        paragraphs: [
          '主な個人プロジェクトの一つがEducate Japanです。語彙、漢字、文法、読解練習など、体系的な学習リソースを提供する日本語学習プラットフォームを開発しています。',
          'このプロジェクトを通じて、プロダクト開発、アプリケーションアーキテクチャ、再利用可能なコンポーネント、コンテンツ構成、SEOを探求しながら、日本語学習者に役立つものを作っています。',
        ],
      },
      {
        title: '開発へのアプローチ',
        paragraphs: [
          '優れたウェブ開発はコードを書くこと以上のものだと信じています。人々のニーズを理解し、情報を明確に整理し、細部に注意を払い、信頼性が高く使いやすいソリューションを構築することが必要です。',
          'さまざまな場所、教育環境、専門的な環境での経験が、学習と問題解決へのアプローチを形作ってきました。',
          '自分自身に挑戦し、技術スキルを向上させ、アイデアを実用的なデジタルプロダクトに変えるより良い方法を見つけることを楽しんでいます。',
        ],
      },
      {
        title: '今後の展望',
        paragraphs: [
          '今後も開発者として成長し続け、意義のあるプロジェクトに貢献し、さまざまなバックグラウンドの人々と協力し、真に価値のあるデジタル体験を構築していきたいと考えています。',
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

    const url = new URL(window.location.href)
    if (lang === 'ja') {
      url.searchParams.set('lang', 'ja')
    } else {
      url.searchParams.delete('lang')
    }
    window.history.replaceState(null, '', url)
  }, [lang, c.pageTitle])

  return (
    <>
      <CustomCursor />

      <div
        className={`bg-[var(--left-bg)] px-5 py-8 text-[1rem] text-[#333333] sm:px-8 md:py-12 md:text-[1.0625rem] lg:px-12 ${
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
