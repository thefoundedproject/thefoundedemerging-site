'use client'

import { useState, useEffect, useRef } from 'react'

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

// ─── Quiz ────────────────────────────────────────────────────────────────────
const QUIZ = [
  {
    q: 'Right now, what feels most true about your situation?',
    options: [
      { label: 'I have big goals and no one has taught me how to organize around them.', value: 'goals' },
      { label: 'I am making decisions without a real support system behind me.', value: 'isolated' },
      { label: 'I feel like I am performing who I am supposed to be, not who I actually am.', value: 'performing' },
      { label: 'I am carrying weight that people around me do not understand.', value: 'carrying' },
    ],
  },
  {
    q: 'When you face a decision that really matters — college, career, relationship, money — who do you talk to?',
    options: [
      { label: 'I mostly figure it out alone.', value: 'alone' },
      { label: 'Friends or family who love me but do not always know what to say.', value: 'informal' },
      { label: 'A teacher or mentor, sometimes. It depends on the decision.', value: 'partial' },
      { label: 'I have people I trust. I want to make that more intentional.', value: 'building' },
    ],
  },
  {
    q: 'What do you actually need right now?',
    options: [
      { label: 'A way to name what I am carrying and get it organized.', value: 'organize' },
      { label: 'A system for making decisions that does not feel chaotic.', value: 'decisions' },
      { label: 'Real counsel from people who will tell me the truth.', value: 'counsel' },
      { label: 'Clarity about who I am building and what for.', value: 'clarity' },
    ],
  },
]

const PROFILES = {
  goals: { title: 'You are a builder without a blueprint.', desc: 'You have the drive. You have the vision. What is missing is the infrastructure — the framework that organizes a life around what actually matters. That is exactly what Founded Emerging teaches.', next: 'Apply to Founded Emerging. Start with Module 01: Who Am I Building?' },
  isolated: { title: 'You are making decisions alone. That is costing you.', desc: 'Advisory support is not a luxury. It is the difference between good decisions and great ones. The framework teaches you how to build a real board for your life — people who counsel, not just support.', next: 'Apply to Founded Emerging. Start with Module 03: The Advisory Board.' },
  performing: { title: 'You are spending energy on the wrong performance.', desc: 'When your governance is clear — when you have a mission, values, and people who tell you the truth — the performance fades. You stop performing for others and start building for yourself.', next: 'Apply to Founded Emerging. Start with Module 01: Who Am I Building?' },
  carrying: { title: 'You are carrying more than you should have to carry alone.', desc: 'This framework honors that weight. It does not minimize it. It asks: given what you are carrying, what does your governance need to look like? And who should be carrying it with you?', next: 'Apply to Founded Emerging. Start where you are.' },
}

function QuizFunnel() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(null)

  const question = QUIZ[step - 1]

  const handleNext = () => {
    if (!selected) return
    const newAnswers = [...answers, { q: question.q, a: question.options.find(o => o.value === selected).label }]
    setAnswers(newAnswers)
    setSelected(null)
    if (step < QUIZ.length) {
      setStep(step + 1)
    } else {
      const firstVal = QUIZ[0].options.find(o => o.label === newAnswers[0].a)?.value
      setProfile(PROFILES[firstVal] || PROFILES.goals)
      setStep(4)
    }
  }

  const handleEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quiz', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, answers, profile }) })
    } catch {}
    setLoading(false)
    setStep(5)
  }

  if (step === 0) return (
    <div className="text-center py-8">
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Find your entry point</p>
      <h3 className="text-white text-2xl font-light mb-4 leading-snug">What are you actually dealing with?</h3>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-sm mx-auto">Three honest questions. Your results tell you where in the program to start and what to focus on first.</p>
      <button onClick={() => setStep(1)} style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '14px 40px', borderRadius: 6, fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer' }}>
        Start
      </button>
    </div>
  )

  if (step >= 1 && step <= QUIZ.length) return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
        {QUIZ.map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: i < step ? '#D8AB69' : 'rgba(216,171,105,0.2)' }} />)}
      </div>
      <h3 className="text-white text-xl font-light mb-8 leading-snug">{question.q}</h3>
      <div className="space-y-3 mb-8">
        {question.options.map(opt => (
          <button key={opt.value} onClick={() => setSelected(opt.value)} className="w-full text-left px-5 py-4 rounded text-sm leading-relaxed transition-all" style={{ backgroundColor: selected === opt.value ? '#D8AB69' : 'rgba(255,255,255,0.06)', color: selected === opt.value ? '#0F1B1F' : '#F5F0E8', border: `1.5px solid ${selected === opt.value ? '#D8AB69' : 'rgba(216,171,105,0.2)'}`, fontWeight: selected === opt.value ? 600 : 400 }}>
            {opt.label}
          </button>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selected} style={{ backgroundColor: selected ? '#D8AB69' : 'rgba(216,171,105,0.25)', color: '#0F1B1F', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: selected ? 'pointer' : 'default', opacity: selected ? 1 : 0.5 }}>
        {step === QUIZ.length ? 'See what this means' : 'Continue'}
      </button>
    </div>
  )

  if (step === 4) return (
    <div>
      <h3 className="text-white text-xl font-light mb-3">Good. Now — where do we send this?</h3>
      <p className="text-gray-400 text-sm mb-6">Your results, what they mean, and exactly where to start. Sent to your inbox.</p>
      <form onSubmit={handleEmail} className="space-y-3">
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="w-full px-4 py-3 text-sm rounded outline-none" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,171,105,0.3)', color: 'white' }} />
        <button type="submit" disabled={loading} className="w-full py-3 text-sm font-bold rounded" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', border: 'none', cursor: 'pointer' }}>
          {loading ? 'Sending...' : 'Get my results'}
        </button>
      </form>
    </div>
  )

  if (step === 5 && profile) return (
    <div>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>What this tells us</p>
      <h3 className="text-white text-xl font-semibold mb-4 leading-snug">{profile.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{profile.desc}</p>
      <p className="text-gray-400 text-xs leading-relaxed mb-6" style={{ borderLeft: '2px solid rgba(216,171,105,0.4)', paddingLeft: 12 }}>{profile.next}</p>
      <a href="/apply" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>Apply now →</a>
    </div>
  )
  return null
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80) }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: '#0F1B1F', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(to left, rgba(216,171,105,0.04), transparent)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 60, opacity: heroVisible ? 1 : 0, transition: 'opacity 0.8s 200ms' }}>Founded Emerging</p>

          <div style={{ maxWidth: 800 }}>
            {['This is the tool', 'nobody', <span key="k" style={{ color: '#D8AB69' }}>handed you.</span>].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(100%)', transition: `all 0.9s ease ${400 + i * 140}ms`, fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 500, marginTop: 48, opacity: heroVisible ? 1 : 0, transition: 'opacity 1.2s ease 1.1s' }}>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 18, lineHeight: 1.75, marginBottom: 16 }}>
              Some young people arrive at institutions already knowing how they work. They were taught, usually without being told it was happening.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 18, lineHeight: 1.75 }}>
              Others arrive and have to figure it out alone. That gap has a name now. Founded Emerging closes it.
            </p>
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 16, flexWrap: 'wrap', opacity: heroVisible ? 1 : 0, transition: 'opacity 1.4s ease 1.5s' }}>
            <a href="/apply" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Apply to the program</a>
            <a href="/program" style={{ backgroundColor: 'transparent', color: 'rgba(245,240,232,0.7)', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(245,240,232,0.2)' }}>See the curriculum</a>
          </div>
        </div>
      </section>

      {/* RECOGNITION SECTION */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>The Gap</p>
          </Reveal>

          {[
            { before: 'Some students get this:', after: 'A mission statement. An advisory board. A financial literacy baseline. Protected space to fail. Institutional fluency before they need it.' },
            { before: 'Others get this:', after: 'Arrive at the institution and figure it out on arrival. No blueprint. No board. No one with the specific kind of counsel they need.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 150}>
              <div style={{ borderTop: '1px solid rgba(15,27,31,0.1)', padding: '40px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, alignItems: 'start' }}>
                <p style={{ color: i === 0 ? '#6D8B5F' : '#B4533C', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', paddingTop: 4 }}>{item.before}</p>
                <p style={{ color: '#0F1B1F', fontSize: 17, lineHeight: 1.7, gridColumn: 'span 2' }}>{item.after}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div style={{ backgroundColor: '#0F1B1F', padding: '40px', borderRadius: 8, marginTop: 40 }}>
              <p style={{ color: '#F5F0E8', fontSize: 18, fontWeight: 300, lineHeight: 1.6 }}>
                Founded Emerging gives every young person the second list — regardless of where they started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIX MODULES */}
      <section style={{ backgroundColor: '#0F1B1F', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>The Curriculum</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 64 }}>Six modules. One arc.</h2>
          </Reveal>

          {[
            { num: '01', title: 'Who Am I Building?', desc: 'Governance starts with clarity about who you are and what you are trying to build. This module introduces mission, values, and the framework that holds everything else together.' },
            { num: '02', title: 'Your Six Capitals', desc: 'You have more than you know. Health, time, relationships, reputation, intellectual property, finances. This module maps what you already own and what needs protection.' },
            { num: '03', title: 'The Advisory Board', desc: 'Supporters keep you warm. Counsel keeps you accurate. This module walks you through building a real advisory board for your life.' },
            { num: '04', title: 'Survival and Strategy', desc: 'Your body learned to survive. Some of those adaptations are still running. This module names them with respect and asks which ones are serving you now.' },
            { num: '05', title: 'Data, Identity and Protection', desc: 'Your digital identity is already being built. This module teaches you to be the one doing the building, under your own terms.' },
            { num: '06', title: 'Community Architecture', desc: 'Agency held alone is brittle. This module builds the structures that make cooperation real — mutual accountability, organized support, collective strength.' },
          ].map((mod, i) => (
            <Reveal key={mod.num} delay={i * 60}>
              <div style={{ borderTop: '1px solid rgba(216,171,105,0.15)', padding: '32px 0', display: 'grid', gridTemplateColumns: '60px 1fr 2fr', gap: 24, alignItems: 'start' }}>
                <span style={{ color: 'rgba(216,171,105,0.35)', fontSize: 12, fontWeight: 700, paddingTop: 2 }}>{mod.num}</span>
                <p style={{ color: '#F5F0E8', fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>{mod.title}</p>
                <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 15, lineHeight: 1.7 }}>{mod.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      <section style={{ backgroundColor: '#2A5A66', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Where Do You Start?</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 300, lineHeight: 1.2, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Three questions to find your entry point.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 15, lineHeight: 1.7 }}>
              The program meets you where you are. This helps us understand where that is — and where to start you for the most impact.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ backgroundColor: 'rgba(15,27,31,0.5)', border: '1px solid rgba(216,171,105,0.2)', borderRadius: 12, padding: 36 }}>
              <QuizFunnel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR WHOM */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2, backgroundColor: 'rgba(15,27,31,0.08)' }}>
          {[
            { group: 'Students', desc: 'High school and college students building lives without an institutional inheritance to fall back on.' },
            { group: 'Youth Leadership Programs', desc: 'Organizations that already have young people\'s trust and want to give them real governance tools.' },
            { group: 'Educators', desc: 'Teachers and advisors who see what their students are capable of and want curriculum that matches it.' },
            { group: 'Community Organizations', desc: 'Any group serving emerging adults who need structure alongside support.' },
          ].map((item, i) => (
            <Reveal key={item.group} delay={i * 80}>
              <div style={{ backgroundColor: '#F5F0E8', padding: '40px 32px', minHeight: 200 }}>
                <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>For</p>
                <p style={{ color: '#0F1B1F', fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{item.group}</p>
                <p style={{ color: 'rgba(15,27,31,0.6)', fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPLY CTA */}
      <section style={{ backgroundColor: '#D8AB69', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <Reveal>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Ready.<br />Begin.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: 'rgba(15,27,31,0.7)', fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              Applications are rolling. You do not need to have it all figured out to apply. You just need to be ready to start.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/apply" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Apply now</a>
              <a href="/educators" style={{ backgroundColor: 'transparent', color: '#0F1B1F', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(15,27,31,0.25)' }}>For educators</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
