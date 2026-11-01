const links = ['Services', 'Portfolio', 'Pricing', 'About', 'Contact']

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <a href="#" className="text-xl font-bold text-white">
          Nexora<span className="text-indigo-400">.</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500">
          © {year} Nexora. A fictional agency for portfolio purposes.
        </p>
      </div>
    </footer>
  )
}