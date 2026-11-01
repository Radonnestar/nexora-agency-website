import { motion } from 'motion/react'

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

/* ---------------- stars, moon, shooting stars ---------------- */

const starRand = rng(5)
const stars = Array.from({ length: 120 }, () => {
  const big = starRand() < 0.12
  const roll = starRand()
  return {
    left: starRand() * 100,
    top: starRand() * 100,
    size: big ? 3 : roll < 0.5 ? 2 : 1,
    big,
    delay: starRand() * 4,
    duration: 2 + starRand() * 3,
    tint: roll < 0.25 ? '#c7d2fe' : roll < 0.4 ? '#f5d0fe' : '#ffffff',
  }
})

export function Stars() {
  return (
    <motion.div
      className="absolute inset-x-0 top-0 h-[125vh]"
      initial={{ y: '0vh' }}
      animate={{ y: '-14vh' }}
      transition={{ duration: 11, ease: 'linear' }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="iv-twinkle absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            background: s.tint,
            boxShadow: s.big ? `0 0 8px 2px ${s.tint}` : undefined,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </motion.div>
  )
}

const shooters = [
  { left: '12%', top: '10%', delay: 2.4 },
  { left: '58%', top: '16%', delay: 5.8 },
]

export function ShootingStars() {
  return (
    <>
      {shooters.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute h-[2px] w-[14vw]"
          style={{
            left: s.left,
            top: s.top,
            rotate: 24,
            background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)',
          }}
          initial={{ x: '0vw', y: '0vh', opacity: 0 }}
          animate={{ x: '34vw', y: '16vh', opacity: [0, 1, 0] }}
          transition={{ delay: s.delay, duration: 0.9, ease: 'easeIn' }}
        />
      ))}
    </>
  )
}

export function Moon() {
  return (
    <div
      className="absolute top-[8vh] right-[9vw] h-[min(17vh,17vw)] w-[min(17vh,17vw)] rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 32%, #ffffff, #e2e8f0 50%, #b6c2e0 100%)',
        boxShadow: '0 0 60px 18px rgba(165,180,252,0.35), 0 0 170px 70px rgba(129,140,248,0.18)',
      }}
    >
      <span className="absolute rounded-full" style={{ left: '58%', top: '28%', width: '17%', height: '17%', background: 'rgba(148,163,184,0.35)' }} />
      <span className="absolute rounded-full" style={{ left: '28%', top: '55%', width: '22%', height: '22%', background: 'rgba(148,163,184,0.3)' }} />
      <span className="absolute rounded-full" style={{ left: '64%', top: '60%', width: '11%', height: '11%', background: 'rgba(148,163,184,0.3)' }} />
    </div>
  )
}

/* ---------------- the city far below ---------------- */

const fieldRand = rng(11)
const nightPalette = ['#0f2a3f', '#12324a', '#0d2438', '#15294a', '#10303a', '#0e2a2f', '#17224a', '#0b2236']
const fields = Array.from({ length: 14 * 10 }, (_, i) => {
  const c = i % 14
  const r = Math.floor(i / 14)
  return {
    x: c * 100 + fieldRand() * 4,
    y: r * 100 + fieldRand() * 4,
    w: 93 + fieldRand() * 6,
    h: 93 + fieldRand() * 6,
    fill: nightPalette[Math.floor(fieldRand() * nightPalette.length)],
  }
})

const lightRand = rng(23)
const towns = Array.from({ length: 14 }, () => ({ cx: 80 + lightRand() * 1240, cy: 80 + lightRand() * 840 }))
const lights = [
  ...towns.flatMap((t) =>
    Array.from({ length: 120 }, () => ({
      x: t.cx + (lightRand() - 0.5) * 240,
      y: t.cy + (lightRand() - 0.5) * 190,
      r: 0.8 + lightRand() * 0.9,
      fill: lightRand() < 0.78 ? (lightRand() < 0.5 ? '#fde68a' : '#fbbf24') : '#7dd3fc',
    })),
  ),
  ...Array.from({ length: 360 }, () => ({
    x: lightRand() * 1400,
    y: lightRand() * 1000,
    r: 0.7 + lightRand() * 0.7,
    fill: '#fde68a',
  })),
]

export function Floor() {
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-[46vh] overflow-hidden"
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 11, times: [0, 0.9, 1], ease: 'linear' }}
    >
      <div className="relative h-full" style={{ perspective: '600px', perspectiveOrigin: '50% 0%' }}>
        <motion.div
          className="absolute top-0 left-1/2 -ml-[150vw] w-[300vw]"
          style={{ transformOrigin: '50% 0%', rotateX: 68 }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 2.2, 3.4] }}
          transition={{ duration: 11, times: [0, 0.72, 1], ease: 'easeIn' }}
        >
          <svg viewBox="0 0 1400 1000" className="block w-full">
            <rect width="1400" height="1000" fill="#122640" />
            {fields.map((f, i) => (
              <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} fill={f.fill} rx={4} />
            ))}
            {/* glowing street grid */}
            {Array.from({ length: 15 }, (_, c) => (
              <path key={`v${c}`} d={`M${c * 100 + 47} 0 V1000`} stroke="#f59e0b" strokeOpacity={c % 4 === 0 ? 0.28 : 0.1} strokeWidth={c % 4 === 0 ? 4 : 2} />
            ))}
            {Array.from({ length: 11 }, (_, r) => (
              <path key={`h${r}`} d={`M0 ${r * 100 - 3} H1400`} stroke="#f59e0b" strokeOpacity={r % 3 === 0 ? 0.28 : 0.1} strokeWidth={r % 3 === 0 ? 4 : 2} />
            ))}
            {/* moonlit river and lake */}
            <path d="M-50 300 C250 220 450 520 800 430 S1250 300 1450 460" fill="none" stroke="#1e3a8a" strokeWidth={46} strokeLinecap="round" />
            <path d="M-50 300 C250 220 450 520 800 430 S1250 300 1450 460" fill="none" stroke="#60a5fa" strokeOpacity={0.55} strokeWidth={10} strokeLinecap="round" />
            <ellipse cx={1050} cy={760} rx={150} ry={72} fill="#1e3a8a" />
            <ellipse cx={1080} cy={750} rx={50} ry={16} fill="#e0e7ff" opacity={0.55} />
            {/* city lights with soft halos */}
            {lights.map((l, i) => (
              <g key={i}>
                <circle cx={l.x} cy={l.y} r={l.r * 2.2} fill={l.fill} opacity={0.22} />
                <circle cx={l.x} cy={l.y} r={l.r} fill={l.fill} />
              </g>
            ))}
          </svg>
        </motion.div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
          style={{ background: 'linear-gradient(rgba(91,63,159,0.9), rgba(91,63,159,0))' }}
        />
      </div>
    </motion.div>
  )
}

/* ---------------- moonlit clouds ---------------- */

function CloudShape() {
  return (
    <svg viewBox="0 0 200 100" className="block w-full">
      <defs>
        <linearGradient id="iv-night-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7482bd" />
          <stop offset="1" stopColor="#262f5e" />
        </linearGradient>
      </defs>
      <path
        d="M30 84 C2 84 2 50 30 48 C30 20 72 12 88 38 C98 12 140 16 144 46 C172 42 192 62 174 84Z"
        fill="url(#iv-night-cloud)"
      />
      <path
        d="M30 48 C30 20 72 12 88 38 C98 12 140 16 144 46 C158 44 172 52 177 66"
        fill="none"
        stroke="#c7d2fe"
        strokeOpacity={0.55}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

const fallClouds = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 29 + 6) % 88,
  width: 20 + ((i * 7) % 5) * 7,
  delay: i * 0.52,
  duration: 2.3 + (i % 3) * 0.7,
}))

const driftClouds = [
  { left: 6, width: 34, delay: 7.6, duration: 4.6 },
  { left: 62, width: 28, delay: 8.0, duration: 4.4 },
  { left: 30, width: 40, delay: 8.4, duration: 4.6 },
  { left: 74, width: 24, delay: 8.8, duration: 4.2 },
]

export function Clouds() {
  return (
    <>
      {[...fallClouds, ...driftClouds].map((c, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute top-0"
          style={{ left: `${c.left}%`, width: `${c.width}vw` }}
          initial={{ y: '125vh', opacity: 0 }}
          animate={{ y: '-45vh', opacity: [0, 0.95, 0.95, 0.85] }}
          transition={{ delay: c.delay, duration: c.duration, ease: 'linear' }}
        >
          <CloudShape />
        </motion.div>
      ))}
    </>
  )
}

/* ---------------- the landing hill ---------------- */

export function Meadow({ delay, duration }: { delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0"
      style={{ top: 'calc(50% + var(--s) * 0.16)' }}
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: 'calc(var(--s) * 0.35)' }}
      >
        <path d="M0 90 C240 30 480 60 720 84 C960 108 1200 40 1440 70 L1440 300 L0 300Z" fill="#1d2b57" />
        <path d="M0 90 C240 30 480 60 720 84 C960 108 1200 40 1440 70" fill="none" stroke="#818cf8" strokeOpacity={0.45} strokeWidth={2.5} />

        {/* distant village with lit windows */}
        <g fill="#0f1836">
          <rect x={540} y={62} width={22} height={16} />
          <path d="M536 62 L551 50 L566 62Z" />
          <rect x={590} y={68} width={18} height={13} />
          <path d="M586 68 L599 58 L612 68Z" />
          <rect x={900} y={78} width={22} height={15} />
          <path d="M896 78 L911 66 L926 78Z" />
        </g>
        <g fill="#fde68a">
          <rect x={546} y={67} width={5} height={6} />
          <rect x={555} y={67} width={4} height={6} />
          <rect x={594} y={72} width={5} height={6} />
          <rect x={906} y={82} width={5} height={6} />
        </g>

        <path d="M0 130 C300 80 600 110 900 124 C1100 134 1300 100 1440 112 L1440 300 L0 300Z" fill="#14213f" />
        <path d="M0 130 C300 80 600 110 900 124 C1100 134 1300 100 1440 112" fill="none" stroke="#818cf8" strokeOpacity={0.3} strokeWidth={2.5} />

        <g fill="#0a1228">
          <circle cx={150} cy={104} r={26} />
          <rect x={146} y={118} width={8} height={22} />
          <circle cx={1290} cy={96} r={32} />
          <rect x={1285} y={112} width={10} height={26} />
          <circle cx={1220} cy={110} r={20} />
          <circle cx={300} cy={118} r={18} />
        </g>

        <path d="M0 176 C300 140 600 156 900 168 C1100 176 1300 150 1440 160 L1440 300 L0 300Z" fill="#0b1229" />

        {/* fireflies */}
        <g fill="#fde047">
          {[
            [240, 214, 0], [520, 232, 1.2], [1000, 220, 0.6], [1180, 240, 1.8],
            [380, 246, 2.4], [860, 250, 0.3], [1320, 226, 2.1],
          ].map(([x, y, d], i) => (
            <circle key={i} cx={x} cy={y} r={3.5} className="iv-twinkle" style={{ animationDelay: `${d}s`, animationDuration: '2.4s' }} />
          ))}
        </g>
      </svg>
      <div
        className="absolute inset-x-0 bottom-0 bg-[#0b1229]"
        style={{ top: 'calc(var(--s) * 0.35 - 1px)' }}
      />
    </motion.div>
  )
}