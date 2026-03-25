import Button from '@/components/ui/Button'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

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

          <Button
            href="mailto:hello@kotta.io"
            variant="primary"
            className="mt-8 hover:-translate-y-0.5 hover:bg-[#e4c86a]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
