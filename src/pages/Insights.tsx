import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface InsightPost {
  title: string
  tag: string
  text: string
  icon: LucideIcon
}

const posts: InsightPost[] = [
  {
    title: 'The Rise of Agentic AI in Enterprise Workflows',
    tag: 'Agentic AI',
    text: 'How autonomous systems can move beyond conversational experiences and become intelligent digital workers.',
    icon: Bot,
  },
  {
    title: 'Designing AI Systems That Create Business Value',
    tag: 'AI',
    text: 'Practical considerations for integrating artificial intelligence into products, workflows, and business operations.',
    icon: BrainCircuit,
  },
  {
    title: 'Modern Application Architecture for Growing Businesses',
    tag: 'Engineering',
    text: 'A look at scalable application foundations, cloud-ready architecture, and engineering practices for growing organizations.',
    icon: Code2,
  },
]

export default function Insights() {
  return (
    <main className="pt-[78px]">
      {/* Hero */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
            Insights
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Ideas for what&apos;s next.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Perspectives on software, artificial intelligence, talent,
            automation, and the technologies shaping tomorrow&apos;s
            businesses.
          </p>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20">
        <div className="container-x grid gap-4 lg:grid-cols-3">
          {posts.map((post) => {
            const Icon = post.icon

            return (
              <article
                key={post.title}
                className="glass rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-blue-400"
                  />
                </div>

                {/* Category */}
                <p className="mt-7 text-xs uppercase tracking-[0.2em] text-blue-400">
                  {post.tag}
                </p>

                {/* Title */}
                <h2 className="mt-3 text-xl font-semibold leading-7 text-white">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {post.text}
                </p>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Discuss this
                  <ArrowRight size={15} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
