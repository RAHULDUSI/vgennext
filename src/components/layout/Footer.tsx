import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#03050a]">
      <div className="container-x grid gap-12 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-bold">VGen<span className="text-blue-500">Next</span></Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Technology talent, application engineering and intelligent AI systems for what’s next.</p>
          <div className="mt-6 flex gap-2">
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2.5 text-slate-400 hover:text-white"><Linkedin size={16} /></a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/industries" className="hover:text-white">Industries</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <Link to="/insights" className="hover:text-white">Insights</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Services</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {services.map(s => <Link key={s.path} to={s.path} className="hover:text-white">{s.shortTitle}</Link>)}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Austin, Texas</p>
          <div className="mt-4 space-y-4 text-sm text-slate-400">
            <p className="flex gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-blue-400" />5900 Balcones Drive<br />Ste 100<br />Austin, TX 78731<br />United States</p>
            <p className="flex gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-blue-400" />hello@vgennext.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col justify-between gap-3 py-5 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} VGenNext. All rights reserved.</p>
          <div className="flex gap-5"><Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link><Link to="/terms" className="hover:text-slate-300">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  )
}
