import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
  showArrow?: boolean
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  showArrow = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-blue-500/40',

    secondary:
      'border border-white/20 bg-transparent text-white hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10',

    ghost:
      'bg-transparent text-blue-400 hover:text-blue-300',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={17}
          strokeWidth={1.8}
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  )
}
