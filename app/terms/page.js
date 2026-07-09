/**
 * Copyright 2026 Dr. Stephen Thompson DC, DACM, BCTMB, FAIHM
 * The Founded Project — thefoundedemerging.app
 * All rights reserved.
 *
 * Terms of Use for Founded Emerging.
 * Built for anyone becoming agentic. Ages 13 and up.
 *   - 13–17: parental consent required (guardian agrees on behalf of minor)
 *   - 18+: self-verified age, direct agreement, no guardian involvement
 *
 * DRAFT — Reviewed by Dr. Thompson; not yet reviewed by counsel.
 * Confirm DATE_EFFECTIVE before any public launch or App Store submission.
 */

const DATE_EFFECTIVE = '2026-06-20'

export const metadata = {
  title: 'Terms of Use | Founded Emerging',
  description: 'The terms you agree to by using Founded Emerging. Different paths for 13–17 (with a guardian) and 18+ (on your own).',
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 style={{ color: '#0F1B1F' }} className="text-xl font-bold mb-3">{title}</h2>
      <div style={{ color: 'rgba(15,27,31,0.78)' }} className="leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:underline">
        {children}
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <main style={{ backgroundColor: '#F5F0E8' }} className="min-h-screen px-6 py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" style={{ color: 'rgba(15,27,31,0.5)' }} className="text-xs uppercase tracking-widest mb-6 inline-block hover:opacity-80">
          ← Home
        </a>
        <p style={{ color: '#D8AB69' }} className="text-xs font-bold uppercase tracking-widest mb-3">
          Terms
        </p>
        <h1 style={{ color: '#0F1B1F' }} className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-2">
          Terms of Use
        </h1>
        <p style={{ color: 'rgba(15,27,31,0.55)' }} className="text-sm mb-12">Effective {DATE_EFFECTIVE}</p>

        <Section title="What this is">
          <p>
            Founded Emerging is a personal-governance and reflection app built for the work of becoming an agentic human. It supports daily writing, evening reflection, decision-making practice, and the development of self-governance skills drawn from Human Enterprise Theory by Dr. Stephen Thompson. The primary audience is ages 13–26, with the app also welcoming anyone older who is learning self-governance for the first time or rebuilding it after a major life transition.
          </p>
          <p>
            Using Founded Emerging means you agree to these terms. If you are 13–17, your parent or legal guardian agrees on your behalf by completing the parental consent flow inside the app. If you are 18 or older, you agree directly when you confirm your age at the start of setup.
          </p>
        </Section>

        <Section title="What this is not">
          <p>
            Founded Emerging is not therapy, medical advice, mental-health treatment, or a substitute for professional care. The app supports daily reflection and skill-building; it does not diagnose, treat, or replace clinical work. It is not a substitute for recovery programs, clinical aftercare, or any prescribed treatment plan.
          </p>
          <p>
            The crisis-detection system inside the app is not an emergency response service. The system surfaces resources when concerning language patterns appear, but you decide whether to use them. If you or someone near you is in immediate danger, call <b>911</b> or go to the nearest emergency room. In a non-emergency crisis, call or text <b>988</b> for the Suicide and Crisis Lifeline.
          </p>
        </Section>

        <Section title="Who can use Founded Emerging">
          <ul>
            <li><b>Ages 13–17, with a guardian&apos;s consent.</b> The guardian must complete the parental consent flow before the app unlocks.</li>
            <li><b>Ages 18 and older, self-verified.</b> The age gate at first launch confirms you are 18 or older. No guardian is involved.</li>
            <li><b>Anyone, regardless of age over 13, who is learning self-governance for the first time or rebuilding it after a major life transition.</b> The app welcomes the young adult coming off their family&apos;s insurance, the person early in recovery, the recently divorced parent rediscovering their own life, and anyone in a similar becoming phase.</li>
            <li><b>Children under 13 should not use this app.</b> The app is not designed for that age group and we will not knowingly support an account for a user under 13.</li>
            <li>If you are running a full enterprise of your own life and want the operating system rather than the walkthrough, The Founded (thefounded.app) is the matched product. Either is fine. We will not block you from using Founded Emerging at any age over 13.</li>
          </ul>
        </Section>

        <Section title="The guardian's role (13–17 only)">
          <p>
            If the user is 13–17, a parent or legal guardian completes parental consent. By doing so, the guardian:
          </p>
          <ul>
            <li>Confirms they are the user&apos;s parent or legal guardian.</li>
            <li>Consents to the user using Founded Emerging.</li>
            <li>Provides their email so we can send a confirmation and reach them if needed.</li>
            <li>Understands the privacy approach: the user&apos;s journal content stays on the device, and the guardian does not receive notifications about journal entries.</li>
            <li>Understands they can revoke consent at any time by emailing us.</li>
          </ul>
          <p>
            The guardian remains the primary support system for the user&apos;s wellbeing during the 13–17 years. The app does not replace that role.
          </p>
          <p>
            <b>Users 18 and older:</b> no guardian role applies. You agree directly. You are the only party on your side of these terms.
          </p>
        </Section>

        <Section title="What you agree to as a user">
          <ul>
            <li>You will use the app for personal reflection and growth, not to harm yourself or others.</li>
            <li>You will not use the app to harass, threaten, or harm any person.</li>
            <li>You understand that the app provides crisis resources, and that calling 988 or someone on your board is always an option when something is hard.</li>
            <li>You understand the app does not replace conversations with parents, sponsors, therapists, clinicians, or other trusted people in your life.</li>
            <li>You will not misrepresent your age at the age gate. The age path determines the consent and protection scheme that applies to you; lying about it undermines the protections you are entitled to.</li>
          </ul>
        </Section>

        <Section title="Your content stays yours">
          <p>
            Journal entries, reflections, decision records, board notes, and anything else you write inside the app belong to you. The app stores this content on the device only. We do not access it, copy it, or analyze it for any purpose other than the on-device crisis-detection scan, which never transmits content.
          </p>
          <p>
            If you delete the app, the content is deleted with it.
          </p>
        </Section>

        <Section title="Crisis safety expectations">
          <p>
            The crisis-detection system inside Founded Emerging is designed to surface help, not to alert authorities or guardians automatically. The system reflects research on safe messaging and on user autonomy: people are more likely to seek help when they retain control over who knows what. This holds across age groups, including the 13–17 path.
          </p>
          <p>
            By using the app, you (and, for users 13–17, the guardian) acknowledge:
          </p>
          <ul>
            <li>The system may not catch every concerning pattern, and it may sometimes flag patterns that are not concerning.</li>
            <li>The system does not replace the judgment of a clinician, sponsor, or trusted person who knows you in person.</li>
            <li>Emergency situations require emergency services. The app surfaces 988 and the Crisis Text Line, but you have to use them. In immediate physical danger, call 911.</li>
            <li>For users 13–17: if the guardian has concerns about the user&apos;s safety, they should engage in person, with professional support as needed. The app is one input, not the answer.</li>
            <li>For users 18 and older: the same applies in reverse. People on your board, your clinician, your sponsor, your closest friend — the app does not replace any of them. The app is the daily structure that the rest of your support gets to act on.</li>
          </ul>
        </Section>

        <Section title="Acceptable use">
          <p>You (and, for users 13–17, the guardian) agree not to:</p>
          <ul>
            <li>Use the app to plan, encourage, or carry out harm to self or others.</li>
            <li>Use the app to bully, threaten, harass, or defame any person.</li>
            <li>Attempt to reverse-engineer, decompile, or extract code from the app.</li>
            <li>Use the app for commercial purposes or to compete with the service.</li>
            <li>Misrepresent the guardian&apos;s identity or relationship to the user during consent (13–17 path).</li>
            <li>Misrepresent your age at the age gate to bypass the consent path that applies to you.</li>
            <li>Use the app to share content you do not have the right to share.</li>
          </ul>
        </Section>

        <Section title="Account and access">
          <ul>
            <li>Founded Emerging does not require a cloud account. Access is governed by the device the app is installed on and by either the parental consent (13–17) or the self-verified age confirmation (18+) stored on that device.</li>
            <li>Guardians (13–17 path) can revoke consent any time by emailing us. Users 18 and older can stop using the app any time by deleting it. We can also disable access if the terms are violated.</li>
            <li>The app is provided free during the current launch period. If a paid version becomes available, terms about pricing and payment will be added here with notice to users and, where applicable, guardians.</li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <p>
            Human Enterprise Theory, Founded Emerging, Thompson Coaching Method, P/AIRS Bodywork, and all associated frameworks, content, code, and educational materials are the intellectual property of Dr. Stephen Thompson and The Founded Project. Patent pending. Reproducing, repackaging, or republishing this content without written permission is not permitted.
          </p>
        </Section>

        <Section title="Disclaimer of warranties">
          <p>
            Founded Emerging is provided as-is. We work to keep it running and safe. We do not guarantee uninterrupted availability, error-free operation, or specific outcomes from using the app. Reflection and self-governance are practices that develop over time; the app supports the practice but does not guarantee any particular result.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent allowed by law, The Founded Project and Dr. Stephen Thompson are not liable for indirect, incidental, or consequential damages arising from the use of Founded Emerging, including any outcomes related to the user&apos;s mental health, recovery, relationships, financial decisions, or actions taken or not taken in response to app content. Total direct liability is limited to the amount paid for the app in the 12 months before any claim, which during the current launch period is zero.
          </p>
          <p>
            This limitation does not apply to liability that cannot be limited by applicable law, including in cases of gross negligence or willful misconduct.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            Guardians (13–17 path) can revoke consent any time by emailing us. Users can delete the app from the device at any time. We can terminate access if the terms are violated.
          </p>
          <p>
            When access ends, on-device data remains on the device until the app is deleted. Guardian email records held by us will be deleted within 30 days of consent revocation. Adult user records (where applicable) will be deleted within 30 days of a deletion request.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the State of Minnesota, USA. Any disputes will be resolved in the state or federal courts located in Hennepin County, Minnesota. Use of the app outside the United States is at the user&apos;s own risk; local laws may impose additional restrictions or rights.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            If we change these terms materially, we will update the effective date above and post a notice. Guardians (13–17 path) who provided an email at consent, and any adult users who provided an email, will receive an email about material changes. Continued use after a change means acceptance of the updated terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions, consent revocation, support, anything else:
            <br />
            <a href="mailto:contact@thefoundedemerging.app" style={{ color: '#D8AB69' }} className="font-bold">
              contact@thefoundedemerging.app
            </a>
          </p>
          <p style={{ color: 'rgba(15,27,31,0.5)' }} className="text-sm italic mt-6">
            Dr. Stephen Thompson<br />
            The Founded Project
          </p>
        </Section>
      </article>
    </main>
  )
}
