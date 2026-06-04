export const metadata = {
  title: 'Apply | Founded Emerging',
  description: 'Apply to Founded Emerging — for students, organizations, and institutional partners.',
}

export default function Apply() {
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
            <h2 style={{ color: '#0F1B1F' }} className="text-2xl font-light mb-6">Who should apply</h2>
            <div className="space-y-6">
              {[
                { label: 'Students (High School & College)', desc: 'You are building your identity, your future, and your sense of what is possible. Founded Emerging gives you the governance infrastructure to do that with intention.' },
                { label: 'Chapter Leaders (Alpha Phi Alpha & Greek Organizations)', desc: 'Bring the Human Enterprise framework to your chapter as a leadership development program. We provide curriculum, facilitation support, and cohort structure.' },
                { label: 'Institutional Partners (HBCUs & Youth Programs)', desc: 'Schools, programs, and organizations ready to integrate Founded Emerging as a course, workshop series, or co-curricular offering.' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 pl-6" style={{ borderColor: '#D8AB69' }}>
                  <p style={{ color: '#0F1B1F' }} className="font-semibold mb-2">{item.label}</p>
                  <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Full Name *</label>
              <input type="text" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="Your full name" />
            </div>
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Email *</label>
              <input type="email" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">I am applying as *</label>
              <select style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none">
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
              <input type="text" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="Where are you based?" />
            </div>
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Why do you want to participate?</label>
              <textarea rows={5} style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none resize-none" placeholder="Tell us where you are and where you are trying to go." />
            </div>
            <button type="submit" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="w-full py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Submit Application
            </button>
            <p style={{ color: '#0F1B1F' }} className="text-xs opacity-60 text-center">Applications are reviewed on a rolling basis. You will hear back within 2 weeks.</p>
          </form>
        </div>
      </section>
    </>
  )
}
