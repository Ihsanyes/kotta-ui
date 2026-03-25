import Button from '@/components/ui/Button'
import StatCard from '@/components/ui/StatCard'

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
            <Button
              href="#contact"
              variant="primary"
              className="shadow-[0_0_34px_rgba(212,175,55,0.27)] hover:-translate-y-0.5 hover:bg-[#e3c364]"
            >
              Get Started
            </Button>
            <Button href="#products" variant="secondary">
              Request Demo
            </Button>
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

export default HeroSection
