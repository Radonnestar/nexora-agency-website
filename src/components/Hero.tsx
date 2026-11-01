import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import CountUp from './CountUp'

const stats = [
  { to: 120, suffix: '+', label: 'Projects delivered' },
  { to: 60, suffix: '+', label: 'Happy clients' },
  { to: 8, suffix: ' yrs', label: 'Of experience' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-fuchsia-600/20 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-4 text-center"
      >
        <motion.span
          variants={item}
          className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-indigo-300"
        >
          Web · Branding · UI/UX · Marketing
        </motion.span>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-7xl"
        >
          We build digital products that{' '}
          <span className="bg-linear-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            grow your brand
          </span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          Nexora is a digital agency that turns ideas into fast, beautiful websites,
          memorable brands and marketing that actually converts.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-7 py-3 font-medium text-white shadow-lg shadow-indigo-500/30"
          >
            Start a project
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-white/15 px-7 py-3 font-medium text-white hover:bg-white/10"
          >
            View our work
          </motion.a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold text-white md:text-4xl">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </dt>
              <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}