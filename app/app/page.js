export default function Home() {
  const modules = [
    { num: '01', title: 'Who Am I Building?', desc: 'Governance starts with clarity about who you are and what you are trying to build. This module introduces mission, values, and the framework that holds everything else together.' },
    { num: '02', title: 'Your Six Capitals', desc: 'You have more than you know. Health, time, relationships, reputation, intellectual property, finances. This module maps what you already own and what needs protection.' },
    { num: '03', title: 'The Advisory Board', desc: 'Supporters keep you warm. Counsel keeps you accurate. This module walks you through building a real advisory board for your life — people who will tell you the truth.' },
    { num: '04', title: 'Survival and Strategy', desc: 'Your body learned to survive. Some of those adaptations are still running. This module names them with respect and asks which ones are serving you now.' },
    { num: '05', title: 'Data, Identity and Protection', desc: 'Your digital identity is already being built. This module teaches you to be the one doing the building, and to understand what you are agreeing to when you use platforms.' },
    { num: '06', title: 'Community Architecture', desc: 'Agency held alone is brittle. This module builds the structures that make cooperation real — mutual accountability, organized support, and collective strength.' },
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
              Some young people arrive at institutions already knowing how they work. They were taught, usually without being told it was happening. Others arrive and have to figure it out alone. That gap has a name now. Founded Emerging closes it.
            </p>
          </div>
          <div style={{ backgroundColor: '#0F1B1F' }} className="p-8 rounded-sm">
            <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-wider mb-4">What students gain</p>
            <ul className="space-y-3">
              {[
                'A personal mission and values framework',
                'A map of their own six capitals',
                'A life advisory board built on real counsel',
                'Language for the survival patterns they are already carrying',
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

      {/* Who it's for */}
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Built For</p>
              <h2 className="text-white text-3xl font-light mb-6">For young people who are already doing the work without the map.</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Founded Emerging is for students who feel the weight of building something real but haven&apos;t been given the structural tools to protect what they build. The framework meets them where they are.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                It works in classrooms, youth organizations, leadership programs, and any space where someone is ready to hand young people something more than inspiration.
              </p>
              <a href="/educators" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="inline-block px-6 py-3 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
                Information for Educators
              </a>
            </div>
            <div style={{ backgroundColor: '#1A3A42' }} className="p-10 rounded-sm">
              <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-6">Who this is built for</p>
              <ul className="space-y-4">
                {[
                  { group: 'Students', desc: 'High school and college students building lives without an institutional inheritance to fall back on.' },
                  { group: 'Youth Leadership Programs', desc: 'Organizations that already have young people\'s trust and want to give them real governance tools.' },
                  { group: 'Educators', desc: 'Teachers and advisors who see what their students are capable of and want curriculum that matches it.' },
                  { group: 'Community Organizations', desc: 'Any group serving emerging adults who need structure alongside support.' },
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
