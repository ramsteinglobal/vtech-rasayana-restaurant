// Illustrated plates. Each kind draws a simple stylised dish on a dark plate.
const Plate = ({ children }) => (
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="100" cy="100" r="92" fill="#1d1610" stroke="#f2a31b" strokeOpacity=".5" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="74" fill="#120d09" stroke="#f2a31b" strokeOpacity=".2" />
    {children}
  </svg>
)

const ART = {
  custard: (
    <>
      <circle cx="100" cy="100" r="40" fill="#f5d98a" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="#fff3c4" strokeOpacity=".5" strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${86 + i * 6} 84 q6 12 -4 22`} stroke="#e0701a" strokeWidth="2" fill="none" strokeLinecap="round" />
      ))}
      <circle cx="132" cy="132" r="5" fill="#c8741a" /><circle cx="70" cy="128" r="4" fill="#c8741a" /><circle cx="128" cy="70" r="3" fill="#f2a31b" />
    </>
  ),
  scallop: (
    <>
      {[[78, 92], [118, 92], [98, 126]].map(([x, y], i) => (
        <g key={i}><circle cx={x} cy={y} r="19" fill="#f3e9d8" /><circle cx={x} cy={y} r="19" fill="none" stroke="#d9c6a4" strokeWidth="2" /><circle cx={x - 5} cy={y - 5} r="5" fill="#fff" opacity=".6" /></g>
      ))}
      {[[60, 120], [140, 118], [100, 66], [92, 148], [126, 140]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#8fb04a" />)}
      <circle cx="150" cy="92" r="3" fill="#cfe9e4" /><circle cx="52" cy="90" r="3" fill="#cfe9e4" />
    </>
  ),
  mushroom: (
    <>
      {[[80, 98, 1], [122, 104, .85], [100, 130, .9]].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path d="M-26 0 Q-26 -30 0 -30 Q26 -30 26 0 Q0 8 -26 0Z" fill="#6b4423" />
          <path d="M-8 2 h16 v18 q-8 5 -16 0z" fill="#d9c6a4" />
          <circle cx="-10" cy="-14" r="3" fill="#8a5a30" /><circle cx="8" cy="-18" r="3" fill="#8a5a30" />
        </g>
      ))}
      <circle cx="66" cy="136" r="3" fill="#f2a31b" /><circle cx="140" cy="76" r="3" fill="#f2a31b" />
    </>
  ),
  lamb: (
    <>
      <rect x="58" y="78" width="84" height="48" rx="22" fill="#4a2512" />
      <rect x="62" y="82" width="76" height="22" rx="11" fill="#8a3d18" opacity=".7" />
      <path d="M70 100 q30 -10 60 0" stroke="#c8741a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M60 140 q40 14 82 -2" stroke="#7a1f12" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />
      {[[70, 70], [130, 72], [100, 62]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="#7fa34a" transform={`rotate(${i * 40 - 30} ${x} ${y})`} />)}
    </>
  ),
  bread: (
    <>
      <ellipse cx="96" cy="100" rx="46" ry="30" fill="#3a2410" />
      <ellipse cx="96" cy="96" rx="44" ry="27" fill="#8a5a2a" />
      {[78, 94, 110].map((x) => <path key={x} d={`M${x} 82 q8 14 0 26`} stroke="#d9b070" strokeWidth="3" fill="none" strokeLinecap="round" />)}
      <rect x="132" y="120" width="24" height="16" rx="3" fill="#ffe08a" /><circle cx="60" cy="140" r="5" fill="#f2a31b" />
    </>
  ),
  dessert: (
    <>
      <circle cx="100" cy="102" r="30" fill="#c98a4a" />
      <circle cx="92" cy="92" r="9" fill="#e0aa6a" opacity=".7" />
      {[[70, 70, -20], [128, 76, 30], [132, 128, 60], [66, 130, -50], [100, 62, 0]].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="9" ry="5" fill="#e07a8a" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {[84, 100, 116].map((x) => <circle key={x} cx={x} cy="140" r="2.5" fill="#c8e08a" />)}
    </>
  ),
}

export default function DishArt({ kind }) {
  return <Plate>{ART[kind] || ART.custard}</Plate>
}