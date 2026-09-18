import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../types'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <Link to={service.path} className="group glass relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
            <Icon className="text-blue-400" size={22} />
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition group-hover:border-blue-400/40 group-hover:text-blue-300">
            <ArrowUpRight size={16} />
          </div>
        </div>
        <h3 className="mt-7 text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
        <span className="mt-6 inline-block text-sm font-medium text-blue-400">Explore service →</span>
      </div>
    </Link>
  )
}
