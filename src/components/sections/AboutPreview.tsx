import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass relative min-h-[360px] overflow-hidden rounded-3xl p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,.2),transparent_35%),linear-gradient(145deg,#0c1628,#060a12)]" />
          <div className="relative flex h-full flex-col justify-end">
            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-blue-300">Our home</p>
            <p className="mt-3 text-3xl font-bold">Austin, Texas.</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><MapPin size={15} /> 5900 Balcones Drive, Ste 100</p>
          </div>
        </div>
        <div className="self-center">
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-blue-400">About VGenNext</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A technology and talent company built for what’s next.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">We combine specialized technology talent, application engineering, artificial intelligence and agentic automation to help organizations solve complex problems and create new opportunities.</p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">Our story <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
