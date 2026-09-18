import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

const API_URL =
  'https://script.google.com/macros/s/AKfycby4NnEjqORZ0UjTdYEttc7IrId9uf1_Nk17yUaQPk09KhGlNpDRNd06eqJtKOGaeaRKIw/exec'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch(API_URL, {
        method: 'POST',
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ])
        ),
        mode: 'no-cors',
      })

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error(err)
      setError(
        'We could not submit your enquiry. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="pt-[78px]">

      {/* Header */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[.3em] text-blue-400">
            Contact
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Let’s build what’s next.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us what you need. Whether it’s technology talent,
            an application, AI or automation, we’ll start with the
            problem you’re trying to solve.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[.7fr_1.3fr]">

          {/* Contact Information */}
          <div className="space-y-4">

            <div className="glass rounded-2xl p-6">
              <MapPin className="text-blue-400" size={20} />

              <p className="mt-4 font-semibold">
                Austin Office
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                5900 Balcones Drive, Ste 100
                <br />
                Austin, TX 78731
                <br />
                United States
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Mail className="text-blue-400" size={20} />

              <p className="mt-4 font-semibold">
                Email
              </p>

              <p className="mt-2 text-sm text-slate-500">
                hello@vgennext.com
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Phone className="text-blue-400" size={20} />

              <p className="mt-4 font-semibold">
                Phone
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Contact our team for the right number.
              </p>
            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >

            {submitted ? (

              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle size={34} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Thank you.
                </h2>

                <p className="mt-3 max-w-md text-base leading-7 text-slate-400">
                  Your enquiry has been successfully submitted.
                  Our team will review your request and get back
                  to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                  }}
                  className="mt-8 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white transition hover:border-blue-400/40 hover:bg-blue-500/5"
                >
                  Submit another enquiry
                </button>

              </div>

            ) : (

              <>
                <h2 className="text-2xl font-bold">
                  Send us a message.
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Share a little about what you’re building.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <Input
                    label="Full Name"
                    name="name"
                    required
                  />

                  <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    required
                  />

                  <Input
                    label="Company"
                    name="company"
                  />

                  <Input
                    label="Phone"
                    name="phone"
                  />

                </div>

                <label className="mt-4 block text-xs text-slate-400">
                  Service interested in

                  <select
                    name="service"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none focus:border-blue-400/40"
                  >
                    <option>Staffing & Talent Solutions</option>
                    <option>Application Development</option>
                    <option>AI Development</option>
                    <option>Agentic AI</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label className="mt-4 block text-xs text-slate-400">
                  Tell us about your requirement

                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-400/40"
                    placeholder="What are you trying to build, improve or automate?"
                  />
                </label>

                {error && (
                  <p className="mt-4 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}

                  <Send size={15} />
                </button>
              </>
            )}

          </form>
        </div>
      </section>
    </main>
  )
}

function Input({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block text-xs text-slate-400">
      {label}

      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none focus:border-blue-400/40"
      />
    </label>
  )
}
