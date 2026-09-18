import type { Industry } from '../types'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function IndustryDetail({ industry }: { industry: Industry }) {
  const Icon = industry.icon
  const solutions = ['Digital applications and portals', 'Data and AI-powered workflows', 'Integration and API engineering', 'Technology staffing and specialized teams', 'Intelligent automation and AI agents', 'Modernization and cloud engineering']
  return <main className="pt-[78px]"><section className="border-b border-white/[0.06] py-24"><div className="container-x grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-center"><div><p className="text-xs uppercase tracking-[.3em] text-blue-400">Industries</p><h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{industry.name}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{industry.description}</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">Discuss your needs <ArrowRight size={16} /></Link></div><div className="glass flex h-72 items-center justify-center rounded-3xl"><Icon size={90} className="text-blue-400" /></div></div></section><section className="py-20"><div className="container-x"><p className="text-xs uppercase tracking-[.28em] text-blue-400">Where we can help</p><h2 className="mt-3 text-3xl font-bold">Technology aligned to the way you operate.</h2><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{solutions.map(s => <div key={s} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><CheckCircle2 size={18} className="text-blue-400" /><p className="mt-4 text-sm font-medium">{s}</p></div>)}</div></div></section></main>
}
