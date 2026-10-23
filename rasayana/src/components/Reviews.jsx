import { REVIEWS } from '../data/media.js'

export default function Reviews() {
  return (
    <section>
      <div className="wrap">
        <h2 className="rv">What guests say</h2>
        <div className="grid3">
          {REVIEWS.map((r) => (
            <figure className="card rv" key={r.by} style={{ margin: 0 }}>
              <p className="serif review-q">“{r.q}”</p>
              <figcaption className="muted" style={{ marginTop: 18, fontSize: '.8rem' }}>{r.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}