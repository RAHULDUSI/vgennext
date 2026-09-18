import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

const API_URL =
  'https://script.google.com/macros/s/AKfycby4NnEjqORZ0UjTdYEttc7IrId9uf1_Nk17yUaQPk09KhGlNpDRNd06eqJtKOGaeaRKIw/exec'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = new URLSearchParams()

    data.append('name', String(formData.get('name') || ''))
    data.append('email', String(formData.get('email') || ''))
    data.append('company', String(formData.get('company') || ''))
    data.append('phone', String(formData.get('phone') || ''))
    data.append('service', String(formData.get('service') || ''))
    data.append('message', String(formData.get('message') || ''))

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      })

      // Apps Script receives the request successfully.
      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
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

      {/* Contact */}
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

              /* SUCCESS */
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle size={42} />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Thank you.
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Your enquiry has been successfully submitted.
                  Our team will review your request and get back to
                  you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                  }}
                  className="mt-8 rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/5"
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
                    required
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    required
                  />

                </div>

                <label className="mt-4 block text-xs text-slate-400">
                  Service interested in

                  <select
                    name="service"
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none"
                  >
                    <option value="Staffing & Talent Solutions">
                      Staffing & Talent Solutions
                    </option>

                    <option value="Application Development">
                      Application Development
                    </option>

                    <option value="AI Development">
                      AI Development
                    </option>

                    <option value="Agentic AI">
                      Agentic AI
                    </option>

                    <option value="Not sure yet">
                      Not sure yet
                    </option>
                  </select>
                </label>

                <label className="mt-4 block text-xs text-slate-400">
                  Tell us about your requirement

                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600"
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
                  disabled={loading}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
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
