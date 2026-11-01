import { Code, Palette, LayoutTemplate, Megaphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Fast, secure and scalable websites and web apps built with modern tools.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Logos, color systems and brand guidelines that make you instantly recognizable.',
  },
  {
    icon: LayoutTemplate,
    title: 'UI/UX Design',
    description:
      'Research-driven interfaces that feel effortless and turn visitors into customers.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'SEO, social and paid campaigns that bring the right audience to your door.',
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything your brand needs online"
          description="From the first sketch to the final launch, we handle the whole journey."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.12}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <service.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}