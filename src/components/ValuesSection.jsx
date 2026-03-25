import SectionEyebrow from '@/components/ui/SectionEyebrow'
import { values } from '@/data/values'

const valueIcons = {
  reliable: ReliableIcon,
  scalable: ScaleIcon,
  secure: SecureIcon,
  simple: SimplicityIcon,
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
          {values.map((value) => {
            const Icon = valueIcons[value.icon]

            return (
              <article
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/55 hover:bg-white/[0.07]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {value.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
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

export default ValuesSection
