import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$499',
    description: 'For small businesses getting online.',
    features: [
      '5-page responsive website',
      'Basic SEO setup',
      'Contact form',
      '2 rounds of revisions',
      '7-day delivery',
    ],
  },
  {
    name: 'Growth',
    price: '$1,499',
    description: 'For brands ready to stand out and scale.',
    popular: true,
    features: [
      '10-page custom website',
      'Logo and brand kit',
      'Advanced SEO and analytics',
      '4 rounds of revisions',
      '14-day delivery',
    ],
  },
  {
    name: 'Scale',
    price: '$3,499',
    description: 'For teams that need a complete digital presence.',
    features: [
      'Custom web application',
      'Full branding and UI/UX design',
      'Marketing campaign setup',
      'Unlimited revisions',
      'Priority support',
    ],
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
}

const listItem: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Pick a plan that fits your goals. Need something custom? Just ask."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={card}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-indigo-500 bg-indigo-500/10 shadow-xl shadow-indigo-500/20 md:scale-105'
                  : 'border-white/10 bg-white/5 hover:border-indigo-400/40'
              }`}
            >
              {plan.popular && (
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white"
                >
                  Most popular
                </motion.span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <p className="mt-6 text-4xl font-bold text-white">
                {plan.price}
                <span className="text-sm font-normal text-slate-400"> / project</span>
              </p>

              <motion.ul variants={listContainer} className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={listItem}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center font-medium transition ${
                  plan.popular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'border border-white/15 text-white hover:bg-white/10'
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}