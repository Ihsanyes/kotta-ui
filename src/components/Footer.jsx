import { socialLinks } from '@/data/socialLinks'

function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <img src="/kotta-logo.png" alt="KOTTA logo" className="h-9 w-auto" />
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

export default Footer
