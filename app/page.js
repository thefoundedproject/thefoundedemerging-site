export default function Home() {
  const modules = [
    { num: '01', title: 'Who Am I Building?', desc: 'Before you lead others, you must govern yourself. This module introduces mission, values, and the personal governance framework as the foundation of everything else.' },
    { num: '02', title: 'Your Six Capitals', desc: 'Health, time, relationships, reputation, intellectual property, and finances. You have more than you think. This module maps what you already own.' },
    { num: '03', title: 'The Advisory Board', desc: 'Who is in your corner? You need more than supporters — you need counsel. This module teaches you how to build a real advisory board for your life.' },
    { num: '04', title: 'Survival vs. Strategy', desc: 'What adaptations are you carrying from survival that are costing you now? This module names those patterns and begins the work of trading survival instinct for strategic clarity.' },
    { num: '05', title: 'Data, Identity & Protection', desc: 'Your digital identity is already being built — by you or for you. This module teaches digital self-stewardship and basic data protection for emerging adults.' },
    { num: '06', title: 'Community Architecture', desc: 'Agency without community is fragile. This module introduces cooperative structures, mutual accountability, and organized interdependence.' },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F1B1F', minHeight: '85vh' }} className="flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-6">Founded Emerging</p>
            <h1 className="text-white text-5xl md:text-6xl font-light leading-tight mb-8">
              Govern yourself<br />
              before you<br />
              <span style={{ color: '#D8AB69' }}>govern the world.</span>
            </h1>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-12">
              Founded Emerging is the youth arm of The Founded Project. Human Enterprise Theory applied to high school and college students ready to build lives of real agency, structure, and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/apply" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:opacity-90 transition-opacity">
                Apply to the Program
              </a>
              <a href="/program" style={{ border: '1px solid #D8AB69', color: '#D8AB69' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:bg-white/5 transition-colors">
                See the Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section style={{ backgroundColor: '#D8AB69' }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-4">The gap no one names.</h2>
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed opacity-80">
              Some young people grow up in environments where they are taught how institutions work — before they enter them. Others are expected to figure it out on arrival. Founded Emerging closes that gap.
            </p>
          </div>
          <div style={{ backgroundColor: '#0F1B1F' }} className="p-8 rounded-sm">
            <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-wider mb-4">What students gain</p>
            <ul className="space-y-3">
              {[
                'A personal mission and values framework',
                'A map of their own six capitals',
                'A life advisory board — real counsel, not just mentors',
                'Tools to identify and interrupt survival patterns',
                'Digital identity and data stewardship skills',
                'A model for community-based mutual accountability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span style={{ color: '#D8AB69' }}>→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section style={{ backgroundColor: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Curriculum</p>
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-12">Six modules. One arc.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((mod) => (
              <div key={mod.num} className="border-t-2 pt-6" style={{ borderColor: '#D8AB69' }}>
                <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-2">Module {mod.num}</p>
                <h3 style={{ color: '#0F1B1F' }} className="text-lg font-semibold mb-3">{mod.title}</h3>
                <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-80">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alpha Phi Alpha */}
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Partnership</p>
              <h2 className="text-white text-3xl font-light mb-6">Built for Alpha Phi Alpha — and every community ready to lead.</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded Emerging was developed with Alpha Phi Alpha chapters and HBCU communities in mind. The Human Enterprise Theory framework maps directly onto the fraternity&apos;s commitment to scholarship, manly deeds, and love for all mankind — and gives it a 21st-century governance architecture.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                The program is also available to any high school or college program, youth organization, or educator ready to bring this framework to young people who deserve it.
              </p>
              <a href="/educators" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="inline-block px-6 py-3 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
                Information for Educators
              </a>
            </div>
            <div style={{ backgroundColor: '#1A3A42' }} className="p-10 rounded-sm">
              <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-6">Who this is built for</p>
              <ul className="space-y-4">
                {[
                  { group: 'Alpha Phi Alpha Chapters', desc: 'Chapter-based cohorts with curriculum aligned to fraternal leadership development.' },
                  { group: 'HBCU Communities', desc: 'Campus programs for students navigating the intersection of legacy, ambition, and systemic pressure.' },
                  { group: 'High School Programs', desc: 'Curriculum-ready modules for college-prep, leadership, and advisory programs.' },
                  { group: 'Youth Organizations', desc: 'Adaptable for community-based organizations serving emerging adults in any context.' },
                ].map((item) => (
                  <li key={item.group}>
                    <p style={{ color: '#D8AB69' }} className="text-sm font-semibold mb-1">{item.group}</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section style={{ backgroundColor: '#D8AB69' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-4">Ready to begin?</h2>
          <p style={{ color: '#0F1B1F' }} className="text-lg mb-8 opacity-80">Applications are open for students, organizations, and institutional partners.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:opacity-90 transition-opacity">
              Apply Now
            </a>
            <a href="/educators" style={{ border: '2px solid #0F1B1F', color: '#0F1B1F' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:bg-black/5 transition-colors">
              Educator Information
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
