import { ArrowRight, Bot, BrainCircuit, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  ['The Rise of Agentic AI in Enterprise Workflows', 'Agentic AI', 'How autonomous systems can move beyond conversational experiences.', Bot],
  ['Designing AI Systems That Create Business Value', 'AI', 'Practical considerations for integrating AI into products and operations.', BrainCircuit],
  ['Modern Application Architecture for Growing Businesses', 'Engineering', 'A look at scalable application foundations and engineering practices.', Code2],
]

export default function Insights() {
  return <main className="pt-[78px]"><section className="border-b border-white/[0.06] py-24"><div className="container-x"><p className="text-xs uppercase tracking-[.3em] text-blue-400">Insights</p><h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Ideas for what’s next.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Perspectives on software, AI, talent and intelligent automation.</p></div></section><section className="py-20"><div className="container-x grid gap-4 lg:grid-cols-3">{posts.map(([title,tag,text,Icon]) => <article key={title} className="glass rounded-3xl p-7"><Icon size={25} className="text-blue-400" /><p className="mt-7 text-xs uppercase tracking-[.2em] text-blue-400">{tag}</p><h2 className="mt-3 text-xl font-semibold leading-7">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-400">Discuss this <ArrowRight size={15} /></Link></article>)}</div></section></main>
}
