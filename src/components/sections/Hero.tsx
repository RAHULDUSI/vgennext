import { motion } from 'framer-motion'
import { ArrowRight, Bot, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-white/[0.06] pt-[78px]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="hero-orb right-[-120px] top-[100px] hidden lg:block" />
      <div className="absolute right-[12%] top-[20%] h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="container-x relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.2em] text-blue-300">
            <Sparkles size={13} /> AI-powered technology solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-[78px]">
            Human Talent.
            <br /><span className="text-gradient">Artificial Intelligence.</span>
            <br />Real Impact.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            VGenNext brings together technology staffing, application development, AI and agentic automation to help organizations build faster, operate smarter and scale confidently.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Get Started</Button>
            <Button to="/services" variant="secondary">Explore Our Services</Button>
          </motion.div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6">
            <div><p className="text-xs font-semibold text-blue-400">PEOPLE</p><p className="mt-1 text-sm text-slate-300">Technology talent</p></div>
            <div><p className="text-xs font-semibold text-indigo-400">PRODUCTS</p><p className="mt-1 text-sm text-slate-300">Modern applications</p></div>
            <div><p className="text-xs font-semibold text-violet-400">INTELLIGENCE</p><p className="mt-1 text-sm text-slate-300">AI & agents</p></div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative hidden min-h-[500px] lg:block">
          <div className="absolute inset-8 rounded-[40px] border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.07] to-violet-500/[0.04] backdrop-blur-sm" />
          <div className="absolute left-12 top-16 h-[370px] w-[370px] rounded-full border border-blue-400/10" />
          <div className="absolute left-20 top-24 h-[290px] w-[290px] rounded-full border border-indigo-400/10" />
          <div className="absolute left-[130px] top-[150px] flex h-40 w-40 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 shadow-[0_0_100px_rgba(37,99,235,.25)]">
            <div className="text-center"><Bot size={38} className="mx-auto text-blue-300" /><p className="mt-2 text-xs uppercase tracking-[.2em] text-slate-300">VGenNext AI</p></div>
          </div>
          {[
            ['PEOPLE', 'Staffing', 'left-0 top-28'],
            ['PRODUCTS', 'Applications', 'right-0 top-20'],
            ['INTELLIGENCE', 'AI & Agents', 'right-4 bottom-28'],
            ['IMPACT', 'Business Outcomes', 'left-8 bottom-16'],
          ].map(([a,b,pos], i) => (
            <div key={a} className={`glass absolute ${pos} rounded-2xl px-5 py-4`}>
              <p className={`text-[9px] font-semibold tracking-[.2em] ${i === 1 ? 'text-indigo-300' : i === 2 ? 'text-violet-300' : 'text-blue-300'}`}>{a}</p>
              <p className="mt-1 text-sm font-medium">{b}</p>
            </div>
          ))}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[11px] text-slate-500"><MapPin size={14} className="text-blue-400" /> Austin, Texas</div>
        </motion.div>
      </div>
    </section>
  )
}
