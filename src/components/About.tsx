import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { Target, Lightbulb, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Avatar from './Avatar'
import type { AvatarLook } from './Avatar'

const values = [
  {
    icon: Target,
    title: 'Results first',
    description: 'Every design and line of code ties back to your business goals.',
  },
  {
    icon: Lightbulb,
    title: 'Creative thinking',
    description: 'We look for the fresh idea that makes your brand stand apart.',
  },
  {
    icon: HeartHandshake,
    title: 'True partnership',
    description: 'Clear communication and honest timelines, from kickoff to launch.',
  },
]

type Member = {
  name: string
  role: string
  gradient: string
  look: AvatarLook
}

const team: Member[] = [
  {
    name: 'Ayesha Rahman',
    role: 'Founder & Creative Director',
    gradient: 'from-indigo-500 to-purple-600',
    look: { skin: '#e0ac69', hair: '#1f1235', shirt: '#4f46e5', style: 'long' },
  },
  {
    name: 'Daniel Brooks',
    role: 'Lead Developer',
    gradient: 'from-sky-500 to-blue-600',
    look: { skin: '#f1c9a0', hair: '#3b2a20', shirt: '#0ea5e9', style: 'short', beard: true, glasses: true },
  },
  {
    name: 'Maya Chen',
    role: 'UI/UX Designer',
    gradient: 'from-pink-500 to-rose-600',
    look: { skin: '#f3d2b3', hair: '#111827', shirt: '#d946ef', style: 'bun' },
  },
  {
    name: 'Omar Haddad',
    role: 'Marketing Strategist',
    gradient: 'from-emerald-500 to-teal-600',
    look: { skin: '#a8714a', hair: '#1c1917', shirt: '#10b981', style: 'curly', beard: true },
  },
  {
    name: 'Tareq Abdullah Prio',
    role: 'Project Manager',
    gradient: 'from-amber-500 to-orange-600',
    look: { skin: '#c68a5c', hair: '#171412', shirt: '#f59e0b', style: 'short' },
  },
]

const viewport = { once: true, amount: 0.25 } as const

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
}

const paragraph: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const valuesContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

const valueCard: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const teamContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const member: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About us"
          title="A small team with big ideas"
          description="We're designers, developers and marketers who love building things that work."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-5 text-slate-400"
          >
            <motion.p variants={paragraph}>
              Nexora started with a simple belief: great design and solid engineering
              belong together. Too many businesses end up with a site that looks good
              but loads slowly, or works well but looks forgettable.
            </motion.p>
            <motion.p variants={paragraph}>
              So we built an agency that does both. Over the years we've helped
              startups, local shops and growing companies launch websites and brands
              that look sharp, run fast and bring in customers.
            </motion.p>
          </motion.div>

          <motion.div
            variants={valuesContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={valueCard}
                whileHover={{ x: -8 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-indigo-400/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <value.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{value.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={teamContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-12"
        >
          {team.map((person) => (
            <motion.div key={person.name} variants={member} className="w-36 text-center sm:w-44">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                role="img"
                aria-label={`Portrait of ${person.name}`}
                className={`mx-auto h-28 w-28 overflow-hidden rounded-full bg-linear-to-br ${person.gradient} ring-4 ring-white/10`}
              >
                <Avatar {...person.look} />
              </motion.div>
              <h3 className="mt-4 font-semibold text-white">{person.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{person.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}