export default function MaaKatyayaniLogistics() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold">Maa Katyayani Logistics</h1>
            <p className="text-sm text-blue-200">mklexim.com</p>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#tracking" className="hover:text-yellow-300">Tracking</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Reliable Logistics & Export Solutions
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Fast, secure, and efficient freight forwarding, transportation,
              warehousing, and EXIM services across India and worldwide.
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow hover:bg-yellow-300 transition">
                Get a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-blue-900 transition">
                Track Shipment
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
              alt="Logistics"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-blue-900 mb-6">About Us</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Maa Katyayani Logistics is a trusted logistics and export-import
            company dedicated to delivering world-class freight and supply chain
            solutions. We specialize in transportation, cargo handling,
            warehousing, customs clearance, and international trade support.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-blue-900 mb-14">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Freight Forwarding",
                desc: "Air, sea, and road freight solutions with timely delivery.",
              },
              {
                title: "Warehousing",
                desc: "Secure and scalable storage facilities for all business needs.",
              },
              {
                title: "Customs Clearance",
                desc: "Smooth import-export documentation and customs support.",
              },
              {
                title: "Domestic Transport",
                desc: "Reliable transportation network across India.",
              },
              {
                title: "International Shipping",
                desc: "Global cargo movement with end-to-end tracking.",
              },
              {
                title: "Supply Chain Management",
                desc: "Optimized logistics operations for business growth.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border hover:shadow-2xl transition"
              >
                <h4 className="text-2xl font-semibold text-blue-800 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Track Your Shipment</h3>
          <p className="text-blue-100 mb-8">
            Enter your shipment tracking ID to get real-time updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              className="px-5 py-4 rounded-2xl text-gray-800 w-full md:w-96"
            />
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-300 transition">
              Track Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold text-blue-900 mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              Reach out to us for transportation, export-import, or logistics
              support.
            </p>

            <div className="space-y-3 text-lg">
              <p><strong>Email:</strong> info@mklexim.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Website:</strong> www.mklexim.com</p>
              <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-3xl shadow-lg space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-2xl px-4 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-2xl px-4 py-3"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-2xl px-4 py-3"
            ></textarea>

            <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-6 text-center">
        <p>
          © 2026 Maa Katyayani Logistics | All Rights Reserved | mklexim.com
        </p>
      </footer>
    </div>
  );
}
