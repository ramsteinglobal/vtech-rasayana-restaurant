import { AWARDS } from '../data/content.js'

export default function AwardsStrip() {
  return (
    <div className="awards">
      <div className="wrap awards-grid">
        {AWARDS.map(([name, note]) => (
          <div key={name} className="rv"><b>{name}</b><span>{note}</span></div>
        ))}
      </div>
    </div>
  )
}