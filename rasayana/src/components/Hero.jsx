import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Scene3D from './Scene3D.jsx'
import Photo from './Photo.jsx'

export default function Hero() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hc h1 i', { yPercent: 110, duration: 1.4, stagger: 0.18, ease: 'power4.out', delay: 0.2 })
      gsap.from('.hc p, .hc .btn', { opacity: 0, y: 30, duration: 1, stagger: 0.12, delay: 1, ease: 'power3.out' })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section id="hero" ref={root}>
      <Photo className="hero-photo" src="/images/hero.jpg" alt="" fallback={<></>} />
      <Scene3D />
      <div className="hc">
        <h1><span><i>Where spice</i></span><span><i>becomes memory</i></span></h1>
        <p>Modern Indian tasting menus, cooked over fire and served in a room lit like a candle.</p>
        <Link className="btn solid" to="/reservations">Reserve a table</Link>
        <Link className="btn" to="/menu">View menu</Link>
      </div>
    </section>
  )
}