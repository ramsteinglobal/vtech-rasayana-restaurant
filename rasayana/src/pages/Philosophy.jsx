import PageWrap from '../components/PageWrap.jsx'
import Photo from '../components/Photo.jsx'

const RASAS = [
  ['Madhura', 'Sweet', 'Jaggery, milk, ripe fruit. It grounds a dish.'],
  ['Amla', 'Sour', 'Kokum, tamarind, curd. It wakes the palate.'],
  ['Lavana', 'Salt', 'Black salt and sea salt. It deepens flavour.'],
  ['Katu', 'Pungent', 'Chilli, ginger, pepper. It brings heat and lift.'],
  ['Tikta', 'Bitter', 'Fenugreek, bitter gourd. It adds grown-up depth.'],
  ['Kashaya', 'Astringent', 'Pomegranate, raw banana. It leaves the finish clean.'],
]

const STATS = [
  ['4,000+', 'years of turmeric use in India'],
  ['150,000', 'saffron flowers for one kilogram'],
  ['1498', 'year da Gama reached Calicut for pepper'],
  ['6', 'tastes in every course we serve'],
]

const STORY = [
  {
    era: 'Around 2500 BCE',
    title: 'The first spice kitchens',
    text: 'Traces of turmeric and ginger have been found on pottery and teeth from Bronze Age settlements in the Indus region. Spices were already part of daily cooking, long before they were traded.',
  },
  {
    era: 'Ancient texts',
    title: 'Food as medicine',
    text: 'The Charaka and Sushruta texts, written in Sanskrit, describe spices as part of a way of living well. Rasayana was the branch of Ayurveda about renewal: eating, sleeping and cooking so the body stays strong through the years.',
  },
  {
    era: 'Rome, 408 CE',
    title: 'Pepper worth a city',
    text: 'Black pepper from the Malabar coast travelled by sea to Rome and cost so much it was called black gold. When the Goths besieged Rome, their leader Alaric reportedly demanded 3,000 pounds of pepper as part of the ransom.',
  },
  {
    era: '1498',
    title: 'A sea route for spice',
    text: 'Vasco da Gama landed at Calicut after sailing around Africa, looking for pepper and cinnamon. That voyage opened a new era of global trade, and changed how the world ate.',
  },
  {
    era: 'Today',
    title: 'Back to the source',
    text: 'At Rasayana we buy whole spices from the farms that grow them, toast them each morning and grind them by hand. The old method is still the best one.',
  },
]

const SPICES = [
  { name: 'Turmeric', origin: 'Across India', old: 'Used for thousands of years in cooking, ceremony and home remedies.', now: 'Its compound curcumin is widely studied for its effect on inflammation, though results in humans are still mixed.' },
  { name: 'Black pepper', origin: 'Malabar coast, Kerala', old: 'Called the king of spices and used to wake up digestion.', now: 'Its piperine has been shown to help the body absorb curcumin, which is why the two are often paired.' },
  { name: 'Saffron', origin: 'Pampore, Kashmir', old: 'Prized in Kashmir for centuries and added to milk, sweets and festive rice.', now: 'Small early studies have looked at saffron and mood, but more research is needed.' },
  { name: 'Cardamom', origin: 'Western Ghats', old: 'Known as the queen of spices, chewed after meals to freshen the breath.', now: 'Often used to ease heavy meals, although strong evidence is limited.' },
  { name: 'Ginger', origin: 'Kerala and the North East', old: 'A home remedy for colds, stomach upsets and cold winter days.', now: 'Research supports ginger for easing nausea, including in pregnancy and after surgery.' },
  { name: 'Cumin', origin: 'Rajasthan and Gujarat', old: 'Roasted and used in water to settle the stomach.', now: 'A traditional digestive aid, and a good source of iron.' },
]

export default function Philosophy() {
  return (
    <PageWrap>
      <div className="phil">
        {/* spice photo backdrop, this page only */}
        <div className="phil-bg" aria-hidden="true">
          <Photo className="phil-photo" src="/images/philosophy/spices.jpg" alt="" fallback={<div className="phil-glow" />} />
          <div className="phil-shade" />
        </div>

        <section className="page-head">
          <div className="wrap two">
            <div>
              <h1 className="rv">Renewal, one plate at a time</h1>
              <p className="rv" style={{ marginTop: 24, color: '#d8cbb6', maxWidth: 480 }}>Rasayana is the old Sanskrit idea of renewal through taste. We cook with one hundred twenty small farms across India, age our own ghee and grind our own spices each morning.</p>
            </div>
            <div className="orb" role="img" aria-label="Glowing saffron sun" />
          </div>
        </section>

        <section className="phil-stats">
          <div className="wrap stats-grid">
            {STATS.map(([n, t]) => (
              <div className="rv" key={n}><b>{n}</b><span>{t}</span></div>
            ))}
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2 className="rv">The story of spice</h2>
            <p className="rv" style={{ marginTop: 14, color: '#d8cbb6', maxWidth: 520 }}>For most of history, a handful of seeds and roots from India shaped trade, medicine and kitchens across the world.</p>
            <ol className="timeline">
              {STORY.map((s) => (
                <li className="tl rv" key={s.title}>
                  <small>{s.era}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="phil-alt">
          <div className="wrap">
            <h2 className="rv">Six spices we cook with</h2>
            <p className="rv" style={{ marginTop: 14, color: '#d8cbb6', maxWidth: 560 }}>Each one has a long place in Indian kitchens. Here is what tradition says, and what modern research has found so far.</p>
            <div className="grid3">
              {SPICES.map((s) => (
                <article className="card spice rv" key={s.name}>
                  <h3>{s.name}</h3>
                  <small>{s.origin}</small>
                  <p><b>Tradition</b>{s.old}</p>
                  <p><b>Research</b>{s.now}</p>
                </article>
              ))}
            </div>
            <p className="note" style={{ color: '#a89a85' }}>This is food history and general information, not medical advice. If you have a health condition or take medication, speak to your doctor about your diet.</p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2 className="rv">The six rasas</h2>
            <p className="rv" style={{ marginTop: 14, color: '#d8cbb6', maxWidth: 520 }}>Ayurveda names six tastes. A balanced meal includes all of them, and so does each course we serve.</p>
            <div className="grid3">
              {RASAS.map(([sk, en, d]) => (
                <div className="card rv" key={sk}><h3>{sk}</h3><small>{en}</small><p className="muted">{d}</p></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrap>
  )
}