import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 220)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-white shadow-[0_18px_40px_rgba(34,34,34,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(255,59,52,0.32)] md:bottom-8 md:right-8 md:h-16 md:w-16 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{
        background:
          '#ff3b34',
      }}
    >
      <span className="absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(255,59,52,0.35)]" />
      <FaArrowUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
    </button>
  )
}
