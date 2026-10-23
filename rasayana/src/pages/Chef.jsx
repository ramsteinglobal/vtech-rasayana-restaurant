import PageWrap from '../components/PageWrap.jsx'
import Photo from '../components/Photo.jsx'

const Silhouette = (
  <div className="chef-img">
    <svg viewBox="0 0 200 240"><circle cx="100" cy="85" r="42" fill="#2a1d12" /><path d="M20 240c0-70 35-100 80-100s80 30 80 100z" fill="#2a1d12" /><path d="M62 60q38-40 76 0v-14q-38-38-76 0z" fill="#f3e9d8" opacity=".9" /></svg>
  </div>
)

const FACTS = [
  ['2012', 'Trained under a two-star chef in Lyon'],
  ['2015', 'Joined a Copenhagen kitchen on the New Nordic scene'],
  ['2019', 'Returned to Delhi and opened Rasayana'],
  ['2025', 'Awarded one Michelin star'],
]

export default function Chef() {
  return (
    <PageWrap>
      <section className="page-head">
        <div className="wrap two">
          <div className="chef-photo rv">
            <Photo src="/images/chef.jpg" alt="Chef Aarav Mehra" fallback={Silhouette} />
          </div>
          <div>
            <blockquote className="rv">“A great meal should taste like somewhere you have been, and somewhere you want to go back to.”</blockquote>
            <h2 className="rv" style={{ fontSize: '2rem' }}>Chef Aarav Mehra</h2>
            <p className="muted rv" style={{ marginTop: 16 }}>Born in Amritsar, Aarav trained in Lyon and Copenhagen before returning to Delhi in 2019. He opened Rasayana to cook his grandmother's food with the discipline of a European fine dining room.</p>
            <p className="muted rv" style={{ marginTop: 14 }}>He leads a team of fourteen and still plates the final course himself every night.</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2 className="rv">The path to Rasayana</h2>
          <div className="grid3">
            {FACTS.map(([y, t]) => (
              <div className="card rv" key={y}><h3>{y}</h3><p className="muted">{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="rv">In the kitchen</h2>
          <div className="duo">
            <div className="duo-item rv"><Photo src="/images/chef-kitchen.jpg" alt="Chef at the open fire" /></div>
            <div className="duo-item rv"><Photo src="/images/chef-hands.jpg" alt="Finishing a plate by hand" /></div>
          </div>
        </div>
      </section>
    </PageWrap>
  )
}