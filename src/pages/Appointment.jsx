import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useAuth } from '../hooks/useAuth'

const inputClass =
  'w-full px-3.5 py-3 border border-[#d7e3e7] rounded-[9px] bg-brand-bg text-navy outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition'
const labelClass = 'text-ink-700 text-[0.83rem] font-extrabold'

export default function Appointment() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState('signin')

  const [signinEmail, setSigninEmail] = useState('')
  const [signinPassword, setSigninPassword] = useState('')
  const [signinMsg, setSigninMsg] = useState(null)

  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupMsg, setSignupMsg] = useState(null)

  const [booking, setBooking] = useState({ name: '', phone: '', department: '', date: '', note: '' })
  const [bookingMsg, setBookingMsg] = useState(null)

  function submitSignin(e) {
    e.preventDefault()
    if (signinPassword !== 'admin') {
      setSigninMsg({ type: 'error', text: 'Use password "admin" for this demo sign in.' })
      return
    }
    signIn(signinEmail.trim())
    setSigninMsg({ type: 'success', text: 'Signed in successfully. Redirecting to your dashboard…' })
    navigate('/dashboard')
  }

  function submitSignup(e) {
    e.preventDefault()
    signIn(signupEmail.trim())
    setSignupMsg({ type: 'success', text: 'Account created. Dashboard is now available in the navigation.' })
  }

  function submitBooking(e) {
    e.preventDefault()
    setBookingMsg('Request received. Our care coordinator will call you shortly.')
    setBooking({ name: '', phone: '', department: '', date: '', note: '' })
  }

  return (
    <>
      <section className="max-w-[900px] mx-auto px-6 pt-[86px] pb-9 text-center">
        <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">
          <i className="fas fa-calendar-check" /> Patient access
        </span>
        <h1 className="mt-4 mb-3 text-navy text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] tracking-tight">Care starts with a conversation.</h1>
        <p className="max-w-[620px] mx-auto text-ink-600 text-[1.05rem] leading-[1.75]">
          Sign in to your account or create one, then tell us when you would like to be seen. Our team will confirm
          the best available time.
        </p>
      </section>

      <section id="auth-panel" className="grid gap-6 w-[min(920px,calc(100%-40px))] mx-auto mb-20 scroll-mt-24">
        <div className="p-6 sm:p-8 md:p-11 bg-white border border-teal/10 rounded-[22px] shadow-soft">
          <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Your account</span>
          <h2 className="mt-2 mb-1 text-navy text-[clamp(1.6rem,3vw,2.2rem)]">Welcome to Ado Care</h2>
          <p className="text-ink-500">Choose how you would like to continue.</p>

          <div className="flex gap-1.5 w-fit my-7 p-1.5 bg-teal-pale rounded-[10px]">
            <button
              onClick={() => setTab('signin')}
              className={`px-6 py-2.5 rounded-lg font-extrabold transition ${tab === 'signin' ? 'bg-teal-dark text-white shadow-[0_4px_12px_rgba(19,97,110,0.18)]' : 'text-ink-600'}`}
            >
              Sign in
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`px-6 py-2.5 rounded-lg font-extrabold transition ${tab === 'signup' ? 'bg-teal-dark text-white shadow-[0_4px_12px_rgba(19,97,110,0.18)]' : 'text-ink-600'}`}
            >
              Sign up
            </button>
          </div>

          {tab === 'signin' ? (
            <form onSubmit={submitSignin} className="grid gap-[18px] gap-y-4">
              <div className="grid gap-1.5">
                <label className={labelClass} htmlFor="signin-email">Email address</label>
                <input id="signin-email" type="email" required placeholder="you@example.com" value={signinEmail} onChange={(e) => setSigninEmail(e.target.value)} className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass} htmlFor="signin-password">Password</label>
                <input id="signin-password" type="password" required placeholder="Enter your password (demo: admin)" value={signinPassword} onChange={(e) => setSigninPassword(e.target.value)} className={inputClass} />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition mt-1">
                <i className="fas fa-arrow-right" /> Sign in
              </button>
              {signinMsg && <p className={`text-sm font-bold ${signinMsg.type === 'error' ? 'text-rose' : 'text-teal'}`}>{signinMsg.text}</p>}
            </form>
          ) : (
            <form onSubmit={submitSignup} className="grid gap-[18px] gap-y-4">
              <div className="grid gap-1.5">
                <label className={labelClass} htmlFor="signup-name">Full name</label>
                <input id="signup-name" type="text" required placeholder="Your full name" value={signupName} onChange={(e) => setSignupName(e.target.value)} className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass} htmlFor="signup-email">Email address</label>
                <input id="signup-email" type="email" required placeholder="you@example.com" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass} htmlFor="signup-password">Create password</label>
                <input id="signup-password" type="password" required minLength={6} placeholder="At least 6 characters" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} className={inputClass} />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition mt-1">
                <i className="fas fa-user-plus" /> Create account
              </button>
              {signupMsg && <p className="text-sm font-bold text-teal">{signupMsg.text}</p>}
            </form>
          )}
        </div>

        <div id="booking-panel" className="p-6 sm:p-8 md:p-11 bg-white border border-teal/10 rounded-[22px] shadow-soft">
          <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Next step</span>
          <h2 className="mt-2 mb-1 text-navy text-[clamp(1.6rem,3vw,2.2rem)]">Request an appointment</h2>
          <p className="text-ink-500 mb-6">Share a few details and our care coordinator will call to confirm your visit.</p>

          <form onSubmit={submitBooking} className="grid gap-[18px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <div className="grid gap-1.5">
                <label className={labelClass}>Full name</label>
                <input required type="text" placeholder="e.g. Jane Cooper" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass}>Phone number</label>
                <input required type="tel" placeholder="+234 800 123 4567" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass}>Department</label>
                <select required value={booking.department} onChange={(e) => setBooking({ ...booking, department: e.target.value })} className={inputClass}>
                  <option value="">Choose a department</option>
                  <option>Primary Care</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Diagnostics</option>
                  <option>Orthopedics</option>
                  <option>Mental Health</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label className={labelClass}>Preferred date</label>
                <input required type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} className={inputClass} />
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <label className={labelClass}>What can we help with?</label>
                <textarea rows={4} placeholder="Briefly describe your reason for visiting" value={booking.note} onChange={(e) => setBooking({ ...booking, note: e.target.value })} className={inputClass} />
              </div>
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition">
              <i className="fas fa-calendar-check" /> Request appointment
            </button>
            {bookingMsg && <p className="text-sm font-bold text-teal">{bookingMsg}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
