/**
 * Copyright 2026 Dr. Stephen Thompson DC, DACM, BCTMB, FAIHM
 * The Founded Project — thefoundedemerging.app
 * All rights reserved.
 *
 * Contact page. Surfaced as Support URL for App Store Connect.
 */

export const metadata = {
  title: 'Contact | Founded Emerging',
  description: 'Reach Founded Emerging for support, parental consent questions, or anything else.',
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 style={{ color: '#0F1B1F' }} className="text-xl font-bold mb-3">{title}</h2>
      <div style={{ color: 'rgba(15,27,31,0.78)' }} className="leading-relaxed space-y-3 [&_a]:underline">
        {children}
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#F5F0E8' }} className="min-h-screen px-6 py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" style={{ color: 'rgba(15,27,31,0.5)' }} className="text-xs uppercase tracking-widest mb-6 inline-block hover:opacity-80">
          ← Home
        </a>
        <p style={{ color: '#D8AB69' }} className="text-xs font-bold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h1 style={{ color: '#0F1B1F' }} className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-2">
          Get in touch.
        </h1>
        <p style={{ color: 'rgba(15,27,31,0.55)' }} className="text-sm mb-12">A clinician reads every message. Replies usually arrive within 1–2 business days.</p>

        <Section title="App support">
          <p>
            Trouble with the Founded Emerging app, a question about how a feature works, or a bug you ran into. Send a short description of what you were doing and what happened.
          </p>
          <p>
            <a href="mailto:contact@thefoundedemerging.app" style={{ color: '#D8AB69' }} className="font-bold">
              contact@thefoundedemerging.app
            </a>
          </p>
        </Section>

        <Section title="Parental consent — revoke or ask a question">
          <p>
            Guardians can revoke consent any time by emailing the address above with the subject line &quot;Revoke consent&quot; and the email used during the consent flow. We confirm receipt and mark the guardian record for deletion within 30 days. Questions about how the parental consent flow works are welcome at the same address.
          </p>
        </Section>

        <Section title="Privacy or data requests">
          <p>
            To request a copy of what we have, ask us to delete it, or correct anything that&apos;s wrong, email the address above and include the guardian email used at sign-up. We respond within the timelines required by California, EU, and UK privacy law.
          </p>
        </Section>

        <Section title="Crisis support">
          <p>
            The contact email is not staffed for crisis response. If you or someone you know is in immediate danger, call <b>911</b>. For a non-emergency crisis, call or text <b>988</b> for the Suicide and Crisis Lifeline, or text HOME to <b>741741</b> for the Crisis Text Line.
          </p>
        </Section>

        <Section title="Press, partnerships, speaking">
          <p>
            For interviews, partnership inquiries, or speaking requests for Dr. Stephen Thompson, use the same email with &quot;Press&quot; or &quot;Partnership&quot; in the subject line.
          </p>
        </Section>

        <Section title="Mailing address">
          <p style={{ color: 'rgba(15,27,31,0.6)' }}>
            The Founded Project<br />
            c/o Dr. Stephen Thompson<br />
            Minneapolis, MN, USA
          </p>
        </Section>

        <Section title="About the builder">
          <p style={{ color: 'rgba(15,27,31,0.6)' }} className="italic">
            Dr. Stephen Thompson, DC, DACM, BCTMB, FAIHM<br />
            Founder, The Founded Project
          </p>
        </Section>
      </article>
    </main>
  )
}
