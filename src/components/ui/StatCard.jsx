function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-lg">
      <p className="text-2xl font-semibold text-[#D4AF37]">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{label}</p>
    </div>
  )
}

export default StatCard
