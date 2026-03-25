const baseClasses =
  'inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300'

const variantClasses = {
  primary: 'bg-[#D4AF37] text-black',
  secondary:
    'border border-white/30 text-white hover:border-[#D4AF37]/80 hover:text-[#D4AF37]',
}

function Button({
  children,
  className = '',
  href,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const resolvedVariant = variantClasses[variant] ?? variantClasses.primary
  const finalClassName = `${baseClasses} ${resolvedVariant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={finalClassName} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
