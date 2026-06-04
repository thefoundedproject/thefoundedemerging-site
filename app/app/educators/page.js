export const metadata = {
  title: 'For Educators | Founded Emerging',
  description: 'Bring Founded Emerging to your classroom, campus, or organization. Curriculum, facilitation support, and cohort structures available.',
}

export default function Educators() {
  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">For Educators</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Bring it to your students.</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Founded Emerging is designed for integration into classrooms, campus programs, Greek life leadership development, and community youth organizations. We provide the curriculum. You provide the trust you have already built with your students.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { label: 'Ready-to-Teach Curriculum', desc: 'Six modules with session guides, facilitation notes, and student workbook prompts. No advanced training required — the framework teaches itself.' },
              { label: 'Cohort Structure', desc: 'Designed for groups of 10–30. Works as a semester elective, a leadership cohort, or a chapter-based program. Adaptable to your calendar.' },
              { label: 'Facilitator Support', desc: 'Access to training materials and direct support from The Founded Project team during your first cohort run.' },
            ].map((item) => (
              <div key={item.label} className="border-t-2 pt-6" style={{ borderColor: '#D8AB69' }}>
                <h3 style={{ color: '#0F1B1F' }} className="text-lg font-semibold mb-3">{item.label}</h3>
                <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#0F1B1F' }} className="p-10 rounded-sm">
            <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-6">What students walk away with</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'A written personal mission statement',
                'A capital inventory (health, time, relationships, reputation, IP, finances)',
                'A drafted personal advisory board',
                'A personal data stewardship plan',
                'A survival pattern audit and strategic reframe',
                'A community accountability structure',
              ].map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <span style={{ color: '#D8AB69' }}>→</span>
                  <p className="text-gray-300 text-sm">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 style={{ color: '#0F1B1F' }} className="text-2xl font-light mb-4">Ready to bring Founded Emerging to your students?</h2>
            <p style={{ color: '#0F1B1F' }} className="text-sm mb-8 opacity-70">Contact us to discuss curriculum licensing, cohort facilitation, and institutional partnerships.</p>
            <a href="/apply" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="inline-block px-8 py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Submit a Partnership Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
