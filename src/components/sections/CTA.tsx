import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(37,99,235,.2),transparent_50%)]" />
      <div className="container-x relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-400">Start a conversation</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Let’s build what’s next.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">Tell us what you’re trying to accomplish. Our team can help you find the right talent, technology or AI solution.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">Contact Us <ArrowRight size={16} /></Link>
          <button data-chat-open className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold"><MessageCircle size={16} /> Ask VGenNext AI</button>
        </div>
      </div>
    </section>
  )
}
