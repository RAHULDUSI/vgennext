import { useState } from 'react'
import { ChevronDown, Menu, MessageCircle, X, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { industries } from '../../data/industries'
import { navigation } from '../../data/navigation'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#05070d]/75 backdrop-blur-2xl">
      <div className="container-x flex h-[78px] items-center justify-between">
        <Link to="/" className="flex flex-col leading-none" onClick={closeMobile}>
          <span className="text-[25px] font-bold tracking-[-1.2px]">VGen<span className="text-blue-500">Next</span></span>
          <span className="mt-1 text-[8px] tracking-[1.5px] text-slate-500">TECHNOLOGY. TALENT. INTELLIGENCE.</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navigation.slice(0, 2).map(item => (
            <Link key={item.path} to={item.path} className={`nav-link text-[13px] ${location.pathname === item.path ? 'active' : ''}`}>{item.label}</Link>
          ))}

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="nav-link flex items-center gap-1 text-[13px]">Services <ChevronDown size={14} className={servicesOpen ? 'rotate-180 transition' : 'transition'} /></button>
            {servicesOpen && (
              <div className="glass absolute left-1/2 top-full mt-4 w-[360px] -translate-x-1/2 rounded-2xl p-3">
                <div className="px-3 pb-2 pt-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-blue-400">Our capabilities</p>
                  <p className="mt-1 text-xs text-slate-500">People, products and intelligence for what’s next.</p>
                </div>
                {services.map(service => {
                  const Icon = service.icon
                  return (
                    <Link key={service.path} to={service.path} className="group flex gap-3 rounded-xl p-3 hover:bg-white/[0.05]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"><Icon size={18} className="text-blue-400" /></div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white">{service.shortTitle}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{service.description}</p>
                      </div>
                      <ArrowUpRight size={14} className="ml-auto mt-1 shrink-0 text-slate-600 group-hover:text-blue-400" />
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="nav-link flex items-center gap-1 text-[13px]">Industries <ChevronDown size={14} className={industriesOpen ? 'rotate-180 transition' : 'transition'} /></button>
            {industriesOpen && (
              <div className="glass absolute left-1/2 top-full mt-4 w-[430px] -translate-x-1/2 rounded-2xl p-4">
                <p className="px-2 pb-3 text-[10px] font-semibold uppercase tracking-[.25em] text-blue-400">Industries</p>
                <div className="grid grid-cols-2 gap-1">
                  {industries.map(industry => {
                    const Icon = industry.icon
                    return <Link key={industry.path} to={industry.path} className="flex items-center gap-3 rounded-xl p-3 text-sm text-slate-300 hover:bg-white/[0.05] hover:text-white"><Icon size={17} className="text-blue-400" />{industry.name}</Link>
                  })}
                </div>
              </div>
            )}
          </div>

          {navigation.slice(4).map(item => (
            <Link key={item.path} to={item.path} className={`nav-link text-[13px] ${location.pathname === item.path ? 'active' : ''}`}>{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <button data-chat-open className="flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-xs font-medium text-blue-300 hover:bg-blue-500/15">
            <MessageCircle size={15} /> Talk to VGenNext AI
          </button>
          <Link to="/contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold shadow-lg shadow-blue-600/20">
            Get Started <ArrowUpRight size={14} />
          </Link>
        </div>

        <button className="rounded-lg border border-white/10 p-2 xl:hidden" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#05070d] px-5 py-5 xl:hidden">
          <div className="container-x flex flex-col gap-1">
            {navigation.slice(0, 2).map(item => <Link key={item.path} to={item.path} onClick={closeMobile} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{item.label}</Link>)}
            <div className="border-y border-white/[0.06] py-2">
              <p className="px-3 py-2 text-[10px] uppercase tracking-[.25em] text-slate-500">Services</p>
              {services.map(service => <Link key={service.path} to={service.path} onClick={closeMobile} className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5">{service.shortTitle}</Link>)}
            </div>
            <div className="border-b border-white/[0.06] py-2">
              <p className="px-3 py-2 text-[10px] uppercase tracking-[.25em] text-slate-500">Industries</p>
              {industries.map(industry => <Link key={industry.path} to={industry.path} onClick={closeMobile} className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5">{industry.name}</Link>)}
            </div>
            {navigation.slice(4).map(item => <Link key={item.path} to={item.path} onClick={closeMobile} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{item.label}</Link>)}
            <button data-chat-open onClick={closeMobile} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold"><MessageCircle size={16} /> Talk to VGenNext AI</button>
          </div>
        </div>
      )}
    </header>
  )
}
