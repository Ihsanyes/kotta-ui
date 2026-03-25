function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%),linear-gradient(180deg,#090909_0%,#050505_55%,#020202_100%)]" />
      <div className="animate-kotta-glow absolute -top-52 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[170px]" />
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(120deg,rgba(255,255,255,0.2)_0_1px,transparent_1px_14px)]" />
    </div>
  )
}

export default AmbientBackground
