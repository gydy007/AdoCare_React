import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X (Twitter)', href: 'https://x.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
]

const defaultMiddle = {
  title: 'Departments',
  items: [
    { label: 'Cardiology', to: '#' },
    { label: 'Neurosurgery', to: '#' },
    { label: 'General Surgery', to: '#' },
    { label: 'Pediatrics', to: '#' },
    { label: 'Emergency Care', to: '/emergency' },
  ],
}

export default function Footer({ middleColumn = defaultMiddle }) {
  return (
    <footer className="bg-navy text-[#c8d9e0] pt-[70px] mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pb-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <div className="text-[1.3rem] font-bold text-white mb-3.5 tracking-tight">Ado Care</div>
          <p className="text-sm leading-relaxed mb-6 max-w-xs text-ink-300">
            Private hospital with a human touch. Compassionate care, modern medicine, and a healthier tomorrow for
            Ado-Ekiti and beyond.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal hover:-translate-y-1 transition"
              >
                <span className="text-xs">{label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[0.95rem] mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            <li><Link to="/" className="text-sm text-ink-300 hover:text-teal transition">Home</Link></li>
            <li><Link to="/about" className="text-sm text-ink-300 hover:text-teal transition">About Us</Link></li>
            <li><Link to="/specialists" className="text-sm text-ink-300 hover:text-teal transition">Our Specialists</Link></li>
            <li><Link to="/blogs" className="text-sm text-ink-300 hover:text-teal transition">Blogs</Link></li>
            <li><Link to="/appointment" className="text-sm text-ink-300 hover:text-teal transition">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[0.95rem] mb-4">{middleColumn.title}</h4>
          <ul className="space-y-2.5">
            {middleColumn.items.map((item) => (
              <li key={item.label}>
                {item.to.startsWith('/') ? (
                  <Link to={item.to} className="text-sm text-ink-300 hover:text-teal transition">{item.label}</Link>
                ) : (
                  <a href={item.to} className="text-sm text-ink-300 hover:text-teal transition">{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[0.95rem] mb-4">Contact Us</h4>
          <ul className="space-y-3.5">
            <li className="flex gap-3 text-sm text-ink-300"><span>📍</span><span>25 Harbor Avenue, Ado-Ekiti</span></li>
            <li className="flex gap-3 text-sm text-ink-300"><span>📞</span><span>+234 800 123 4567</span></li>
            <li className="flex gap-3 text-sm text-ink-300"><span>✉️</span><span>hello@adocare.com</span></li>
            <li className="flex gap-3 text-sm text-ink-300"><span>🕒</span><span>Mon – Fri: 8AM – 8PM<br />Emergency: 24/7</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-6 md:px-10 max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#7a96a3]">
        <p>© 2026 Ado Care — Compassionate care, advanced medicine.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-teal transition">Privacy Policy</a>
          <a href="#" className="hover:text-teal transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
