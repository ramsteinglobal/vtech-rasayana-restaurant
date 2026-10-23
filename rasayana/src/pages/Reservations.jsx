import { useEffect, useRef, useState } from 'react'
import PageWrap from '../components/PageWrap.jsx'
import Photo from '../components/Photo.jsx'

const EMBERS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 3 + (i % 4),
  delay: (i * 1.3) % 9,
  dur: 9 + (i % 5) * 2,
}))

export default function Reservations() {
  const [done, setDone] = useState(null)
  const bg = useRef(null)
  const today = new Date().toISOString().split('T')[0]

  // Backdrop drifts slightly with the mouse for a sense of depth
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * -24
      const y = (e.clientY / window.innerHeight - 0.5) * -16
      if (bg.current) bg.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    // TODO: send `f` to your backend / email service here
    setDone(f)
  }

  return (
    <PageWrap>
      <section className="page-head res">
        {/* animated backdrop */}
        <div className="res-bg" aria-hidden="true">
          <div className="res-bg-move" ref={bg}>
            <Photo className="res-photo" src="/images/reservation.jpg" alt="" fallback={<div className="res-glow" />} />
          </div>
          <div className="res-shade" />
          {EMBERS.map((m, i) => (
            <span key={i} className="ember"
              style={{ left: m.left + '%', width: m.size, height: m.size, animationDelay: m.delay + 's', animationDuration: m.dur + 's' }} />
          ))}
        </div>

        <div className="wrap res-grid">
          <div className="res-info">
            <h1 className="rv">Reserve your table</h1>
            <p className="rv" style={{ marginTop: 18, color: '#d8cbb6', maxWidth: 420 }}>
              Thirty-four seats, one sitting a night. Book early, since weekends fill up three weeks ahead.
            </p>
            <ul className="res-facts rv">
              <li><b>Dinner</b><span>Tuesday to Sunday, 7:00 pm to 11:00 pm</span></li>
              <li><b>Tables held</b><span>Fifteen minutes past your booking time</span></li>
              <li><b>Large groups</b><span>For nine or more, write to reserve@rasayana.in</span></li>
            </ul>
          </div>

          <div className="res-card rv">
            {done ? (
              <div className="ok">
                <h2>Thank you, {done.name}.</h2>
                <p className="muted" style={{ marginTop: 14 }}>
                  Your table for {done.guests} on {done.date} at {done.time} is requested. We will confirm by email within a day.
                </p>
                <button className="btn" style={{ marginTop: 26 }} onClick={() => setDone(null)}>Make another booking</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>Full name<input name="name" required placeholder="Your name" /></label>
                <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
                <label>Date<input name="date" type="date" min={today} required /></label>
                <label>Time<select name="time"><option>7:00 pm</option><option>7:30 pm</option><option>8:30 pm</option><option>9:30 pm</option></select></label>
                <label>Guests<select name="guests">{[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} {n > 1 ? 'guests' : 'guest'}</option>)}</select></label>
                <label>Seating<select name="seat"><option>Chef's counter</option><option>Main hall</option><option>Garden terrace</option><option>Private room</option></select></label>
                <label className="full">Dietary preference<select name="diet"><option>No restrictions</option><option>Vegetarian</option><option>Vegan</option><option>Jain</option><option>Gluten free</option><option>Nut allergy</option></select></label>
                <label className="full">Notes<textarea name="note" rows="3" placeholder="Celebrations, allergies, or anything we should know" /></label>
                <div className="full"><button className="btn solid" type="submit">Request table</button></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageWrap>
  )
}