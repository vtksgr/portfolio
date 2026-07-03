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
  return (
    <>
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <Experience />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
