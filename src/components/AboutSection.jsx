import SectionEyebrow from '@/components/ui/SectionEyebrow'

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

export default AboutSection
