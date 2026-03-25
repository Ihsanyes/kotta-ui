import { useState } from 'react'
import { navItems } from '@/data/navItems'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" onClick={closeMenu} className="inline-flex items-center">
          <img src="/kotta-logo.png" alt="KOTTA logo" className="h-9 w-auto sm:h-10" />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.22em] text-white/80 transition duration-300 hover:text-[#D4AF37]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block border-b border-white/10 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white/85 transition hover:text-[#D4AF37]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Navbar
