import { productFeatures } from '@/data/productFeatures'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

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

export default ProductsSection
