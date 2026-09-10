import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/specialists', label: 'Our Specialists' },
  { to: '/blogs', label: 'Blogs' },
]

const linkClass = ({ isActive }) =>
  `text-[18px] font-medium pb-1 border-b-2 transition-colors ${
    isActive ? 'text-teal border-teal' : 'text-[#1f4a5a] border-transparent hover:text-teal hover:border-teal'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const { user } = useAuth()

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target) && open) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [open])

  const authTo = user ? '/dashboard' : '/appointment#auth-panel'
  const authLabel = user ? 'Dashboard' : 'Sign In'

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full h-[70px] px-6 lg:px-[60px] flex items-center justify-between bg-[#afebf527] backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] z-[1000]">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault()
          window.location.assign('/')
        }}
        className="text-[1.4rem] font-bold text-navy tracking-tight"
      >
        Ado Care
      </a>

      <div className="hidden lg:flex gap-10">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <NavLink
          to="/emergency"
          className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-full text-sm font-medium bg-emergency text-white hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          Emergency
        </NavLink>
        <NavLink
          to="/appointment"
          className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-full text-sm font-medium bg-teal-dark text-white hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          Book An Appointment
        </NavLink>
        <NavLink
          to={authTo}
          className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-full text-sm font-medium bg-teal-dark text-white hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          {authLabel}
        </NavLink>
      </div>

      {/* Mobile toggle */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        className="lg:hidden flex flex-col gap-[5px] p-2"
      >
        <span className={`w-6 h-[2.5px] bg-navy rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`w-6 h-[2.5px] bg-navy rounded transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-[2.5px] bg-navy rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-[70px] right-0 w-1/2 max-w-[280px] bg-white border-l border-teal/10 shadow-lift flex flex-col max-h-[calc(100vh-70px)] overflow-y-auto z-[999]">
          <div className="flex flex-col py-5 border-b border-black/5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-6 py-3.5 text-[#1f4a5a] font-medium border-l-[3px] border-transparent hover:bg-brand-bg hover:border-teal hover:text-teal transition"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-3 p-4">
            <NavLink onClick={() => setOpen(false)} to="/emergency" className="text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-emergency text-white">
              Emergency
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/appointment" className="text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-dark text-white">
              Book An Appointment
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to={authTo} className="text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-dark text-white">
              {authLabel}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
