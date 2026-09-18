import { ArrowRight, BriefcaseBusiness, Code2, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const areas = [
  ['Engineering', 'Build modern software and scalable systems.', Code2],
  ['AI & Data', 'Work on intelligent products and agentic systems.', Sparkles],
  ['Talent Solutions', 'Help organizations find exceptional technology professionals.', Users],
  ['Business Operations', 'Help a growing technology company scale.', BriefcaseBusiness],
] as const

export default function Careers() {
  return <main className="pt-[78px]"><section className="border-b border-white/[0.06] py-24"><div className="container-x"><p className="text-xs uppercase tracking-[.3em] text-blue-400">Careers</p><h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">Build what’s next with us.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">We’re building a company where technology, curiosity and practical problem solving come together.</p><a href="mailto:careers@vgennext.com?subject=Career%20Interest" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">Send your profile <ArrowRight size={16} /></a></div></section><section className="py-20"><div className="container-x grid gap-4 md:grid-cols-2">{areas.map(([title,text,Icon]) => <div key={title} className="glass rounded-3xl p-7"><Icon size={24} className="text-blue-400" /><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></section></main>
}
