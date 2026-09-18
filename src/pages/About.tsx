import { ArrowRight, Lightbulb, Target, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return <main className="pt-[78px]">
    <section className="border-b border-white/[0.06] py-24"><div className="container-x"><p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-400">About VGenNext</p><h1 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl">People, technology and intelligence working together.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">VGenNext is a technology and talent solutions company based in Austin, Texas. We help organizations build capable teams, modern applications and intelligent systems.</p></div></section>
    <section className="py-20"><div className="container-x grid gap-4 md:grid-cols-3">{[
      [Users2,'People','Specialized technology talent aligned to real business needs.'],
      [Lightbulb,'Technology','Modern engineering practices for products that scale.'],
      [Target,'Intelligence','AI and agentic automation designed around outcomes.'],
    ].map(([Icon,title,text]) => <div key={String(title)} className="glass rounded-3xl p-7"><Icon size={25} className="text-blue-400" /><h2 className="mt-6 text-xl font-semibold">{String(title)}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{String(text)}</p></div>)}</div></section>
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-20"><div className="container-x flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[.28em] text-blue-400">Austin, Texas</p><h2 className="mt-3 text-3xl font-bold">Built in Austin. Connected to opportunity.</h2><p className="mt-3 max-w-2xl text-slate-400">5900 Balcones Drive, Ste 100, Austin, TX 78731.</p></div><Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">Start a conversation <ArrowRight size={16} /></Link></div></section>
  </main>
}
