import type { ReactNode } from 'react'

/* Original, hand-drawn mockup illustrations for each portfolio card.
   All drawn on a 400 x 192 canvas so they fill the card image area. */

function LumenFinance() {
  return (
    <>
      <rect x="70" y="24" width="260" height="150" rx="10" fill="#0f172a" fillOpacity="0.93" />
      <rect x="70" y="24" width="260" height="22" rx="10" fill="#1e293b" />
      <rect x="70" y="36" width="260" height="10" fill="#1e293b" />
      <circle cx="84" cy="35" r="3" fill="#f87171" />
      <circle cx="95" cy="35" r="3" fill="#fbbf24" />
      <circle cx="106" cy="35" r="3" fill="#4ade80" />

      <rect x="78" y="54" width="34" height="112" rx="6" fill="#1e293b" />
      <rect x="84" y="62" width="22" height="6" rx="3" fill="#818cf8" />
      <rect x="84" y="76" width="22" height="6" rx="3" fill="#475569" />
      <rect x="84" y="90" width="22" height="6" rx="3" fill="#475569" />
      <rect x="84" y="104" width="22" height="6" rx="3" fill="#475569" />

      {[120, 188, 256].map((x, i) => (
        <g key={x}>
          <rect x={x} y="54" width="62" height="34" rx="6" fill="#1e293b" />
          <rect x={x + 8} y="61" width="26" height="4" rx="2" fill="#64748b" />
          <rect x={x + 8} y="71" width={[40, 34, 44][i]} height="8" rx="3" fill={['#a5b4fc', '#6ee7b7', '#f0abfc'][i]} />
        </g>
      ))}

      <rect x="120" y="96" width="198" height="70" rx="6" fill="#1e293b" />
      <path
        d="M128 150 L150 134 L172 142 L196 120 L220 126 L246 108 L272 114 L298 102 L310 98 L310 160 L128 160Z"
        fill="#818cf8"
        fillOpacity="0.25"
      />
      <path
        d="M128 150 L150 134 L172 142 L196 120 L220 126 L246 108 L272 114 L298 102 L310 98"
        fill="none"
        stroke="#a5b4fc"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="310" cy="98" r="4" fill="#fff" />
    </>
  )
}

function OaklineCoffee() {
  return (
    <>
      {/* business card behind */}
      <g transform="rotate(-9 96 112)">
        <rect x="52" y="82" width="92" height="56" rx="6" fill="#fff" fillOpacity="0.92" />
        <circle cx="72" cy="104" r="9" fill="#78350f" />
        <ellipse cx="72" cy="104" rx="3" ry="5" transform="rotate(35 72 104)" fill="#fde68a" />
        <rect x="88" y="98" width="42" height="5" rx="2.5" fill="#92400e" />
        <rect x="88" y="109" width="30" height="4" rx="2" fill="#d6b88a" />
        <rect x="62" y="124" width="60" height="3" rx="1.5" fill="#e7d3ae" />
      </g>

      {/* coffee bag */}
      <path d="M152 44 H248 L252 170 H148Z" fill="#fef3c7" />
      <path d="M152 44 H248 L249 58 H151Z" fill="#78350f" />
      <path d="M150 58 L250 58" stroke="#92400e" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="200" cy="104" r="27" fill="#78350f" />
      <ellipse cx="200" cy="104" rx="9" ry="14" transform="rotate(35 200 104)" fill="#fde68a" />
      <path d="M192 112 Q200 102 208 96" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="200" y="148" textAnchor="middle" fontSize="12" fontWeight="800" letterSpacing="3" fill="#78350f">
        OAKLINE
      </text>
      <text x="200" y="160" textAnchor="middle" fontSize="6" letterSpacing="2" fill="#a16207">
        SPECIALTY ROAST
      </text>

      {/* cup */}
      <path d="M272 118 H318 V132 A23 23 0 0 1 272 132Z" fill="#fff" fillOpacity="0.95" />
      <path d="M318 124 q14 0 14 10 q0 10 -14 10" fill="none" stroke="#fff" strokeOpacity="0.95" strokeWidth="5" />
      <ellipse cx="295" cy="119" rx="21" ry="4" fill="#78350f" />
      <rect x="262" y="160" width="66" height="5" rx="2.5" fill="#fff" fillOpacity="0.7" />
      <path d="M286 106 q-5 -9 0 -17 q5 -8 0 -16" stroke="#fff" strokeOpacity="0.8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M302 106 q-5 -9 0 -17 q5 -8 0 -16" stroke="#fff" strokeOpacity="0.6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  )
}

function PulseFitness() {
  return (
    <>
      {/* side phones */}
      <rect x="98" y="36" width="70" height="150" rx="13" fill="#064e3b" fillOpacity="0.85" />
      <rect x="108" y="50" width="50" height="8" rx="4" fill="#34d399" fillOpacity="0.8" />
      <rect x="108" y="66" width="50" height="30" rx="6" fill="#0f766e" fillOpacity="0.8" />
      <rect x="108" y="104" width="50" height="30" rx="6" fill="#0f766e" fillOpacity="0.6" />
      <rect x="232" y="36" width="70" height="150" rx="13" fill="#064e3b" fillOpacity="0.85" />
      <circle cx="267" cy="70" r="14" fill="#0f766e" fillOpacity="0.9" />
      <rect x="242" y="94" width="50" height="6" rx="3" fill="#34d399" fillOpacity="0.8" />
      <rect x="248" y="108" width="38" height="5" rx="2.5" fill="#6ee7b7" fillOpacity="0.6" />
      <rect x="244" y="132" width="46" height="16" rx="8" fill="#34d399" fillOpacity="0.85" />

      {/* main phone */}
      <rect x="158" y="12" width="84" height="178" rx="16" fill="#0f172a" />
      <rect x="164" y="19" width="72" height="164" rx="11" fill="#022c22" />
      <rect x="188" y="23" width="24" height="5" rx="2.5" fill="#0f172a" />
      <circle cx="200" cy="72" r="22" fill="none" stroke="#134e4a" strokeWidth="7" />
      <circle
        cx="200"
        cy="72"
        r="22"
        fill="none"
        stroke="#34d399"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="100 138.2"
        transform="rotate(-90 200 72)"
      />
      <text x="200" y="76" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">
        72%
      </text>
      <path
        d="M170 122 h14 l5 -12 l7 24 l6 -18 l4 6 h26"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[14, 24, 18, 30, 22].map((h, i) => (
        <rect key={i} x={172 + i * 13} y={172 - h} width="8" height={h} rx="3" fill={i === 3 ? '#34d399' : '#0f766e'} />
      ))}
    </>
  )
}

function BrightsideClinic() {
  return (
    <>
      <rect x="64" y="22" width="272" height="152" rx="10" fill="#f8fafc" />
      <rect x="64" y="22" width="272" height="20" rx="10" fill="#e2e8f0" />
      <rect x="64" y="32" width="272" height="10" fill="#e2e8f0" />
      <circle cx="78" cy="32" r="3" fill="#f87171" />
      <circle cx="89" cy="32" r="3" fill="#fbbf24" />
      <circle cx="100" cy="32" r="3" fill="#4ade80" />

      <rect x="82" y="52" width="40" height="6" rx="3" fill="#0284c7" />
      {[190, 222, 254, 286].map((x) => (
        <rect key={x} x={x} y="53" width="22" height="4" rx="2" fill="#94a3b8" />
      ))}

      <rect x="84" y="74" width="120" height="9" rx="4.5" fill="#0f172a" />
      <rect x="84" y="90" width="92" height="9" rx="4.5" fill="#0f172a" />
      <rect x="84" y="108" width="110" height="4" rx="2" fill="#94a3b8" />
      <rect x="84" y="117" width="84" height="4" rx="2" fill="#94a3b8" />
      <rect x="84" y="130" width="74" height="22" rx="11" fill="#0284c7" />
      <text x="121" y="144" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        Book now
      </text>

      <circle cx="274" cy="102" r="40" fill="#e0f2fe" />
      <path
        transform="translate(274 102) scale(1.35)"
        d="M-14 -14 c6 -6 12 -2 14 -2 s8 -4 14 2 c6 8 -2 20 -4 30 c-1 5 -5 6 -6 0 c-1 -5 -2 -9 -4 -9 s-3 4 -4 9 c-1 6 -5 5 -6 0 c-2 -10 -10 -22 -4 -30z"
        fill="#fff"
        stroke="#0284c7"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M246 70 l3 4 l-3 4 l-3 -4z M304 128 l2.5 3.4 l-2.5 3.4 l-2.5 -3.4z" fill="#38bdf8" />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={226 + i * 17}
          y="146"
          width="13"
          height="14"
          rx="4"
          fill={i === 2 ? '#0284c7' : '#e2e8f0'}
        />
      ))}
    </>
  )
}

function VelvetCo() {
  return (
    <>
      <rect x="118" y="16" width="164" height="160" rx="12" fill="#fff" />
      <circle cx="138" cy="36" r="9" fill="#f43f5e" />
      <rect x="152" y="29" width="50" height="6" rx="3" fill="#0f172a" />
      <rect x="152" y="40" width="32" height="4" rx="2" fill="#94a3b8" />
      <rect x="126" y="54" width="148" height="74" rx="6" fill="#ffe4e6" />
      <text x="200" y="104" textAnchor="middle" fontSize="42" fontWeight="900" fill="#e11d48">
        3×
      </text>
      <text x="200" y="120" textAnchor="middle" fontSize="8" letterSpacing="2.5" fontWeight="700" fill="#fb7185">
        MORE LEADS
      </text>
      <path
        transform="translate(140 148) scale(1.6)"
        d="M0 5 C-10 -3 -7 -11 0 -6 C7 -11 10 -3 0 5Z"
        fill="#f43f5e"
      />
      <rect x="160" y="141" width="12" height="12" rx="6" fill="#cbd5e1" />
      <rect x="178" y="141" width="12" height="12" rx="4" fill="#cbd5e1" />
      <rect x="126" y="160" width="86" height="4" rx="2" fill="#e2e8f0" />

      {/* floating reactions */}
      <circle cx="92" cy="66" r="17" fill="#fff" fillOpacity="0.95" />
      <path transform="translate(92 67) scale(1.3)" d="M0 5 C-10 -3 -7 -11 0 -6 C7 -11 10 -3 0 5Z" fill="#f43f5e" />
      <rect x="298" y="52" width="58" height="24" rx="12" fill="#fff" fillOpacity="0.95" />
      <text x="327" y="68" textAnchor="middle" fontSize="11" fontWeight="800" fill="#e11d48">
        +248
      </text>
      <path
        d="M300 150 L318 130 L330 140 L352 108"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M338 106 L354 105 L352 121" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="84" cy="136" r="5" fill="#fff" fillOpacity="0.6" />
      <circle cx="104" cy="152" r="3" fill="#fff" fillOpacity="0.45" />
    </>
  )
}

function AtlasLogistics() {
  return (
    <>
      <rect x="60" y="20" width="280" height="152" rx="10" fill="#fff" fillOpacity="0.95" />

      {/* logo tile */}
      <rect x="72" y="32" width="112" height="128" rx="8" fill="#4c1d95" />
      <circle cx="128" cy="84" r="28" fill="none" stroke="#e9d5ff" strokeWidth="3" />
      <ellipse cx="128" cy="84" rx="12" ry="28" fill="none" stroke="#e9d5ff" strokeWidth="2" />
      <path d="M100 84 H156 M105 69 H151 M105 99 H151" stroke="#e9d5ff" strokeWidth="2" />
      <path d="M106 100 Q128 58 154 74" fill="none" stroke="#f0abfc" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
      <circle cx="154" cy="74" r="4.5" fill="#f0abfc" />
      <text x="128" y="138" textAnchor="middle" fontSize="15" fontWeight="800" letterSpacing="4" fill="#fff">
        ATLAS
      </text>
      <text x="128" y="149" textAnchor="middle" fontSize="6" letterSpacing="3" fill="#e9d5ff">
        LOGISTICS
      </text>

      {/* palette and type */}
      {['#4c1d95', '#a21caf', '#d946ef', '#f5d0fe'].map((c, i) => (
        <circle key={c} cx={212 + i * 30} cy="50" r="11" fill={c} stroke="#e2e8f0" strokeWidth="1" />
      ))}
      <text x="204" y="100" fontSize="34" fontWeight="800" fill="#4c1d95">
        Aa
      </text>
      <rect x="262" y="76" width="64" height="5" rx="2.5" fill="#cbd5e1" />
      <rect x="262" y="87" width="50" height="5" rx="2.5" fill="#cbd5e1" />
      <rect x="262" y="98" width="58" height="5" rx="2.5" fill="#cbd5e1" />

      {/* mini business card */}
      <rect x="198" y="120" width="130" height="40" rx="6" fill="#4c1d95" />
      <circle cx="216" cy="140" r="8" fill="none" stroke="#e9d5ff" strokeWidth="2" />
      <rect x="232" y="132" width="50" height="5" rx="2.5" fill="#fff" fillOpacity="0.9" />
      <rect x="232" y="143" width="70" height="4" rx="2" fill="#e9d5ff" fillOpacity="0.7" />
    </>
  )
}

const art: Record<string, () => ReactNode> = {
  'Lumen Finance': LumenFinance,
  'Oakline Coffee': OaklineCoffee,
  'Pulse Fitness App': PulseFitness,
  'Brightside Clinic': BrightsideClinic,
  'Velvet & Co.': VelvetCo,
  'Atlas Logistics': AtlasLogistics,
}

export default function ProjectArt({ title }: { title: string }) {
  const Drawing = art[title]
  if (!Drawing) return null

  return (
    <svg
      viewBox="0 0 400 192"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <Drawing />
    </svg>
  )
}