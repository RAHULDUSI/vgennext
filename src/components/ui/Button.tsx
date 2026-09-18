import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300'

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] hover:shadow-blue-500/30',

    secondary:
      'border border-white/20 bg-transparent text-white hover:border-blue-400/50 hover:bg-blue-500/10',

    ghost:
      'bg-transparent text-blue-400 hover:text-blue-300',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
