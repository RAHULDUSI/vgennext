import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ children, to, onClick, variant = 'primary', className = '' }: Props) {
  const styles = variant === 'primary'
    ? 'bg-white text-slate-950 hover:bg-slate-200'
    : 'border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07]'

  const content = (
    <>
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </>
  )

  if (to) {
    return <Link to={to} className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles} ${className}`}>{content}</Link>
  }

  return <button onClick={onClick} className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles} ${className}`}>{content}</button>
}
