import { services } from '../data/services'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeading from '../components/ui/SectionHeading'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return <main className="pt-[78px]">
    <section className="border-b border-white/[0.06] py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_360px]">
        <div><p className="text-xs font-semibold uppercase tracking-[.28em] text-blue-400">Services</p><h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Technology and talent for a more intelligent tomorrow.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Choose the capability you need. VGenNext can support your organization from specialized talent through product engineering and autonomous AI.</p></div>
        <div className="glass rounded-3xl p-7"><p className="text-sm font-semibold">Not sure what you need?</p><p className="mt-2 text-sm leading-6 text-slate-500">Use VGenNext AI to describe your business challenge and discover the right service.</p><button data-chat-open className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">Talk to VGenNext AI <ArrowRight size={15} /></button></div>
      </div>
    </section>
    <section className="py-20"><div className="container-x grid gap-4 md:grid-cols-2">{services.map(s => <ServiceCard key={s.path} service={s} />)}</div></section>
  </main>
}
