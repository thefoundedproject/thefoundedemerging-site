/**
 * Copyright 2026 Dr. Stephen Thompson DC, DACM, BCTMB, FAIHM
 * The Founded Project — thefoundedemerging.app
 * All rights reserved.
 *
 * Program page — placeholder ahead of the six-month cohort curriculum launch.
 */

export const metadata = {
  title: 'The Program | Founded Emerging',
  description: 'The six-month Founded Emerging cohort: six modules, twenty-four weekly sub-modules, built on Human Enterprise Theory.',
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 style={{ color: '#0F1B1F' }} className="text-xl font-bold mb-3">{title}</h2>
      <div style={{ color: 'rgba(15,27,31,0.78)' }} className="leading-relaxed space-y-3 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  )
}

export default function ProgramPage() {
  return (
    <main style={{ backgroundColor: '#F5F0E8' }} className="min-h-screen px-6 py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" style={{ color: 'rgba(15,27,31,0.5)' }} className="text-xs uppercase tracking-widest mb-6 inline-block hover:opacity-80">
          ← Home
        </a>
        <p style={{ color: '#D8AB69' }} className="text-xs font-bold uppercase tracking-widest mb-3">
          The Program
        </p>
        <h1 style={{ color: '#0F1B1F' }} className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-2">
          Six months. Six modules.<br />Twenty-four weeks of becoming.
        </h1>
        <p style={{ color: 'rgba(15,27,31,0.55)' }} className="text-sm mb-12">A cohort program for the work of becoming an agentic human. Currently in design. Opens for applications later this year.</p>

        <div style={{ backgroundColor: '#0F1B1F' }} className="rounded-lg p-6 mb-12">
          <p style={{ color: '#D8AB69' }} className="text-xs font-bold uppercase tracking-widest mb-2">Status</p>
          <p style={{ color: '#F5F0E8' }} className="text-base leading-relaxed">
            Cohort curriculum is in active design. The first cohort will run after the mobile apps go live. To get notified when applications open,{' '}
            <a href="/apply" style={{ color: '#D8AB69' }} className="font-bold">submit an early interest form</a>{' '}or email{' '}
            <a href="mailto:contact@thefoundedemerging.app" style={{ color: '#D8AB69' }}>contact@thefoundedemerging.app</a>.
          </p>
        </div>

        <Section title="The architecture">
          <p>
            Six modules, each unfolding across four weeks. One sub-module per week. Twenty-four sub-modules total across the six-month arc.
          </p>
          <p>
            The arc follows the five stages of recovery the Founded Project teaches: Reclamation, Agency, Governance, Discernment, Contribution. Each module sits at one stage of the work and gives you the practice that stage requires.
          </p>
        </Section>

        <Section title="The six modules">
          <ul>
            <li><b>Who am I building?</b> Mission, values, and the version of yourself you are working toward.</li>
            <li><b>What do I actually own?</b> Your six capitals. What you have, what needs care, what gets protected.</li>
            <li><b>Build your board.</b> The people who tell you the truth. How to find them, how to ask them in, how to use them.</li>
            <li><b>What did your body learn?</b> The patterns you carry from before you could name them. Working with what already lives in the body.</li>
            <li><b>Who owns your digital self?</b> The version of you that lives online, and the work of taking it back.</li>
            <li><b>You can&apos;t build alone.</b> The community architecture that makes the rest of the work sustainable.</li>
          </ul>
        </Section>

        <Section title="Module 1: the entry">
          <p>
            The first module begins with a structured intake: three questions, an honest look, a written profile. The work that follows is built on what you bring. There&apos;s no &quot;right&quot; place to start. The intake meets you where you actually are.
          </p>
          <p>
            Module 1 is also the on-ramp for the cohort itself. People who complete the intake get matched with a peer pair. The pair holds the daily check-in across the full six months.
          </p>
        </Section>

        <Section title="Who the cohort is for">
          <ul>
            <li>Students 13–17, with parental consent.</li>
            <li>Young adults 18–26 newly responsible for their own decisions.</li>
            <li>Anyone in early recovery looking for daily structure beyond meetings.</li>
            <li>Adults rebuilding after a major life transition.</li>
            <li>Youth programs, recovery programs, and educational institutions bringing the work in as a cohort.</li>
          </ul>
        </Section>

        <Section title="Cost">
          <p>
            Pricing is under development. The cohort will be priced to be reachable. Institutional partnerships have separate pricing — reach out about your context and we&apos;ll talk.
          </p>
        </Section>

        <Section title="Get on the early list">
          <p>
            Applications for the first cohort open later in 2026. To get the early invitation, submit an interest form through the{' '}
            <a href="/apply" style={{ color: '#D8AB69' }} className="font-bold">Apply page</a>, or email us directly.
          </p>
        </Section>

        <p style={{ color: 'rgba(15,27,31,0.5)' }} className="text-sm italic mt-12">
          Dr. Stephen Thompson, DC, DACM, BCTMB, FAIHM<br />
          The Founded Project
        </p>
      </article>
    </main>
  )
}
