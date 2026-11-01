import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProjectArt from './ProjectArt'

const categories = ['All', 'Web', 'Branding', 'UI/UX', 'Marketing'] as const

type Filter = (typeof categories)[number]
type Category = Exclude<Filter, 'All'>

type Project = {
  title: string
  category: Category
  description: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Lumen Finance',
    category: 'Web',
    description: 'A fintech dashboard with real-time charts.',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Oakline Coffee',
    category: 'Branding',
    description: 'Full visual identity for a specialty roaster.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Pulse Fitness App',
    category: 'UI/UX',
    description: 'Mobile app design with a 40% faster onboarding.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Brightside Clinic',
    category: 'Web',
    description: 'A booking-focused website for a dental clinic.',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Velvet & Co.',
    category: 'Marketing',
    description: 'Social campaign that tripled monthly leads.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Atlas Logistics',
    category: 'Branding',
    description: 'Rebrand and guidelines for a shipping company.',
    gradient: 'from-fuchsia-500 to-violet-600',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('All')

  const visible =
    active === 'All'
      ? projects
      : projects.filter((project) => project.category === active)

  return (
    <section id="portfolio" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work we're proud of"
          description="A selection of recent projects across web, branding and design."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? 'text-white'
                  : 'border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {active === category && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-indigo-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -24 }}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="overflow-hidden">
                  <div
                    className={`relative h-48 bg-linear-to-br ${project.gradient} transition duration-500 group-hover:scale-110`}
                  >
                    <ProjectArt title={project.title} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                      {project.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition group-hover:text-white"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}