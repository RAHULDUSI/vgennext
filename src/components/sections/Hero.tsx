import { motion } from 'framer-motion'
import { ArrowRight, Bot, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-white/[0.06] pt-[78px]">
      
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="hero-orb right-[-120px] top-[100px] hidden lg:block" />

      <div className="absolute right-[12%] top-[20%] h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Main Container */}
      <div className="container-x relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.2em] text-blue-300"
          >
            <Sparkles size={13} />
            AI-powered technology solutions
          </motion.div>


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-[78px]"
          >
            Human Talent.
            <br />

            <span className="text-gradient">
              Artificial Intelligence.
            </span>

            <br />

            Real Impact.
          </motion.h1>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            VGenNext brings together technology staffing, application
            development, AI and agentic automation to help organizations
            build faster, operate smarter and scale confidently.
          </motion.p>


          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >

            {/* PRIMARY BUTTON */}
            <Link
              to="/contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-4 text-sm font-semibold !text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40"
            >
              <span className="!text-white">
                Get Started
              </span>

              <ArrowRight
                size={17}
                className="!text-white"
              />
            </Link>


            {/* SECONDARY BUTTON */}
            <Link
              to="/services"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-4 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              <span className="!text-white">
                Explore Our Services
              </span>

              <ArrowRight
                size={17}
                className="!text-white"
              />
            </Link>

          </motion.div>


          {/* =====================================================
              TRUST / FOCUS INDICATORS
          ===================================================== */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6">

            <div>
              <p className="text-xs font-semibold text-blue-400">
                PEOPLE
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Technology talent
              </p>
            </div>


            <div>
              <p className="text-xs font-semibold text-indigo-400">
                PRODUCTS
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Modern applications
              </p>
            </div>


            <div>
              <p className="text-xs font-semibold text-violet-400">
                INTELLIGENCE
              </p>

              <p className="mt-1 text-sm text-slate-300">
                AI & agents
              </p>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT AI VISUAL
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden min-h-[500px] lg:block"
        >

          {/* Outer Glass Panel */}
          <div className="absolute inset-8 rounded-[40px] border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.07] to-violet-500/[0.04] backdrop-blur-sm" />


          {/* Circles */}
          <div className="absolute left-12 top-16 h-[370px] w-[370px] rounded-full border border-blue-400/10" />

          <div className="absolute left-20 top-24 h-[290px] w-[290px] rounded-full border border-indigo-400/10" />


          {/* AI Center */}
          <div className="absolute left-[130px] top-[150px] flex h-40 w-40 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 shadow-[0_0_100px_rgba(37,99,235,.25)]">

            <div className="text-center">

              <Bot
                size={38}
                className="mx-auto text-blue-300"
              />

              <p className="mt-2 text-xs uppercase tracking-[.2em] text-slate-300">
                VGenNext AI
              </p>

            </div>

          </div>


          {/* Floating Cards */}
          {[
            ['PEOPLE', 'Staffing', 'left-0 top-28'],
            ['PRODUCTS', 'Applications', 'right-0 top-20'],
            ['INTELLIGENCE', 'AI & Agents', 'right-4 bottom-28'],
            ['IMPACT', 'Business Outcomes', 'left-8 bottom-16'],
          ].map(([title, value, position], index) => (
            <div
              key={title}
              className={`glass absolute ${position} rounded-2xl px-5 py-4`}
            >

              <p
                className={`text-[9px] font-semibold tracking-[.2em] ${
                  index === 1
                    ? 'text-indigo-300'
                    : index === 2
                      ? 'text-violet-300'
                      : 'text-blue-300'
                }`}
              >
                {title}
              </p>

              <p className="mt-1 text-sm font-medium">
                {value}
              </p>

            </div>
          ))}


          {/* Location */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[11px] text-slate-500">

            <MapPin
              size={14}
              className="text-blue-400"
            />

            Austin, Texas

          </div>

        </motion.div>

      </div>
    </section>
  )
}
