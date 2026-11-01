import { useCallback, useEffect, useRef } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import Character from './IntroCharacter'
import { Clouds, Floor, Meadow, Moon, ShootingStars, Stars } from './IntroScenery'
import './intro.css'

const LAND = 11 // seconds until he touches down (8s freefall + 3s under canopy)
const OPEN_AT = LAND + 1.5 // seconds until the page starts opening

type IntroProps = {
  onOpen: () => void
  onDone: () => void
}

export default function Intro({ onOpen, onDone }: IntroProps) {
  const radius = useMotionValue(-10)
  const mask = useTransform(
    radius,
    (r) =>
      `radial-gradient(circle at 50% calc(50% + var(--s) * 0.3), transparent ${r}%, #000 ${r + 6}%)`,
  )
  const opening = useRef(false)

  const open = useCallback(() => {
    if (opening.current) return
    opening.current = true
    onOpen()
    animate(radius, 115, { duration: 2, ease: 'easeInOut', onComplete: onDone })
  }, [onOpen, onDone, radius])

  useEffect(() => {
    const timer = setTimeout(open, OPEN_AT * 1000)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  return (
    <motion.div
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      className="fixed inset-0 z-[100] overflow-hidden bg-slate-950 [--s:min(110vw,100vh)]"
    >
      {/* night sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #020617 0%, #0b1030 30%, #1e1b4b 62%, #312e81 82%, #5b3f9f 100%)',
        }}
      />
      <Stars />
      <Moon />
      <ShootingStars />

      <Floor />
      <Clouds />
      <Meadow delay={8.2} duration={LAND - 8.2} />

      {/* the skydiver, with a soft indigo glow so he stands out from the dark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="iv-shake relative" style={{ width: 'var(--s)', height: 'var(--s)' }}>
          <div
            className="absolute inset-[12%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.34), rgba(129,140,248,0) 65%)' }}
          />
          <Character />
        </div>
      </div>

      {/* flash when the canopy snaps open */}
      <div className="iv-flash pointer-events-none absolute inset-0 bg-indigo-100" />

      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[14vh] text-center"
        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: LAND + 0.3, duration: 0.9 }}
      >
        <p className="text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(129,140,248,0.75)] md:text-8xl">
          Nexora<span className="text-fuchsia-400">.</span>
        </p>
        <p className="mt-3 text-sm tracking-[0.4em] text-indigo-200 uppercase">Digital Agency</p>
      </motion.div>

      <button
        onClick={open}
        className="absolute right-5 bottom-5 z-10 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20"
      >
        Skip intro
      </button>
    </motion.div>
  )
}