import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LINKS = [['Home', '/'], ['Philosophy', '/philosophy'], ['Menu', '/menu'], ['Chef', '/chef'], ['Reservations', '/reservations']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <nav className={solid ? 'nav s' : 'nav'}>
      <Link className="logo" to="/">RASAYANA</Link>
      <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      <div className={'links' + (open ? ' o' : '')}>
        {LINKS.map(([t, to]) => (
          <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{t}</NavLink>
        ))}
      </div>
    </nav>
  )
}