'use client'

import { useState } from 'react'

export default function Apply() {
  const [form, setForm] = useState({ name: '', email: '', applicantType: '', school: '', reason: '' })
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Applications</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Apply to Founded Emerging</h1>
          <p className="text-gray-300 text-lg max-w-2xl">Open to high school students, college students, fraternity/sorority chapters, HBCU programs, and youth organizations.</p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <div className="space-y-6">
              {[
                { label: 'Students (High School & College)', desc: 'Founded Emerging gives you the governance infrastructure to build your future with intention.' },
                { label: 'Chapter Leaders (Alpha Phi Alpha & Greek Organizations)', desc: 'Bring the Human Enterprise framework to your chapter as a leadership development program.' },
                { label: 'Institutional Partners (HBCUs & Youth Programs)', desc: 'Integrate Founded Emerging as a course, workshop series, or co-curricular offering.' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 pl-6" style={{ borderColor: '#D8AB69' }}>
                  <p style={{ color: '#0F1B1F' }} className="font-semibold mb-2">{item.label}</p>
                  <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div style={{ backgroundColor: '#0F1B1F', borderRadius: '12px' }} className="p-10 text-center">
                <p style={{ color: '#D8AB69' }} className="text-4xl mb-4">✦</p>
                <p className="text-white text-xl font-semibold mb-3">Application received.</p>
                <p className="text-gray-300 text-sm leading-relaxed">Applications are reviewed on a rolling basis. You will hear back within 2 weeks.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Full Name *</label>
                  <input required value={form.name} onChange={set('name')} type="text" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="Your full name" />
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Email *</label>
                  <input required value={form.email} onChange={set('email')} type="email" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">I am applying as *</label>
                  <select required value={form.applicantType} onChange={set('applicantType')} style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none">
                    <option value="">Select one...</option>
                    <option>A student (high school)</option>
                    <option>A student (college)</option>
                    <option>A chapter leader (Alpha Phi Alpha)</option>
                    <option>A chapter leader (other Greek organization)</option>
                    <option>An educator or institutional partner</option>
                    <option>A youth organization</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">School or Organization</label>
                  <input value={form.school} onChange={set('school')} type="text" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="Where are you based?" />
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Why do you want to participate?</label>
                  <textarea value={form.reason} onChange={set('reason')} rows={5} style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none resize-none" placeholder="Tell us where you are and where you are trying to go." />
                </div>
                {status === 'error' && <p style={{ color: '#B4533C' }} className="text-sm">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={status === 'sending'} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', opacity: status === 'sending' ? 0.7 : 1 }} className="w-full py-4 text-sm font-semibold rounded transition-opacity">
                  {status === 'sending' ? 'Submitting...' : 'Submit Application'}
                </button>
                <p style={{ color: '#0F1B1F' }} className="text-xs opacity-60 text-center">Applications reviewed on a rolling basis. You will hear back within 2 weeks.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
