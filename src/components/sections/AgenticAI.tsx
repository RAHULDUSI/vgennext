import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, CheckCircle2, CircleDot, Cog, FileSearch, GitBranch, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AgenticAI() {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-violet-400">Agentic AI</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">AI that doesn’t just answer.<br /><span className="text-gradient">It acts.</span></h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">VGenNext builds intelligent agents that understand objectives, reason through tasks, use tools, interact with enterprise systems and execute workflows.</p>
          <Link to="/services/agentic-ai" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold">Explore Agentic AI <ArrowRight size={16} /></Link>
        </div>

        <div className="glass grid-bg relative overflow-hidden rounded-3xl p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.14),transparent_50%)]" />
          <div className="relative grid grid-cols-3 gap-4">
            <Node icon={<CircleDot />} title="Business Goal" />
            <div />
            <Node icon={<Sparkles />} title="Reason" />
            <Node icon={<FileSearch />} title="Use Tools" />
            <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="flex aspect-square items-center justify-center rounded-3xl border border-blue-400/30 bg-blue-500/10 shadow-[0_0_70px_rgba(37,99,235,.18)]"><div className="text-center"><Bot size={36} className="mx-auto text-blue-300" /><p className="mt-2 text-xs font-semibold">AI Agent</p></div></motion.div>
            <Node icon={<GitBranch />} title="Plan" />
            <Node icon={<Cog />} title="Execute" />
            <div />
            <Node icon={<CheckCircle2 />} title="Learn & Report" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Node({ icon, title }: { icon: ReactNode; title: string }) {
  return <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-center"><div className="text-blue-400">{icon}</div><p className="mt-2 text-[11px] text-slate-400">{title}</p></div>
}
