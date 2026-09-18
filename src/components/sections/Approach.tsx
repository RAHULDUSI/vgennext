import { Bot, Boxes, BrainCircuit, Users } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  { n: '01', title: 'Build the Team', text: 'Technology staffing and specialized talent.', icon: Users },
  { n: '02', title: 'Build the Product', text: 'Application development and digital engineering.', icon: Boxes },
  { n: '03', title: 'Build Intelligence', text: 'AI-powered applications and enterprise intelligence.', icon: BrainCircuit },
  { n: '04', title: 'Automate the Work', text: 'Agentic AI and intelligent business automation.', icon: Bot },
]

export default function Approach() {
  return (
    <section className="border-y border-white/[0.06] bg-gradient-to-b from-blue-500/[0.045] to-transparent py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Our approach" title="From talent to technology to AI." description="One connected ecosystem to help you build, innovate and scale." />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return <div key={step.n} className="relative border-l border-white/10 pl-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10 text-sm font-bold text-blue-300">{step.n}</div>
              <Icon size={19} className="absolute right-4 top-4 text-slate-700 lg:right-0 lg:top-8" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{step.text}</p>
              {index < steps.length - 1 && <div className="absolute right-0 top-[-1px] hidden h-px w-12 bg-gradient-to-r from-blue-400/30 to-transparent lg:block translate-x-full" />}
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
