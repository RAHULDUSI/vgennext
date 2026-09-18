import { industries } from '../data/industries'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Industries() {
  return <main className="pt-[78px]"><section className="border-b border-white/[0.06] py-24"><div className="container-x"><p className="text-xs uppercase tracking-[.3em] text-blue-400">Industries</p><h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">Domain-aware technology. Real business context.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Explore how VGenNext capabilities can be applied across different operating environments.</p></div></section><section className="py-20"><div className="container-x grid gap-4 md:grid-cols-2">{industries.map(i => { const Icon=i.icon; return <Link key={i.path} to={i.path} className="group glass rounded-3xl p-7"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"><Icon className="text-blue-400" /></div><ArrowUpRight className="text-slate-600 group-hover:text-blue-400" /></div><h2 className="mt-7 text-xl font-semibold">{i.name}</h2><p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">{i.description}</p></Link>})}</div></section></main>
}
