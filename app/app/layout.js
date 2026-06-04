import './globals.css'

export const metadata = {
  title: 'Founded Emerging | Governance of Self Before Governance of the World',
  description: 'Founded Emerging is the youth arm of The Founded Project. Human Enterprise Theory applied to emerging adults — the governance framework for young people building serious lives.',
  keywords: 'Founded Emerging, youth leadership, emerging adult governance, Human Enterprise Theory, youth development, personal governance, student leadership',
  openGraph: {
    title: 'Founded Emerging',
    description: 'Governance of self before governance of the world.',
    url: 'https://thefoundedemerging.app',
    type: 'website',
  },
}

function Nav() {
  return (
    <nav style={{ backgroundColor: '#0F1B1F' }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-semibold text-lg tracking-wide">
          Founded <span style={{ color: '#D8AB69' }}>Emerging</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/program" className="text-gray-300 hover:text-white text-sm transition-colors">The Program</a>
          <a href="/educators" className="text-gray-300 hover:text-white text-sm transition-colors">Educators</a>
          <a href="/apply" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="px-4 py-2 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
            Apply
          </a>
        </div>
        <button className="md:hidden text-white" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F1B1F' }} className="text-gray-400 py-16 px-6 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-white font-semibold text-lg mb-3">Founded <span style={{ color: '#D8AB69' }}>Emerging</span></div>
            <p className="text-sm leading-relaxed">Governance of self before governance of the world.</p>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#D8AB69' }} className="mt-4" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Program</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/program" className="hover:text-white transition-colors">The Program</a></li>
              <li><a href="/educators" className="hover:text-white transition-colors">For Educators</a></li>
              <li><a href="/apply" className="hover:text-white transition-colors">Apply</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Ecosystem</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://thefoundedproject.com" className="hover:text-white transition-colors">The Founded Project</a></li>
              <li><a href="https://thefounded.app" className="hover:text-white transition-colors">The Founded App</a></li>
              <li><a href="https://groundedvote.com" className="hover:text-white transition-colors">GroundedVote</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs">© 2026 The Founded Project · Dr. Stephen Thompson, DC, DACM, FAIHM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
