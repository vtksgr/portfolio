import { useState, useEffect } from 'react'
import HeroSection from './assets/components/HeroSection.jsx'
import AboutSection from './assets/components/AboutSection.jsx'
import SkillSection from './assets/components/SkillSection.jsx'
import Experience from './assets/components/Experience.jsx'
import ProjectSection from './assets/components/ProjectSection.jsx'
import ContactSection from './assets/components/ContactSection.jsx'
import Footer from './assets/components/Footer.jsx'
import CustomCursor from './assets/components/CustomCursor.jsx'
import ScrollToTopButton from './assets/components/ScrollToTopButton.jsx'

function App() {
  const [language, setLanguage] = useState(() => {
    // Retrieve from localStorage, default to 'en'
    const saved = localStorage.getItem('portfolio-language')
    return saved === 'ja' ? 'ja' : 'en'
  })

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem('portfolio-language', language)
    // Update document language
    document.documentElement.lang = language === 'ja' ? 'ja' : 'en'
  }, [language])

  return (
    <>
      <CustomCursor />
      <HeroSection language={language} setLanguage={setLanguage} />
      <AboutSection language={language} />
      <SkillSection language={language} />
      <Experience language={language} />
      <ProjectSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
      <ScrollToTopButton />
    </>
  )
}

export default App
