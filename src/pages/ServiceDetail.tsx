import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Service } from '../types'

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon
  return <main className="pt-[78px]">
    <section className="relative overflow-hidden border-b border-white/[0.06] py-24">
      <div className="absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div><p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-400">{service.eyebrow}</p><h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{service.headline}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{service.description}</p><div className="mt-8 flex gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">Discuss a project <ArrowRight size={16} /></Link><Link to="/services" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold">All services</Link></div></div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} className="glass relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl">
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-500/10 shadow-[0_0_80px_rgba(37,99,235,.18)]"><Icon size={56} className="text-blue-300" /></div>
        </motion.div>
      </div>
    </section>
    <section className="py-20"><div className="container-x grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-blue-400">Capabilities</p><h2 className="mt-3 text-3xl font-bold">Built around your requirements.</h2></div><div className="grid gap-3 sm:grid-cols-2">{service.capabilities.map(item => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><CheckCircle2 size={18} className="text-blue-400" /><p className="mt-4 font-medium">{item}</p></div>)}</div></div></section>
  </main>
}
