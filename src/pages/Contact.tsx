import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { submitEnquiry } from '../lib/api'

const services = [
  'Staffing & Talent Solutions',
  'Application Development',
  'AI Development',
  'Agentic AI',
  'Not sure yet',
]

interface FormData {
  fullName: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: services[0],
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setError('')

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!formData.email.trim()) {
      setError('Please enter your work email.')
      return
    }

    if (!formData.service.trim()) {
      setError('Please select a service.')
      return
    }

    if (!formData.message.trim()) {
      setError('Please tell us a little about your requirement.')
      return
    }

    try {
      setSubmitting(true)

      await submitEnquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      })

      setSubmitted(true)

      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        service: services[0],
        message: '',
      })
    } catch (err) {
      console.error('Enquiry submission error:', err)

      setError(
        'We could not submit your enquiry. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="pt-[78px]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

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


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="py-20">

        <div className="container-x grid gap-8 lg:grid-cols-[.7fr_1.3fr]">


          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className="space-y-4">

            {/* Address */}

            <div className="glass rounded-2xl p-6">

              <MapPin
                className="text-blue-400"
                size={20}
              />

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


            {/* Email */}

            <div className="glass rounded-2xl p-6">

              <Mail
                className="text-blue-400"
                size={20}
              />

              <p className="mt-4 font-semibold">
                Email
              </p>

              <p className="mt-2 text-sm text-slate-500">
                hello@vgennext.com
              </p>

            </div>


            {/* Phone */}

            <div className="glass rounded-2xl p-6">

              <Phone
                className="text-blue-400"
                size={20}
              />

              <p className="mt-4 font-semibold">
                Phone
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Contact our team for the right number.
              </p>

            </div>

          </div>


          {/* =================================================
              ENQUIRY FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >

            {submitted ? (

              /* =============================================
                 SUCCESS STATE
              ============================================= */

              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">

                  <CheckCircle2 size={34} />

                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Thank you.
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Your enquiry has been received successfully.
                  A member of the VGenNext team will get back
                  to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                  }}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Submit another enquiry

                  <Send size={15} />

                </button>

              </div>

            ) : (

              /* =============================================
                 FORM
              ============================================= */

              <>

                <h2 className="text-2xl font-bold">
                  Send us a message.
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Share a little about what you’re building.
                </p>


                {/* =========================================
                    INPUTS
                ========================================= */}

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>


                {/* =========================================
                    SERVICE DROPDOWN
                ========================================= */}

                <label className="mt-4 block text-xs text-slate-400">

                  Service interested in

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400/40"
                  >

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}

                  </select>

                </label>


                {/* =========================================
                    MESSAGE
                ========================================= */}

                <label className="mt-4 block text-xs text-slate-400">

                  Tell us about your requirement

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
                    placeholder="What are you trying to build, improve or automate?"
                  />

                </label>


                {/* =========================================
                    ERROR
                ========================================= */}

                {error && (

                  <div className="mt-4 rounded-xl border border-red-400/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>

                )}


                {/* =========================================
                    SUBMIT
                ========================================= */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {submitting
                    ? 'Submitting...'
                    : 'Submit Request'}

                  {!submitting && (
                    <Send size={15} />
                  )}

                </button>

              </>

            )}

          </form>

        </div>

      </section>

    </main>
  )
}


/* =========================================================
   INPUT COMPONENT
   ========================================================= */

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  required?: boolean
}) {
  return (
    <label className="block text-xs text-slate-400">

      {label}

      {required && (
        <span className="ml-1 text-blue-400">
          *
        </span>
      )}

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#080d17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40"
      />

    </label>
  )
}
