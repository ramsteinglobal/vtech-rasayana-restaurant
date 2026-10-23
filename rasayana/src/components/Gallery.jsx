import Photo from './Photo.jsx'
import { ROOM } from '../data/media.js'

export default function Gallery() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2 className="rv">The room</h2>
        <p className="muted rv" style={{ marginTop: 14, maxWidth: 520 }}>Thirty-four seats, low light and a view of the open kitchen from every table.</p>
        <div className="gallery">
          {ROOM.map((r) => (
            <div key={r.img} className={'gitem rv ' + r.cls}>
              <Photo src={r.img} alt={r.alt} />
              <span>{r.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}