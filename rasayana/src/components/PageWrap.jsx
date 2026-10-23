import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Wraps every page: scrolls to top, fades the page in, reveals .rv elements on scroll.
export default function PageWrap({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { opacity: 0, duration: 0.7, ease: 'power2.out' })
      gsap.utils.toArray('.rv').forEach((el) =>
        gsap.from(el, { opacity: 0, y: 50, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' } })
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return <main ref={ref}>{children}</main>
}