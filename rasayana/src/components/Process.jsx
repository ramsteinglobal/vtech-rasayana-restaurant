import Photo from './Photo.jsx'
import { PROCESS } from '../data/media.js'

export default function Process() {
  return (
    <section>
      <div className="wrap">
        <h2 className="rv">From fire to plate</h2>
        <p className="muted rv" style={{ marginTop: 14, maxWidth: 520 }}>Four steps happen before a dish reaches your table. We do every one of them in our own kitchen.</p>
        <div className="process-grid">
          {PROCESS.map((p, i) => (
            <figure className="pcard rv" key={p.title}>
              <div className="pimg"><Photo src={p.img} alt={p.title} /></div>
              <figcaption>
                <small>Step {i + 1}</small>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}