import type { CSSProperties } from 'react'

const OUT = '#0f172a'
const SKIN = '#f3c29a'
const SKIN_D = '#d99a73'
const SUIT = '#4f46e5'
const SUIT_D = '#4338ca'
const PINK = '#d946ef'
const GLOVE = '#475569'
const GLOVE_L = '#94a3b8'
const DARK = '#1f2937'
const WHITE = '#f8fafc'

// Pivot helper: rotate/scale around a point in the 640x640 drawing.
const piv = (x: number, y: number): CSSProperties => ({ transformOrigin: `${x}px ${y}px` })

type TubeProps = { d: string; w: number; fill: string; ow?: number }

// A limb: a thick rounded line with a dark outline underneath.
function Tube({ d, w, fill, ow = 4.5 }: TubeProps) {
  return (
    <>
      <path d={d} fill="none" stroke={OUT} strokeWidth={w + ow * 2} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={fill} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

// Boot pointing up (-y). The orange tread sole is at the far end.
function Boot({ x, y, rot, down = false }: { x: number; y: number; rot: number; down?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${down ? rot + 180 : rot})`}>
      <rect x={-19} y={-42} width={38} height={44} rx={12} fill="#e2e8f0" stroke={OUT} strokeWidth={4.5} />
      <rect x={-22} y={-56} width={44} height={20} rx={9} fill="#f97316" stroke={OUT} strokeWidth={4.5} />
      <path d="M-13 -50 H13 M-13 -43 H13" stroke="#fff" strokeOpacity={0.7} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  )
}

// Big gloved hand. Local origin = wrist, fingers point up (-y).
function Hand({
  x,
  y,
  rot,
  fist = false,
  side = 'right',
}: {
  x: number
  y: number
  rot: number
  fist?: boolean
  side?: 'left' | 'right'
}) {
  // The thumb always sits on the side facing his head: left hand -> +x, right hand -> -x.
  const t = side === 'right' ? -1 : 1
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {fist ? (
        <>
          <rect x={-18} y={-38} width={36} height={38} rx={14} fill={GLOVE} stroke={OUT} strokeWidth={4.5} />
          <path d="M-10 -28 H10 M-10 -17 H10" stroke={GLOVE_L} strokeWidth={3.5} strokeLinecap="round" />
        </>
      ) : (
        <>
          <Tube d="M-12 -30 L-14 -62" w={10} fill={GLOVE} ow={3} />
          <Tube d="M-4 -33 L-4 -68" w={10} fill={GLOVE} ow={3} />
          <Tube d="M5 -32 L6 -66" w={10} fill={GLOVE} ow={3} />
          <Tube d="M13 -27 L18 -56" w={10} fill={GLOVE} ow={3} />
          <Tube d={`M${t * 17} -10 L${t * 30} -24`} w={11} fill={GLOVE} ow={3} />
          <rect x={-20} y={-38} width={40} height={40} rx={15} fill={GLOVE} stroke={OUT} strokeWidth={4.5} />
          <rect x={-11} y={-29} width={22} height={24} rx={9} fill={GLOVE_L} opacity={0.85} />
        </>
      )}
    </g>
  )
}

// Head, centred on (0,0) with the chin pointing down. Used by both poses.
function Head() {
  return (
    <g>
      <rect x={-17} y={44} width={34} height={34} rx={10} fill={SKIN_D} stroke={OUT} strokeWidth={4.5} />
      <ellipse cx={-42} cy={24} rx={8} ry={12} fill={SKIN} stroke={OUT} strokeWidth={4} />
      <ellipse cx={42} cy={24} rx={8} ry={12} fill={SKIN} stroke={OUT} strokeWidth={4} />
      <path
        d="M-40 -6 Q-42 44 -22 62 Q0 74 22 62 Q42 44 40 -6 Z"
        fill={SKIN}
        stroke={OUT}
        strokeWidth={4.5}
        strokeLinejoin="round"
      />
      <path d="M-34 46 Q-18 68 0 68 Q18 68 34 46 Q18 60 0 60 Q-18 60 -34 46Z" fill={SKIN_D} opacity={0.55} />

      {/* nose + determined grin */}
      <path d="M-3 12 Q-7 28 -10 31 Q0 37 10 31 Q7 28 3 12" fill={SKIN_D} stroke={OUT} strokeWidth={3} strokeLinejoin="round" />
      <path d="M-18 46 Q0 64 18 46 Q0 52 -18 46Z" fill="#fff" stroke={OUT} strokeWidth={3.5} strokeLinejoin="round" />

      {/* helmet */}
      <path
        d="M-54 26 C-66 -66 66 -66 54 26 L46 40 L42 -2 C24 -14 -24 -14 -42 -2 L-46 40 Z"
        fill={WHITE}
        stroke={OUT}
        strokeWidth={4.5}
        strokeLinejoin="round"
      />
      <path d="M-8 -64 Q0 -68 8 -64 L10 -13 Q0 -18 -10 -13Z" fill={SUIT} />
      <path d="M-27 -56 Q-31 -30 -35 -8 M27 -56 Q31 -30 35 -8" stroke={PINK} strokeWidth={5} fill="none" strokeLinecap="round" />
      <ellipse cx={-30} cy={-40} rx={14} ry={6} fill="#fff" opacity={0.5} transform="rotate(-30 -30 -40)" />
      <path d="M-46 40 Q-40 76 0 78 Q40 76 46 40" fill="none" stroke="#111827" strokeWidth={5} strokeLinecap="round" />

      {/* goggles */}
      <rect x={-61} y={-8} width={122} height={18} rx={9} fill="#111827" />
      <rect x={-49} y={-21} width={98} height={40} rx={18} fill="url(#iv-lens)" stroke="#111827" strokeWidth={6} />
      <path d="M-37 -15 L-17 -15 L-31 14 L-47 14Z" fill="#fff" opacity={0.4} />
      <path d="M-7 -15 L-1 -15 L-13 14 L-19 14Z" fill="#fff" opacity={0.28} />
    </g>
  )
}

function FreefallPose() {
  return (
    <g className="iv-vb iv-story iv-ff-out" style={piv(320, 340)}>
      <g className="iv-vb iv-float" style={piv(320, 340)}>
        {/* legs arch up behind his back */}
        <g className="iv-vb iv-leg-a" style={piv(300, 430)}>
          <Tube d="M300 430 L268 336 L262 244" w={36} fill={SUIT_D} />
          <Boot x={262} y={236} rot={-5} />
        </g>
        <g className="iv-vb iv-leg-b" style={piv(340, 430)}>
          <Tube d="M340 430 L372 336 L378 240" w={36} fill={SUIT_D} />
          <Boot x={378} y={232} rot={6} />
        </g>

        {/* torso */}
        <path
          d="M232 332 Q232 306 260 302 L380 302 Q408 306 408 332 L368 452 Q320 474 272 452 Z"
          fill={SUIT}
          stroke={OUT}
          strokeWidth={4.5}
          strokeLinejoin="round"
        />
        <path d="M240 340 Q320 372 400 340 L368 452 Q320 474 272 452Z" fill={SUIT_D} opacity={0.55} />
        <path d="M262 306 L282 420 M378 306 L358 420" stroke={DARK} strokeWidth={14} strokeLinecap="round" />
        <path d="M279 384 H361" stroke={DARK} strokeWidth={9} strokeLinecap="round" />
        <rect x={307} y={372} width={26} height={24} rx={5} fill="#e2e8f0" stroke={OUT} strokeWidth={3.5} />
        <path d="M288 300 L320 348 L352 300" fill={PINK} stroke={OUT} strokeWidth={4} strokeLinejoin="round" />

        {/* hip pouch with the pull handle */}
        <rect x={346} y={420} width={46} height={34} rx={10} fill={PINK} stroke={OUT} strokeWidth={4.5} />

        {/* pilot chute (flies out when pulled) */}
        <g className="iv-vb iv-story iv-pilot" style={piv(372, 440)}>
          <path d="M372 440 Q470 330 462 172" fill="none" stroke={OUT} strokeWidth={3.5} strokeLinecap="round" />
          <path d="M436 176 L462 172 L488 176" fill="none" stroke={OUT} strokeWidth={2.5} />
          <path d="M432 178 Q462 118 492 178 Q462 164 432 178Z" fill="#f97316" stroke={OUT} strokeWidth={4.5} strokeLinejoin="round" />
        </g>

        {/* pull handle */}
        <g className="iv-vb iv-story iv-handle" style={piv(372, 442)}>
          <rect x={358} y={432} width={28} height={20} rx={8} fill="#fb923c" stroke={OUT} strokeWidth={4.5} />
          <rect x={366} y={438} width={12} height={8} rx={3} fill="#431407" />
        </g>

        {/* left arm: waves */}
        <g className="iv-vb iv-wave-a" style={piv(250, 332)}>
          <Tube d="M250 332 L150 372 L84 330" w={36} fill={SUIT} />
          <Tube d="M111 348 L102 342" w={40} fill={PINK} />
          <g className="iv-vb iv-hand-wave" style={piv(84, 330)}>
            <Hand x={84} y={330} rot={-57} side="left" />
          </g>
        </g>

        {/* right arm: reaches down to the hip and pulls */}
        <g className="iv-vb iv-wave-b" style={piv(395, 335)}>
          <g className="iv-vb iv-story iv-up-pull" style={piv(395, 335)}>
            <Tube d="M395 335 L490 365" w={36} fill={SUIT} />
            <g className="iv-vb iv-story iv-fore-pull" style={piv(490, 365)}>
              <Tube d="M490 365 L565 325" w={36} fill={SUIT} />
              <Tube d="M544 336 L553 331" w={40} fill={PINK} />
              <g className="iv-vb iv-story iv-hand-open">
                <g className="iv-vb iv-hand-wave" style={piv(565, 325)}>
                  <Hand x={565} y={325} rot={62} side="right" />
                </g>
              </g>
              <g className="iv-vb iv-story iv-hand-fist">
                <Hand x={565} y={325} rot={62} side="right" fist />
              </g>
            </g>
          </g>
        </g>

        {/* head */}
        <g transform="translate(320 262) scale(1.12)">
          <Head />
        </g>
      </g>
    </g>
  )
}

function Canopy() {
  const xs = [100, 188, 276, 364, 452, 540]
  const colors = ['#6366f1', '#f8fafc', '#d946ef', '#f8fafc', '#6366f1']
  const dome =
    'M100 168 C96 60 220 14 320 14 C420 14 544 60 540 168 Q496 146 452 168 Q408 146 364 168 Q320 146 276 168 Q232 146 188 168 Q144 146 100 168Z'
  return (
    <g>
      <defs>
        <clipPath id="iv-dome">
          <path d={dome} />
        </clipPath>
        <linearGradient id="iv-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#000" stopOpacity="0.24" />
        </linearGradient>
      </defs>
      <path
        d="M100 168 L298 332 M188 168 L298 332 M276 168 L298 332 M364 168 L342 332 M452 168 L342 332 M540 168 L342 332"
        stroke="#1e293b"
        strokeOpacity={0.6}
        strokeWidth={2.2}
        fill="none"
      />
      <g clipPath="url(#iv-dome)">
        {colors.map((c, i) => (
          <path key={i} d={`M320 -70 L${xs[i]} 200 L${xs[i + 1]} 200Z`} fill={c} />
        ))}
        <rect x={80} y={0} width={480} height={200} fill="url(#iv-shade)" />
        <ellipse cx={230} cy={60} rx={60} ry={16} fill="#fff" opacity={0.3} transform="rotate(-22 230 60)" />
      </g>
      <path d={dome} fill="none" stroke={OUT} strokeWidth={4.5} strokeLinejoin="round" />
    </g>
  )
}

function HangingPose() {
  return (
    <g className="iv-vb iv-story iv-sway" style={piv(320, 30)}>
      <g className="iv-vb iv-story iv-collapse" style={piv(320, 330)}>
        <g className="iv-vb iv-story iv-canopy" style={piv(320, 330)}>
          <Canopy />
        </g>
      </g>

      <g className="iv-vb iv-story iv-hg-in" style={piv(320, 330)}>
        <g className="iv-vb iv-story iv-land" style={piv(320, 514)}>
          {/* legs */}
          <g className="iv-vb iv-story iv-dangle-a" style={piv(304, 404)}>
            <Tube d="M304 404 L301 446 L302 474" w={26} fill={SUIT_D} />
            <Boot x={302} y={472} rot={0} down />
          </g>
          <g className="iv-vb iv-story iv-dangle-b" style={piv(336, 404)}>
            <Tube d="M336 404 L339 446 L338 474" w={26} fill={SUIT_D} />
            <Boot x={338} y={472} rot={0} down />
          </g>

          {/* torso + harness */}
          <rect x={284} y={328} width={72} height={86} rx={28} fill={SUIT} stroke={OUT} strokeWidth={4.5} />
          <path d="M298 330 V410 M342 330 V410" stroke={DARK} strokeWidth={10} />
          <path d="M298 362 H342" stroke={DARK} strokeWidth={7} />
          <rect x={313} y={352} width={14} height={18} rx={3} fill="#e2e8f0" stroke={OUT} strokeWidth={3} />
          <rect x={284} y={398} width={72} height={10} fill={PINK} opacity={0.9} />

          {/* arms up, holding the steering lines */}
          <g className="iv-vb iv-story iv-armL-up" style={piv(291, 346)}>
            <Tube d="M291 346 L252 328" w={26} fill={SUIT} />
            <g className="iv-vb iv-story iv-armL-fore" style={piv(252, 328)}>
              <Tube d="M252 328 L266 268" w={26} fill={SUIT} />
              <Tube d="M262 288 L264 281" w={30} fill={PINK} />
              <Hand x={266} y={280} rot={0} fist />
            </g>
          </g>
          <g className="iv-vb iv-story iv-armR-up" style={piv(349, 346)}>
            <Tube d="M349 346 L388 328" w={26} fill={SUIT} />
            <g className="iv-vb iv-story iv-armR-fore" style={piv(388, 328)}>
              <Tube d="M388 328 L374 268" w={26} fill={SUIT} />
              <Tube d="M378 288 L376 281" w={30} fill={PINK} />
              <Hand x={374} y={280} rot={0} fist />
            </g>
          </g>

          <g transform="translate(320 283) scale(0.78)">
            <Head />
          </g>
        </g>
      </g>
    </g>
  )
}

export default function Character() {
  return (
    <svg viewBox="0 0 640 640" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id="iv-lens" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde68a" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#f59e0b" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ea580c" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <FreefallPose />
      <HangingPose />
    </svg>
  )
}