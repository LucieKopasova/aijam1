import './App.css'

function App() {
  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Header/Navigation */}
      <nav className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: '#0e0e0e' }}>
        <div className="flex items-center gap-2">
          <span style={{ color: '#69daff' }}>⊙</span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 'bold' }}>ThermoSync</span>
        </div>
        <div className="flex gap-4">
          <a href="#" style={{ color: '#adaaaa' }} className="hover:text-white">shopping_cart</a>
          <a href="#" style={{ color: '#adaaaa' }} className="hover:text-white">menu</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}>
          ThermoSync
        </h1>
        <p className="text-2xl md:text-3xl mb-4 font-semibold" style={{ color: '#69daff', fontFamily: "'Space Grotesk', sans-serif" }}>
          The Future of Footwear Care
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#adaaaa' }}>
          Engineered precision for the modern entryway. Advanced thermal sensors meet aerospace-grade construction to protect your most valuable assets.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button style={{ background: 'linear-gradient(135deg, #69daff 0%, #00cffc 100%)', color: '#004a5d', borderRadius: '4px' }} className="px-8 py-3 font-bold hover:shadow-lg transition-all">
            Secure Yours Now
          </button>
          <button style={{ backgroundColor: '#131313', color: '#69daff', border: '1px solid #69daff', borderRadius: '4px' }} className="px-8 py-3 font-bold hover:bg-[#1a1919] transition-all">
            Technical Specs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderLeft: '4px solid #69daff' }}>
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Bluetooth App Monitoring</h3>
            <p style={{ color: '#adaaaa' }}>Precision control at your fingertips. Adjust heat intensity and monitor mat integrity via the SyncApp.</p>
          </div>
          {/* Feature 2 */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderLeft: '4px solid #69daff' }}>
            <div className="text-3xl mb-4">🔋</div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>24h Battery Life</h3>
            <p style={{ color: '#adaaaa' }}>Wireless freedom without compromise. Our high-density cells ensure your care cycle never stops.</p>
          </div>
          {/* Feature 3 */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderLeft: '4px solid #69daff' }}>
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Stainless Fiber Construction</h3>
            <p style={{ color: '#adaaaa' }}>Indestructible design. Aerospace-grade fibers woven with thermal conductors for lifetime durability.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Choose Your Intensity</h2>
        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #69daff' }}>
                <th className="text-left py-4 px-6" style={{ color: '#adaaaa' }}>Feature</th>
                <th className="text-center py-4 px-6" style={{ color: '#69daff', fontFamily: "'Space Grotesk', sans-serif" }}>Base</th>
                <th className="text-center py-4 px-6" style={{ color: '#69daff', fontFamily: "'Space Grotesk', sans-serif" }}>Pro</th>
                <th className="text-center py-4 px-6" style={{ color: '#69daff', fontFamily: "'Space Grotesk', sans-serif" }}>Ultra</th>
                <th className="text-center py-4 px-6" style={{ color: '#ffd700', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold', textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}>✨ Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #262626' }}>
                <td className="py-4 px-6" style={{ color: '#adaaaa' }}>Cleaning Intensity</td>
                <td className="text-center py-4 px-6">Standard</td>
                <td className="text-center py-4 px-6">Deep Clean+</td>
                <td className="text-center py-4 px-6">Industrial</td>
                <td className="text-center py-4 px-6" style={{ color: '#ffd700', fontWeight: 'bold' }}>Premium Control</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #262626' }}>
                <td className="py-4 px-6" style={{ color: '#adaaaa' }}>App Features</td>
                <td className="text-center py-4 px-6">Status Only</td>
                <td className="text-center py-4 px-6">Full Control</td>
                <td className="text-center py-4 px-6">AI Automation</td>
                <td className="text-center py-4 px-6" style={{ color: '#ffd700', fontWeight: 'bold' }}>AI + Custom Rules</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #262626' }}>
                <td className="py-4 px-6" style={{ color: '#adaaaa' }}>Active Zones</td>
                <td className="text-center py-4 px-6">1 Zone</td>
                <td className="text-center py-4 px-6">3 Zones</td>
                <td className="text-center py-4 px-6">Multizone</td>
                <td className="text-center py-4 px-6" style={{ color: '#ffd700', fontWeight: 'bold' }}>Full Coverage</td>
              </tr>
              <tr>
                <td className="py-4 px-6" style={{ color: '#adaaaa' }}>Finish</td>
                <td className="text-center py-4 px-6">Matte</td>
                <td className="text-center py-4 px-6">Carbon</td>
                <td className="text-center py-4 px-6">Titanium</td>
                <td className="text-center py-4 px-6" style={{ color: '#ffd700', fontWeight: 'bold' }}>Gold</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Precision Feedback</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderTop: '3px solid #69daff' }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#69daff' }}>★</span>
              ))}
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#ffffff' }}>
              "I was skeptical about a smart mat, but the maintenance cycles have doubled the life of my rare sneaker collection."
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold', color: '#ffffff' }}>Marcus Sterling</p>
            <p style={{ color: '#adaaaa', fontSize: '14px' }}>CTO, Vertex Dynamics</p>
          </div>
          {/* Testimonial 2 */}
          <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderTop: '3px solid #69daff' }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#69daff' }}>★</span>
              ))}
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#ffffff' }}>
              "The thermal accuracy is unparalleled. It's the first smart mat that actually understands the materials it's treating."
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold', color: '#ffffff' }}>Elena Vance</p>
            <p style={{ color: '#adaaaa', fontSize: '14px' }}>Footwear Designer</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ready for the Upgrade?</h2>
        <p className="mb-8" style={{ color: '#adaaaa' }}>Join the precision revolution. Limited edition now available.</p>
        <button style={{ background: 'linear-gradient(135deg, #69daff 0%, #00cffc 100%)', color: '#004a5d', borderRadius: '4px' }} className="px-12 py-4 font-bold text-lg hover:shadow-lg transition-all">
          Pre-order Now
        </button>
        <p className="mt-4" style={{ color: '#adaaaa', fontSize: '14px' }}>Next Batch Shipping: Jan 2025</p>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: '#262626', backgroundColor: '#131313', color: '#adaaaa' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 'bold', color: '#ffffff' }}>ThermoSync</p>
              <p style={{ fontSize: '14px' }}>© 2024 ThermoSync. Precision Thermal Engineering.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Specifications</a>
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
