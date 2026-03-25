import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const productFeatures = [
  'Inventory Management',
  'Billing & Invoicing',
  'Employee Login System',
  'Reports & Analytics',
]

const values = [
  {
    title: 'Reliable Systems',
    description:
      'Fault-tolerant platforms engineered for uptime, continuity, and predictable performance.',
    Icon: ReliableIcon,
  },
  {
    title: 'Scalable Architecture',
    description:
      'Strong technical foundations that evolve with your operations without expensive rewrites.',
    Icon: ScaleIcon,
  },
  {
    title: 'Secure & Fast',
    description:
      'Security-first implementation combined with efficient code paths and responsive interfaces.',
    Icon: SecureIcon,
  },
  {
    title: 'Simple User Experience',
    description:
      'Minimal workflows that reduce friction, improve adoption, and keep teams moving.',
    Icon: SimplicityIcon,
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'X', href: '#' },
]

function App() {
  return (
    <div className="relative isolate overflow-hidden bg-black text-white">
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ValuesSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" onClick={closeMenu} className="inline-flex items-center">
          <img src="/kotta-logo.svg" alt="KOTTA logo" className="h-9 w-auto sm:h-10" />
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

function HeroSection() {
  return (
    <section id="home" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D4AF37]">
            Fortress-Grade Digital Infrastructure
          </p>

          <h1 className="mt-8 text-5xl font-bold uppercase leading-[0.95] tracking-[0.24em] text-white sm:text-6xl lg:text-8xl">
            KOTTA
          </h1>
          <p className="mt-5 text-2xl font-semibold text-[#D4AF37] sm:text-3xl">
            Built to Last.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            We build powerful digital systems designed for reliability, scalability,
            and long-term impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_34px_rgba(212,175,55,0.27)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c364]"
            >
              Get Started
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#D4AF37]/80 hover:text-[#D4AF37]"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <StatCard value="99.98%" label="Platform Uptime" />
          <StatCard value="3x" label="Faster Operations" />
          <StatCard value="24/7" label="Continuous Support" />
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-4xl px-6 py-24 text-center md:px-10 md:py-28">
        <SectionEyebrow>About KOTTA</SectionEyebrow>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Strength, scalability, and simplicity in every layer.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          KOTTA designs software that feels like a digital fortress: stable under
          pressure, clean in structure, and ready to grow with your business.
          Every product is built with disciplined engineering and premium clarity.
        </p>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <SectionEyebrow>Products</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Workshop Management System
        </h2>

        <article className="mt-10 rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-8 shadow-[0_20px_65px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/60">
          <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            A unified command center for workshop operations, giving teams precision
            control over inventory, billing, workforce access, and business reporting.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {productFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm font-medium text-white/85"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <SectionEyebrow>Features & Values</SectionEyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Premium systems with performance at the core.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/55 hover:bg-white/[0.07]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37]">
                <value.Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="contact" className="border-b border-white/10">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/40 bg-[#090909] px-8 py-12 text-center shadow-[0_0_60px_rgba(212,175,55,0.16)] sm:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.28),transparent_70%)]" />

          <SectionEyebrow>Built for Long-Term Impact</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Start Building with KOTTA
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Partner with KOTTA to launch resilient software foundations designed for
            growth, speed, and operational confidence.
          </p>

          <a
            href="mailto:hello@kotta.io"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#e4c86a]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <img src="/kotta-logo.svg" alt="KOTTA logo" className="h-9 w-auto" />
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-white/50">
            KOTTA Labs
          </p>
          <a
            href="mailto:hello@kotta.io"
            className="mt-2 inline-flex text-sm text-white/75 transition hover:text-[#D4AF37]"
          >
            hello@kotta.io
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/50">Social</p>
          <div className="mt-3 flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SectionEyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
      {children}
    </p>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-lg">
      <p className="text-2xl font-semibold text-[#D4AF37]">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{label}</p>
    </div>
  )
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%),linear-gradient(180deg,#090909_0%,#050505_55%,#020202_100%)]" />
      <div className="animate-kotta-glow absolute -top-52 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[170px]" />
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(120deg,rgba(255,255,255,0.2)_0_1px,transparent_1px_14px)]" />
    </div>
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

function ReliableIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3L20 7V12C20 16.5 16.8 20.7 12 22C7.2 20.7 4 16.5 4 12V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.5 12.3L10.8 14.6L15.5 9.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M5 9.5H11V5H5V9.5Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13 19H19V13H13V19Z" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M7.3 16.7L16.8 7.2M11 7.2H16.8V13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SecureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 22C17 22 21 18 21 13C21 8 17 4 12 4C7 4 3 8 3 13C3 18 7 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 8V13L15.2 15.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M12 2V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function SimplicityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M5 19H19M7 15H17M9 11H15M11 7H13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M18.5 4.5L19.5 5.5L18.5 6.5L17.5 5.5L18.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default App
