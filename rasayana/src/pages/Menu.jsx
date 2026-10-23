import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap.jsx'
import DishCard from '../components/DishCard.jsx'
import Photo from '../components/Photo.jsx'
import { MENUS, SIGNATURE } from '../data/content.js'

// Photos beside the tasting courses. Edit the captions or file names here.
const SIDE = [
  { img: '/images/menu/dish1.jpg', alt: 'Seared scallop with green mango' },
  { img: '/images/menu/dish2.jpg', alt: 'Lamb shoulder with chilli jus' },
]

// "From the kitchen" gallery. To add more photos, add another line.
// cls "g1" = large tile, "g4" = wide tile, "" = normal tile.
const GALLERY = [
  { img: '/images/menu/dish3.jpg', alt: 'Saffron custard', cls: 'g1' },
  { img: '/images/menu/dish4.jpg', alt: 'Morel mushrooms', cls: '' },
  { img: '/images/menu/dish5.jpg', alt: 'Tandoor bread', cls: '' },
  { img: '/images/menu/dish6.jpg', alt: 'Jaggery ice cream', cls: 'g4' },
  { img: '/images/menu/dish7.jpg', alt: 'Final plating', cls: '' },
]

export default function Menu() {
  const [key, setKey] = useState('Seven courses')
  const list = useRef(null)
  const pick = (k) => {
    setKey(k)
    requestAnimationFrame(() => gsap.fromTo(list.current.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out' }))
  }
  const m = MENUS[key]
  return (
    <PageWrap>
      <section className="page-head">
        <div className="wrap">
          <h1 className="rv">Tasting courses</h1>
          <div className="tabs rv">
            {Object.keys(MENUS).map((k) => (
              <button key={k} className={k === key ? 'a' : ''} onClick={() => pick(k)}>{k}</button>
            ))}
          </div>

          <div className="menu-split">
            <div>
              <p className="serif price">{m.price} per guest</p>
              <div ref={list}>
                {m.items.map(([n, d, c]) => (
                  <div className="course" key={n}><h3>{n}</h3><small>{c}</small><p>{d}</p></div>
                ))}
              </div>
              <p className="muted note">Wine and non-alcoholic pairings from ₹4,200. Please tell us about allergies when you reserve.</p>
            </div>

            <aside className="menu-aside">
              {SIDE.map((s) => (
                <div className="aimg rv" key={s.img}><Photo src={s.img} alt={s.alt} /></div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2 className="rv">From the kitchen</h2>
          <p className="muted rv" style={{ marginTop: 14, maxWidth: 520 }}>A few plates as they leave the pass.</p>
          <div className="gallery">
            {GALLERY.map((g) => (
              <div key={g.img} className={'gitem rv ' + g.cls}>
                <Photo src={g.img} alt={g.alt} />
                <span>{g.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="rv">A la carte at the chef's counter</h2>
          <p className="muted rv" style={{ marginTop: 14 }}>Prefer to choose your own plates? These are available at the counter only.</p>
          <div className="dish-grid">
            {SIGNATURE.map((d) => <DishCard key={d.name} {...d} />)}
          </div>
          <Link className="btn solid rv" to="/reservations" style={{ marginTop: 44 }}>Reserve a table</Link>
        </div>
      </section>
    </PageWrap>
  )
}