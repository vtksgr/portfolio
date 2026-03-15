import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')

    if (!mediaQuery.matches || !cursorRef.current || !ringRef.current) {
      return undefined
    }

    const cursor = cursorRef.current
    const ring = ringRef.current

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animationFrameId = 0

    const setDefaultState = () => {
      cursor.style.width = '10px'
      cursor.style.height = '10px'
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.opacity = '0.5'
    }

    const setHoverState = () => {
      cursor.style.width = '16px'
      cursor.style.height = '16px'
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.opacity = '0.8'
    }

    const handleMouseMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animateCursor = () => {
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`

      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      animationFrameId = window.requestAnimationFrame(animateCursor)
    }

    const hoverTargets = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    )

    hoverTargets.forEach((element) => {
      element.addEventListener('mouseenter', setHoverState)
      element.addEventListener('mouseleave', setDefaultState)
    })

    setDefaultState()
    document.addEventListener('mousemove', handleMouseMove)
    animationFrameId = window.requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.cancelAnimationFrame(animationFrameId)

      hoverTargets.forEach((element) => {
        element.removeEventListener('mouseenter', setHoverState)
        element.removeEventListener('mouseleave', setDefaultState)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  )
}
