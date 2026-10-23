import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap.jsx'
import Hero from '../components/Hero.jsx'
import AwardsStrip from '../components/AwardsStrip.jsx'
import DishCard from '../components/DishCard.jsx'
import Process from '../components/Process.jsx'
import Gallery from '../components/Gallery.jsx'
import Reviews from '../components/Reviews.jsx'
import { SIGNATURE } from '../data/content.js'

export default function Home() {
  return (
    <PageWrap>
      <Hero />
      <AwardsStrip />

      <section>
        <div className="wrap two">
          <div>
            <h2 className="rv">Rasa is the first ingredient</h2>
            <p className="muted rv" style={{ margin: '22px 0 28px', maxWidth: 480 }}>Every plate balances six tastes so a meal leaves you lighter than it found you. We cook with small farms across India and grind our own spices each morning.</p>
            <Link className="btn rv" to="/philosophy">Our philosophy</Link>
          </div>
          <div className="orb" role="img" aria-label="Glowing saffron sun" />
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="section-head">
            <h2 className="rv">Signature dishes</h2>
            <Link className="btn rv" to="/menu">See full menu</Link>
          </div>
          <div className="dish-grid">
            {SIGNATURE.slice(0, 3).map((d) => <DishCard key={d.name} {...d} />)}
          </div>
        </div>
      </section>

      <Process />
      <Gallery />
      <Reviews />

      <section className="alt">
        <div className="wrap center">
          <blockquote className="rv">“A great meal should taste like somewhere you have been, and somewhere you want to go back to.”</blockquote>
          <Link className="btn solid rv" to="/reservations">Reserve a table</Link>
        </div>
      </section>
    </PageWrap>
  )
}