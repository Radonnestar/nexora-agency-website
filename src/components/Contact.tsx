import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

type FormValues = {
  name: string
  email: string
  message: string
}

type Errors = Partial<FormValues>

const emptyForm: FormValues = { name: '', email: '', message: '' }

function validate(values: FormValues): Errors {
  const errors: Errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Your message should be at least 10 characters.'
  }

  return errors
}

function fieldClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 ${
    hasError ? 'border-red-400' : 'border-white/10'
  }`
}

const info = [
  { icon: Mail, label: 'hello@nexora.example' },
  { icon: Phone, label: '+1 (555) 012-3456' },
  { icon: MapPin, label: '123 Creative Street, Dhaka' },
]

export default function Contact() {
  const [values, setValues] = useState<FormValues>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length === 0) {
      setSent(true)
      setValues(emptyForm)
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-6">
            {info.map((item) => (
              <li key={item.label} className="flex items-center gap-4 text-slate-300">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
                  <item.icon size={22} />
                </span>
                {item.label}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle size={48} className="mx-auto text-emerald-400" />
                <h3 className="mt-4 text-xl font-semibold text-white">Message sent!</h3>
                <p className="mt-2 text-slate-400">
                  Thanks for reaching out. We'll reply very soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-white/15 px-6 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={fieldClass(!!errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    className={fieldClass(!!errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-indigo-500 py-3 font-medium text-white transition hover:bg-indigo-400"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}