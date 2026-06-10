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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(18px)', transition: `all 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

const QUIZ = [
  {
    q: 'Right now, what is most true?',
    options: [
      { label: 'I know what I want. I just do not know how to organize around it.', value: 'goals' },
      { label: 'I am making decisions that matter and I am making them mostly alone.', value: 'isolated' },
      { label: 'I spend a lot of energy being who people expect me to be.', value: 'performing' },
      { label: 'I am carrying something heavy that most people around me cannot see.', value: 'carrying' },
    ],
  },
  {
    q: 'When something big comes up — a decision, a conflict, a choice about your future — who do you go to?',
    options: [
      { label: 'Mostly myself. I figure it out alone.', value: 'alone' },
      { label: 'People who love me. They try, but they do not always know what to say.', value: 'informal' },
      { label: 'A teacher or adult I trust, sometimes. It depends on the situation.', value: 'partial' },
      { label: 'I have people. I want to make it more intentional.', value: 'building' },
    ],
  },
  {
    q: 'What do you actually need?',
    options: [
      { label: 'Words for what I am already going through.', value: 'language' },
      { label: 'A system. Something that makes my decisions feel less chaotic.', value: 'system' },
      { label: 'People who will tell me the truth, not just what I want to hear.', value: 'counsel' },
      { label: 'Clarity on what I am building and where it is going.', value: 'clarity' },
    ],
  },
]

const PROFILES = {
  goals: {
    title: 'You know what you want. You need the structure.',
    desc: 'Drive without structure burns out. This program gives your goals somewhere to live: a mission, a plan, people who can help you move.',
    next: 'Start with Module 01: Who Am I Building?',
  },
  isolated: {
    title: 'You are deciding without counsel. That is costing you.',
    desc: 'Real decisions deserve real input. The program teaches you how to build a board for your life: adults who will tell you the truth.',
    next: 'Start with Module 03: The Advisory Board.',
  },
  performing: {
    title: 'You are spending energy on the wrong thing.',
    desc: 'When you have a clear mission and people who actually know you, the pressure to be everything for everyone starts to lift. You start building for yourself.',
    next: 'Start with Module 01: Who Am I Building?',
  },
  carrying: {
    title: 'You are holding more than most people your age.',
    desc: 'This program does not minimize that. It asks: given what you carry, what does your life need to look like? And who should be in your corner while you carry it?',
    next: 'Start where you are. Module 01 or Module 04.',
  },
  language: {
    title: 'You need words for what is already happening.',
    desc: 'That is exactly what this program provides. Language first. Then structure. Then people.',
    next: 'Start with Module 01: Who Am I Building?',
  },
  system: {
    title: 'You need a system, not more advice.',
    desc: 'This program builds one. A mission. A board. A set of decisions you make on purpose instead of by default.',
    next: 'Start with Module 02: What Do You Actually Own?',
  },
  counsel: {
    title: 'You need real people, not cheerleaders.',
    desc: 'Module 03 is built for this. How to identify the right adults. How to ask them in. How to actually use their counsel.',
    next: 'Start with Module 03: The Advisory Board.',
  },
  clarity: {
    title: 'You need to see the arc, not just the next step.',
    desc: 'The six-month structure gives you that. Each module connects to the one before it. By the end you have a direction, not just intentions.',
    next: 'Start with Module 01: Who Am I Building?',
  },
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
    try { await fetch('/api/quiz', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, answers, profile }) }) } catch {}
    setLoading(false)
    setStep(5)
  }

  if (step === 0) return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>Three questions</p>
      <h3 style={{ color: '#F5F0E8', fontSize: 22, fontWeight: 300, marginBottom: 10, lineHeight: 1.3 }}>Where do you actually start?</h3>
      <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: 14, lineHeight: 1.6, maxWidth: 300, margin: '0 auto 28px' }}>Answer straight. Your results go to your inbox with a specific place to begin.</p>
      <button onClick={() => setStep(1)} style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '14px 40px', borderRadius: 6, fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer' }}>Start</button>
    </div>
  )

  if (step >= 1 && step <= QUIZ.length) return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 30 }}>
        {QUIZ.map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, backgroundColor: i < step ? '#D8AB69' : 'rgba(216,171,105,0.2)' }} />)}
      </div>
      <h3 style={{ color: '#F5F0E8', fontSize: 18, fontWeight: 400, lineHeight: 1.4, marginBottom: 22 }}>{question.q}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {question.options.map(opt => (
          <button key={opt.value} onClick={() => setSelected(opt.value)} style={{ textAlign: 'left', padding: '14px 18px', borderRadius: 7, fontSize: 14, lineHeight: 1.45, cursor: 'pointer', transition: 'all 0.15s', backgroundColor: selected === opt.value ? '#D8AB69' : 'rgba(255,255,255,0.06)', color: selected === opt.value ? '#0F1B1F' : '#F5F0E8', border: `1.5px solid ${selected === opt.value ? '#D8AB69' : 'rgba(216,171,105,0.18)'}`, fontWeight: selected === opt.value ? 600 : 400 }}>
            {opt.label}
          </button>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selected} style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: selected ? 'pointer' : 'default', opacity: selected ? 1 : 0.4 }}>
        {step === QUIZ.length ? 'See what this means' : 'Continue'}
      </button>
    </div>
  )

  if (step === 4) return (
    <div>
      <h3 style={{ color: '#F5F0E8', fontSize: 19, fontWeight: 300, marginBottom: 8 }}>Where should we send this?</h3>
      <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: 13, marginBottom: 22 }}>Your results and where to start, straight to your inbox.</p>
      <form onSubmit={handleEmail} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ padding: '13px 16px', backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,171,105,0.3)', borderRadius: 6, fontSize: 14, color: 'white', outline: 'none' }} />
        <button type="submit" disabled={loading} style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '13px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
          {loading ? 'Sending...' : 'Get my results'}
        </button>
      </form>
    </div>
  )

  if (step === 5 && profile) return (
    <div>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>What this says</p>
      <h3 style={{ color: '#F5F0E8', fontSize: 19, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{profile.title}</h3>
      <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{profile.desc}</p>
      <p style={{ color: 'rgba(216,171,105,0.7)', fontSize: 12, lineHeight: 1.5, marginBottom: 24, borderLeft: '2px solid rgba(216,171,105,0.3)', paddingLeft: 12 }}>{profile.next}</p>
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
          <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 60, opacity: heroVisible ? 1 : 0, transition: 'opacity 0.8s 200ms' }}>
            Founded Emerging · Ages 13–17
          </p>
          <div style={{ maxWidth: 820 }}>
            {[
              'You are already making',
              <span key="2" style={{ color: '#D8AB69' }}>real decisions.</span>,
              'No one gave you the map.',
            ].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(100%)', transition: `all 0.9s ease ${380 + i * 140}ms`, fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.08, letterSpacing: '-0.025em' }}>
                  {line}
                </div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 500, marginTop: 52, opacity: heroVisible ? 1 : 0, transition: 'opacity 1.2s ease 1.1s' }}>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 17, lineHeight: 1.75, marginBottom: 14 }}>
              You are growing up and taking on more. That comes with real decisions — about school, about who you are, about what you want.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 17, lineHeight: 1.75 }}>
              This program gives you language and structure for those decisions. It reduces the load. You do not have to sort it all out alone.
            </p>
          </div>
          <div style={{ marginTop: 52, display: 'flex', gap: 16, flexWrap: 'wrap', opacity: heroVisible ? 1 : 0, transition: 'opacity 1.4s ease 1.5s' }}>
            <a href="/apply" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Apply to the program</a>
            <a href="#app" style={{ backgroundColor: 'transparent', color: 'rgba(245,240,232,0.65)', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(245,240,232,0.18)' }}>Get the app</a>
            <a href="#parents" style={{ backgroundColor: 'transparent', color: 'rgba(245,240,232,0.45)', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(245,240,232,0.12)' }}>Parents — read this first</a>
          </div>
        </div>
      </section>

      {/* THE APP — standalone section */}
      <section id="app" style={{ backgroundColor: '#0F1B1F', padding: '100px 24px', borderTop: '1px solid rgba(216,171,105,0.12)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>The App</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.2 }}>
              Founded Emerging lives on your phone.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 17, lineHeight: 1.7, maxWidth: 580, marginBottom: 60 }}>
              The program curriculum is structured. The app is daily. Morning check-ins, evening wind-downs, a private journal, and the people in your corner — all in one place.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2, backgroundColor: 'rgba(216,171,105,0.08)', marginBottom: 60 }}>
            {[
              { icon: '◎', title: 'Morning Check-In', desc: 'Start the day grounded. Two minutes. What matters today, how your body feels, one intention.' },
              { icon: '●', title: 'Evening Wind-Down', desc: 'Close the day intentionally. Put down what happened. Discharge what needs to go. Set up tomorrow.' },
              { icon: '◈', title: 'Private Journal', desc: 'Everything you write stays on your device. No cloud. No sharing. No one else reads it.' },
              { icon: '◐', title: 'Your Board', desc: 'The adults you actually trust — added by you, available to you. Not a notification. A real person.' },
              { icon: '✦', title: 'Goal Tracking', desc: "Your goals have a home. They don't disappear when life gets busy." },
              { icon: '⚖', title: 'Decision Protocol', desc: 'Big choices get a structured process. Write the question. Consult your board. Make the call. Record it.' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div style={{ backgroundColor: '#0F1B1F', padding: '32px 28px' }}>
                  <p style={{ color: '#D8AB69', fontSize: 22, marginBottom: 12 }}>{f.icon}</p>
                  <p style={{ color: '#F5F0E8', fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{f.title}</p>
                  <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 13, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://apps.apple.com/app/founded-emerging" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '14px 32px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Download on iOS</a>
              <a href="#parents" style={{ backgroundColor: 'transparent', color: 'rgba(245,240,232,0.6)', padding: '14px 32px', borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(245,240,232,0.15)' }}>Requires guardian setup</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUILT FOR SAFETY */}
      <section style={{ backgroundColor: '#111E22', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Built for Safety</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
              This app is aware of what teenagers actually go through.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 17, lineHeight: 1.7, maxWidth: 600, marginBottom: 60 }}>
              We built the safety layer before anything else. Not as a checkbox. As the foundation.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 60 }}>
            {[
              {
                title: 'Crisis detection built in',
                desc: 'The app quietly scans journal and evening entries for language patterns that may signal distress — self-harm, abuse, hopelessness. When something surfaces, it responds warmly: not with alarm, but with a direct offer to connect.',
                tag: 'AFSP · SAMHSA guidelines applied',
              },
              {
                title: 'One tap to a trusted adult',
                desc: 'If something serious comes up, the teen can reach any adult on their board in one tap — call, text, or message. No searching for a number. No navigating away. The board is always one step from the journal.',
                tag: 'Teen controls who is on the board',
              },
              {
                title: '988 and Crisis Text Line integrated',
                desc: 'The 988 Suicide and Crisis Lifeline and Crisis Text Line (text HOME to 741741) are built into the app — not buried in a settings menu. They surface when the context calls for them.',
                tag: 'Always accessible, never pushed',
              },
              {
                title: 'Parental consent required',
                desc: 'The Founded Emerging app does not unlock until a parent or guardian confirms setup by email. No personal data is collected from the teen before consent is confirmed.',
                tag: 'COPPA-aligned · email verification',
              },
              {
                title: 'Everything stays on the device',
                desc: 'Journal entries, discharge notes, board conversations — none of it leaves the phone unless the teen actively shares it. No cloud sync, no analytics on minors, no third-party data.',
                tag: 'Local-only · no cloud by default',
              },
              {
                title: 'Safe messaging standards',
                desc: "Every prompt in the app follows published safe messaging guidelines for adolescent mental health. We do not ask leading questions, we do not dramatize struggle, and we do not require the teen to perform wellness.",
                tag: 'Reviewed against clinical guidelines',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '28px 24px', border: '1px solid rgba(216,171,105,0.12)', height: '100%' }}>
                  <p style={{ color: '#F5F0E8', fontSize: 15, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</p>
                  <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
                  <p style={{ color: 'rgba(216,171,105,0.5)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{item.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div style={{ backgroundColor: 'rgba(216,171,105,0.08)', borderLeft: '3px solid #D8AB69', padding: '24px 28px', borderRadius: '0 8px 8px 0', maxWidth: 720 }}>
              <p style={{ color: '#F5F0E8', fontSize: 16, lineHeight: 1.65, marginBottom: 0 }}>
                "This app was built by a clinician who has spent two decades with young people in crisis. The safety features are not an add-on. They are the reason it exists."
              </p>
              <p style={{ color: 'rgba(216,171,105,0.65)', fontSize: 12, marginTop: 12, fontWeight: 600, letterSpacing: '0.05em' }}>DR. STEPHEN THOMPSON DC, DACM, BCTMB, FAIHM · FOUNDER</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR THE YOUNG PERSON */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Sound familiar?</p>
          </Reveal>
          <div style={{ maxWidth: 800 }}>
            {[
              { line: 'You know what you want to do with your life.', sub: 'You just do not have a system around it yet.' },
              { line: 'You are growing up and taking on more responsibilities.', sub: 'It is easy to lose yourself during this time.' },
              { line: 'You show up differently in different rooms.', sub: 'School. Home. Friends. That takes a lot of energy.' },
              { line: 'There are a lot of big decisions ahead of you.', sub: 'The adults around you love you, but may have difficulty communicating with you. Be patient with them.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ borderTop: '1px solid rgba(15,27,31,0.1)', padding: '28px 0' }}>
                  <p style={{ color: '#0F1B1F', fontSize: 18, fontWeight: 600, marginBottom: 6, lineHeight: 1.4 }}>{item.line}</p>
                  <p style={{ color: 'rgba(15,27,31,0.55)', fontSize: 15, lineHeight: 1.6 }}>{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div style={{ backgroundColor: '#0F1B1F', padding: '36px 40px', borderRadius: 8, marginTop: 48, maxWidth: 640 }}>
              <p style={{ color: '#F5F0E8', fontSize: 17, fontWeight: 300, lineHeight: 1.65 }}>
                This is a governance program. It gives you language for what you are already going through and a structure to move forward with it.
              </p>
              <a href="/apply" style={{ display: 'inline-block', marginTop: 20, color: '#D8AB69', fontSize: 13, fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid rgba(216,171,105,0.4)', paddingBottom: 2 }}>Apply to Founded Emerging →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIX MODULES */}
      <section style={{ backgroundColor: '#0F1B1F', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>The Program</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 60 }}>Six modules. About six months. One arc.</h2>
          </Reveal>
          {[
            { num: '01', title: 'Who Am I Building?', desc: 'Before you build anything, you need to know what you are building. Your mission. Your values. What actually matters to you.' },
            { num: '02', title: 'What Do You Actually Own?', desc: 'Health. Time. Relationships. Reputation. Ideas. Money. You have more than you think. This maps what you already own and what needs protecting.' },
            { num: '03', title: 'Build Your Board', desc: 'You need more than people who love you. You need people who will tell you the truth. This module shows you how to identify them, ask them in, and actually use their counsel.' },
            { num: '04', title: 'What Did Your Body Learn?', desc: 'Some of what you do automatically — moving fast, keeping things inside, taking care of everyone else first — you learned that. This module names it and asks which patterns are still working for you.' },
            { num: '05', title: 'Who Owns Your Digital Self?', desc: 'Your identity is being built online right now. Every post, every platform, every click. This module puts you in charge of that.' },
            { num: '06', title: 'You Cannot Build Alone', desc: 'The strongest people are not the ones who carry everything themselves. They are the ones with organized, honest community around them. This module builds that.' },
          ].map((mod, i) => (
            <Reveal key={mod.num} delay={i * 55}>
              <div style={{ borderTop: '1px solid rgba(216,171,105,0.12)', padding: '28px 0', display: 'grid', gridTemplateColumns: '50px 220px 1fr', gap: 20, alignItems: 'start' }}>
                <span style={{ color: 'rgba(216,171,105,0.3)', fontSize: 12, fontWeight: 700, paddingTop: 3 }}>{mod.num}</span>
                <p style={{ color: '#F5F0E8', fontSize: 15, fontWeight: 600, lineHeight: 1.35 }}>{mod.title}</p>
                <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 14, lineHeight: 1.65 }}>{mod.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      <section style={{ backgroundColor: '#2A5A66', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Where Do You Start?</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 300, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.015em' }}>
              Three honest questions. One honest answer.
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 15, lineHeight: 1.65 }}>
              The program has six modules. Where you start depends on where you are. Answer straight and we will tell you which module fits your situation right now.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: 13, lineHeight: 1.6, marginTop: 16 }}>
              There is no wrong answer.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ backgroundColor: 'rgba(15,27,31,0.5)', border: '1px solid rgba(216,171,105,0.2)', borderRadius: 12, padding: 36 }}>
              <QuizFunnel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR PARENTS */}
      <section id="parents" style={{ backgroundColor: '#F5F0E8', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>For Parents</p>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 40 }}>
              You can see it.<br />You just do not have the words for it yet.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
            <Reveal delay={100}>
              <div>
                <p style={{ color: '#0F1B1F', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  Your child is going through significant changes — internally and in relation to the world around them. You see it. The stress. The social pressure. The decisions they are making mostly alone.
                </p>
                <p style={{ color: '#0F1B1F', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  This program was built by a clinician who has spent two decades working with young people. It reduces the mental and emotional load of growing up. It gives them language for what they are going through and a structure for decisions they are already making.
                </p>
                <p style={{ color: '#0F1B1F', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                  It also prepares them for an agentic future. AI is part of every career and every major decision coming their way. We teach young people how to use it — not to replace their thinking, but to sharpen it. To enhance learning, ideation, and creativity.
                </p>
                <p style={{ color: '#0F1B1F', fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
                  The students who go through this program become the kind of people others turn to. Grounded. Clear. Good counsel. We are building a generation of mentors.
                </p>

                {/* Parental consent callout */}
                <div style={{ backgroundColor: '#0F1B1F', borderRadius: 8, padding: '24px 28px', marginBottom: 24 }}>
                  <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>How setup works</p>
                  <p style={{ color: 'rgba(245,240,232,0.75)', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
                    When your teen downloads the Founded Emerging app, a parent or guardian sets it up first. You confirm by email before the app unlocks. Nothing is collected from your teen until you confirm. After that, the journal and all data stays on their device — not in the cloud, not accessible to us.
                  </p>
                </div>

                <p style={{ color: 'rgba(15,27,31,0.5)', fontSize: 13, lineHeight: 1.65 }}>
                  If your child ever uses the journal to express something serious — distress, abuse, self-harm — the app responds with warmth, not alarm, and offers to connect them with someone on their board or a crisis line. You will not receive notifications about their journal. What they write is theirs. The safety net is built for them, not over them.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ backgroundColor: '#0F1B1F', borderRadius: 10, padding: 36 }}>
                <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24 }}>What your child walks away with</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { item: 'A written mission statement', note: 'theirs, not yours' },
                    { item: 'A map of their six capitals', note: 'what they have and what needs care' },
                    { item: 'A real advisory board', note: 'people who tell them the truth' },
                    { item: 'Language for what they carry', note: 'named, not buried' },
                    { item: 'Digital self-awareness', note: 'who is building their identity and how' },
                    { item: 'A model for community', note: 'not alone, not helpless' },
                    { item: 'Crisis support, always one tap away', note: 'without requiring you to know first' },
                  ].map(({ item, note }) => (
                    <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(216,171,105,0.12)', paddingBottom: 12 }}>
                      <p style={{ color: '#F5F0E8', fontSize: 14, fontWeight: 500 }}>{item}</p>
                      <p style={{ color: 'rgba(216,171,105,0.55)', fontSize: 11, fontStyle: 'italic', textAlign: 'right', maxWidth: 120 }}>{note}</p>
                    </div>
                  ))}
                </div>
                <a href="/educators" style={{ display: 'inline-block', marginTop: 24, color: '#D8AB69', fontSize: 13, fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid rgba(216,171,105,0.4)', paddingBottom: 2 }}>
                  Questions? Read the educator guide →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section style={{ backgroundColor: '#0F1B1F', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, backgroundColor: 'rgba(216,171,105,0.08)' }}>
          {[
            { group: 'Students ages 13–17', desc: 'Ready to take their life seriously before anyone told them they could.' },
            { group: 'Youth programs', desc: 'Organizations that already have young people\'s trust and want to give them something real.' },
            { group: 'Educators', desc: 'Teachers and advisors who see what their students are capable of and want curriculum that matches it.' },
            { group: 'Parents', desc: 'Watching their child carry weight alone. Ready to give them something more than advice.' },
          ].map((item, i) => (
            <Reveal key={item.group} delay={i * 60}>
              <div style={{ backgroundColor: '#0F1B1F', padding: '36px 28px' }}>
                <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>For</p>
                <p style={{ color: '#F5F0E8', fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{item.group}</p>
                <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPLY CTA */}
      <section style={{ backgroundColor: '#D8AB69', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <Reveal>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              You do not need<br />to have it figured out.<br />You just need to start.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: 'rgba(15,27,31,0.7)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Applications are reviewed on a rolling basis. There is no wrong place to begin. The quiz tells you where. Then apply.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/apply" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Apply now</a>
              <a href="/educators" style={{ backgroundColor: 'transparent', color: '#0F1B1F', padding: '16px 36px', borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(15,27,31,0.2)' }}>For educators and parents</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
