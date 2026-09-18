import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../../data/industries'
import SectionHeading from '../ui/SectionHeading'

export default function IndustriesPreview() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.012] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Industries we serve" title="Technology built around your business." description="Domain-aware teams and modern technology solutions across industries." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(industry => {
            const Icon = industry.icon
            return <Link key={industry.path} to={industry.path} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#080d17] p-5 transition hover:border-blue-400/25 hover:bg-blue-500/[0.04]"><Icon size={22} className="text-blue-400" /><span className="flex-1 text-sm font-medium text-slate-200">{industry.name}</span><ArrowUpRight size={15} className="text-slate-600 group-hover:text-blue-400" /></Link>
          })}
        </div>
      </div>
    </section>
  )
}
