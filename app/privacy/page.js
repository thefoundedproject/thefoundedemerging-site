/**
 * Copyright 2026 Dr. Stephen Thompson DC, DACM, BCTMB, FAIHM
 * The Founded Project — thefoundedemerging.app
 * All rights reserved.
 *
 * Privacy Policy for Founded Emerging.
 * Built for anyone becoming agentic. Ages 13 and up.
 *   - 13–17: parental consent required
 *   - 18+: self-verified age, no parental consent
 *
 * DRAFT — Reviewed by Dr. Thompson; not yet reviewed by counsel.
 * Confirm DATE_EFFECTIVE before any public launch or App Store submission.
 *
 * Drafted against: COPPA-aligned practices for the 13–17 path,
 * California SB 568, GDPR-K, App Store privacy nutrition label
 * requirements, AFSP/SAMHSA safe-messaging guidelines.
 */

const DATE_EFFECTIVE = '2026-06-20'

export const metadata = {
  title: 'Privacy Policy | Founded Emerging',
  description: 'How Founded Emerging handles your data. On-device only. No cloud sync. Built for anyone learning to govern themselves.',
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

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: '#F5F0E8' }} className="min-h-screen px-6 py-24">
      <article className="max-w-2xl mx-auto">
        <a href="/" style={{ color: 'rgba(15,27,31,0.5)' }} className="text-xs uppercase tracking-widest mb-6 inline-block hover:opacity-80">
          ← Home
        </a>
        <p style={{ color: '#D8AB69' }} className="text-xs font-bold uppercase tracking-widest mb-3">
          Privacy
        </p>
        <h1 style={{ color: '#0F1B1F' }} className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p style={{ color: 'rgba(15,27,31,0.55)' }} className="text-sm mb-12">Effective {DATE_EFFECTIVE}</p>

        <Section title="The short version">
          <p>
            Founded Emerging is built for the work of becoming an agentic human. The primary audience is ages 13–26. The app also welcomes anyone older who is learning self-governance for the first time or rebuilding it after a major life transition.
          </p>
          <p>
            Almost everything you write in this app lives on your device only. The cloud never sees your journal, your evening check-ins, or your reflections. We don&apos;t sell data. We don&apos;t advertise to you. We don&apos;t train AI models on what you write.
          </p>
          <p>
            Users 13–17 set up the app through a parental consent flow. Users 18 and older confirm their age and proceed directly. The only data we receive is what the consent or sign-in step requires: a guardian&apos;s email for minors, or your own first name and birth year for adults.
          </p>
        </Section>

        <Section title="Who this app is for">
          <p>
            The app is designed for people in the becoming phase of their lives. The three primary cases we built for:
          </p>
          <ul>
            <li>The teenager learning self-governance for the first time, with a parent or guardian alongside.</li>
            <li>The young adult who has just become responsible for their own decisions (off the family insurance, signing their own leases, making medical and financial calls without backup).</li>
            <li>The adult rebuilding agency after a major transition — early recovery, a divorce, an empty nest, a long stretch of living for someone else and now needing language for their own life.</li>
          </ul>
          <p>
            Children under 13 should not use Founded Emerging. The app is not designed for that age group and we do not knowingly collect any data from children under 13.
          </p>
        </Section>

        <Section title="Age verification and consent">
          <p>
            The first screen after install asks for your age.
          </p>
          <ul>
            <li>If you indicate you are under 13, the app stops and gently explains that this product is not for you yet.</li>
            <li>If you indicate you are 13–17, the app routes you to the parental consent screen. The app stays locked until a parent or guardian completes consent through their own email.</li>
            <li>If you indicate you are 18 or older, the app proceeds directly to setup. You agree to the Terms in your own right and no guardian is involved.</li>
          </ul>
          <p>
            Age is stored on the device. We do not transmit your birth date to any server. If you mis-state your age and we later become aware of a user under 13, we will delete any associated guardian record within 30 days of becoming aware.
          </p>
        </Section>

        <Section title="What stays on the device only">
          <p>
            Founded Emerging is built around an on-device-first principle. The following stay on your phone and are never transmitted to any server we control:
          </p>
          <ul>
            <li>Journal entries, including morning and evening writing</li>
            <li>Evening ritual reflections, discharge notes, and tomorrow&apos;s intentions</li>
            <li>Decision records, board notes, and personal mission text</li>
            <li>Screen check-in entries</li>
            <li>Crisis-detection scans (the analysis runs locally on the device; the text being analyzed never leaves the phone)</li>
          </ul>
          <p>
            All of this is stored in the device&apos;s encrypted local database (SQLite) and the device&apos;s secure storage (iOS SecureStore). If you delete the app, the data is deleted with it.
          </p>
        </Section>

        <Section title="What we do receive">
          <ul>
            <li>
              <b>Guardian email address (13–17 users only).</b> Sent when the guardian completes parental consent. Used to send a confirmation email and, if needed, to contact the guardian about app access or safety.
            </li>
            <li>
              <b>First name (optional, all users).</b> Provided during setup. Used only to personalize prompts inside the app and the consent confirmation email for minors. We do not require a last name.
            </li>
            <li>
              <b>Birth year (all users).</b> Provided at the age gate. Stored on the device. Used to determine which consent path applies. The birth year itself is not transmitted to any server.
            </li>
            <li>
              <b>Crash and diagnostic data, anonymized.</b> If the app crashes, iOS may share an anonymous crash report with us through Apple&apos;s standard developer tools. This data does not include journal content or identifiable account information.
            </li>
          </ul>
        </Section>

        <Section title="What we do not collect">
          <ul>
            <li>We don&apos;t use third-party advertising trackers.</li>
            <li>We don&apos;t sell, rent, or share user or guardian data with any data broker.</li>
            <li>We don&apos;t track location.</li>
            <li>We don&apos;t access contacts, photos, or microphone without an explicit per-feature prompt and permission.</li>
            <li>We don&apos;t train AI models on anything you write.</li>
            <li>For users 13–17: we don&apos;t monitor or report journal content to the guardian. What the user writes stays the user&apos;s.</li>
          </ul>
        </Section>

        <Section title="Crisis safety">
          <p>
            Founded Emerging includes a crisis-detection system that scans your journal text for language patterns associated with self-harm or suicidal ideation. The scan runs locally on the device. The text being scanned never leaves the phone.
          </p>
          <p>
            When the system detects concerning patterns, the app gently surfaces resources: the option to text or call someone on your board, the 988 Suicide and Crisis Lifeline, and the Crisis Text Line. You decide whether to use these resources. The system does not automatically notify a guardian, a board member, or any external party.
          </p>
          <p>
            This design honors your autonomy while keeping immediate help one tap away. The system is not a substitute for professional mental health care or emergency services. If you or someone near you is in immediate danger, call 911 or go to the nearest emergency room.
          </p>
        </Section>

        <Section title="Service providers we use">
          <ul>
            <li>
              <b>Apple (App Store, iOS).</b> Hosts the app and provides standard iOS services including secure storage, notifications, and anonymous crash reporting. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy</a>
            </li>
            <li>
              <b>Resend.</b> Sends the parental consent confirmation email to the guardian. Resend receives only the guardian&apos;s email, the teen&apos;s first name (if provided), and the email content. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">Resend Privacy</a>
            </li>
            <li>
              <b>Railway.</b> Hosts this website and the consent API endpoint. Receives standard server logs (IP address, request timestamp). <a href="https://railway.com/legal/privacy" target="_blank" rel="noreferrer">Railway Privacy</a>
            </li>
          </ul>
          <p>
            We do not use Google Analytics, Facebook tracking pixels, or any advertising network on the app or the website. The website uses no cookies that are not strictly necessary for it to function.
          </p>
        </Section>

        <Section title="Guardian rights (for users 13–17)">
          <ul>
            <li><b>Review consent decision.</b> Email us and we&apos;ll confirm what was provided during the consent flow and when.</li>
            <li><b>Revoke consent.</b> Email us at the address below. We&apos;ll mark the guardian&apos;s contact information for deletion and confirm. The user can also delete the app from the device at any time, which deletes the on-device data.</li>
            <li><b>Request deletion of guardian data.</b> We&apos;ll delete the guardian email address and any associated record within 30 days of the request.</li>
            <li><b>Ask questions.</b> If anything in this policy is unclear, reach out and we&apos;ll explain.</li>
          </ul>
        </Section>

        <Section title="Your rights as a user">
          <ul>
            <li><b>Delete your data.</b> Delete the app from your device and the on-device data is deleted with it.</li>
            <li><b>Know what we have.</b> Email us and we&apos;ll tell you exactly what we have. Almost always, the answer is: only what the consent or sign-in step required.</li>
            <li><b>Privacy of your reflection.</b> The app does not report your journal content to anyone. What you write stays yours. This holds whether you are 14, 24, or 54.</li>
            <li><b>Adult-only (18+) right of direct control.</b> If you are 18 or older, no guardian holds any rights over your account. Everything in this policy is between you and us directly.</li>
          </ul>
        </Section>

        <Section title="California residents">
          <p>
            California residents have rights under the California Consumer Privacy Act (CCPA) and California&apos;s privacy protections for minors (SB 568) including the right to know, the right to delete, and the right to opt out of any sale of personal information. We do not sell personal information.
          </p>
        </Section>

        <Section title="EU and UK residents">
          <p>
            Residents of the EU and UK have additional rights under GDPR and UK-GDPR, including the right to access, correct, delete, port, and restrict processing of personal data. Children&apos;s data receives heightened protection under GDPR Article 8 (age of digital consent varies by member state). To exercise any right, contact us at the email below.
          </p>
        </Section>

        <Section title="Security">
          <p>
            On-device data is stored in iOS&apos;s encrypted local database and secure storage system. The device itself should be protected with a passcode and biometric authentication; we recommend guardians and teens both enable these. All data transmitted to our consent endpoint is sent over TLS.
          </p>
          <p>
            No system is perfectly secure. If we ever become aware of a security incident affecting guardian or teen data, we will notify affected guardians by email within 72 hours and post a notice here.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we change this policy materially, we will update the effective date above and post a notice on this page. Guardians who provided an email at consent will receive an email about material changes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Privacy questions, consent revocation, data requests:
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
