import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our services" title="Everything you need for what’s next." description="From specialized talent to intelligent applications and AI agents, VGenNext brings the capabilities together." />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">View all services <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(service => <ServiceCard key={service.path} service={service} />)}
        </div>
      </div>
    </section>
  )
}
