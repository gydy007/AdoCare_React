import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import ArticleReader from '../components/ArticleReader'
import { useAuth } from '../hooks/useAuth'
import articles from '../data/articles'

const specializations = [
  { icon: '/assets/family.jpg', title: 'Primary Care', text: 'Preventive checkups, family medicine, and long-term health guidance.' },
  { icon: '/assets/diagnostics.jpg', title: 'Mental Health', text: 'Compassionate support for emotional wellbeing and therapy-led recovery.' },
  { icon: '/assets/healthy_lifestyle.png', title: 'Diagnostics', text: 'Fast, accurate laboratory and imaging services to guide confident care decisions.' },
  { icon: '/assets/doctor_neurology.png', title: 'Orthopedics', text: 'Joint, bone, and mobility care using minimally invasive and rehab-focused methods.' },
  { icon: '/assets/nutrition_superfoods.png', title: 'Pediatrics', text: 'Family-centered health support for newborns, children, and adolescents.' },
  { icon: '/assets/healthy_lifestyle.png', title: 'Cardiology', text: 'Advanced heart diagnostics, monitoring, and treatment plans for every patient.' },
]

const doctors = [
  { name: 'Dr. Adebayo Ogunleye', role: 'Neurosurgeon', image: '/assets/doctor1.jpg' },
  { name: 'Dr. Folashade Eniola', role: 'Therapist', image: '/assets/doctor2.jpg' },
  { name: 'Dr. Chidinma Nwosu', role: 'Pediatrician', image: '/assets/doctor3.jpg' },
  { name: 'Pharm. Emeka Azubuike', role: 'Pharmacist', image: '/assets/doctor4.jpg' },
  { name: 'Dr. Amara Okechukwu', role: 'Dentist', image: '/assets/doctor5.jpg' },
  { name: 'Dr. Ibrahim Musa', role: 'Surgeon', image: '/assets/doctor60.jpg' },
]

const heroImages = ['/assets/hero1.jpg', '/assets/hero2.jpg', '/assets/hero3.jpg', '/assets/hero4.jpg', '/assets/hero7.jpg', '/assets/hero8.jpg']

export default function Home() {
  const { user, signIn } = useAuth()
  const navigate = useNavigate()
  const [openArticle, setOpenArticle] = useState(null)

  const [apptName, setApptName] = useState('')
  const [apptDate, setApptDate] = useState('')
  const [apptMsg, setApptMsg] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitAppointment(e) {
    e.preventDefault()
    if (!apptName || !apptDate) {
      alert('Please fill in all required fields')
      return
    }
    setApptMsg(true)
    setApptName('')
    setApptDate('')
    setTimeout(() => setApptMsg(false), 5000)
  }

  function submitSignin(e) {
    e.preventDefault()
    if (!email || !password) {
      alert('Please fill in all fields')
      return
    }
    if (password !== 'admin') {
      alert('Use password "admin" for this demo sign in')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }
    signIn(email)
    navigate('/dashboard')
  }

  return (
    <>
      {/* HERO */}
      <section>
        <div className="relative w-full min-h-[calc(100vh-70px)] flex flex-col md:flex-row items-center justify-between gap-10 px-6 sm:px-10 md:px-20 py-14 md:py-16 overflow-hidden rounded-t-[10px] rounded-b-[40px]">
          <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
            <source src="/assets/background%20hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(115deg, rgba(42,63,92,0.99) 0%, rgba(77,86,100,0.7) 45%, rgba(214,227,245,0.6) 100%)' }} />

          <div className="relative z-[2] flex-1 max-w-[560px] text-white text-center md:text-left">
            <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.15] tracking-tight mb-4 text-white">
              Exceptional Care, Extraordinary Results
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-[460px] mx-auto md:mx-0">
              Where world-class medicine meets genuine human empathy.
            </p>
            <Link
              to="/appointment#booking-panel"
              className="inline-block bg-teal text-white border-none px-10 py-4 rounded-full text-[1.05rem] font-semibold shadow-[0_10px_30px_rgba(27,123,138,0.35)] hover:bg-teal-dark hover:-translate-y-1 transition mb-8"
            >
              Request an Appointment
            </Link>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-[18px] py-2 rounded-full text-[0.95rem] font-medium border border-white/20">
                📞 24/7 emergency line
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-[18px] py-2 rounded-full text-[0.95rem] font-medium border border-white/20">
                📊 95% Success Rate
              </span>
            </div>
          </div>

          <div className="relative z-[2] flex-1 max-w-[520px] w-full overflow-hidden rounded-[28px] min-h-[320px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-[#f0f0f0]">
            {heroImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="hero-carousel-img absolute top-0 left-0 w-full h-full object-cover rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
              />
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div className="flex flex-wrap items-center gap-10 bg-white rounded-[40px] p-8 sm:p-12 md:p-14 mx-4 sm:mx-8 md:mx-10 my-10 md:my-16 shadow-card border border-black/[0.03]">
          <div className="flex-1 basis-[35%] min-w-[260px]">
            <Reveal variant="left">
              <img src="/assets/download.jpg" alt="" className="w-full h-auto max-h-[380px] object-cover rounded-[28px] shadow-[0_16px_40px_rgba(8,40,50,0.08)] hover:scale-[1.02] transition" />
            </Reveal>
          </div>

          <div className="flex-[2] basis-[50%] min-w-[280px]">
            <Reveal variant="bottom" as="span" className="inline-block text-sm uppercase tracking-[2px] text-teal font-semibold bg-teal/[0.08] px-[18px] py-1 rounded-full mb-3">
              About us
            </Reveal>
            <Reveal variant="right" as="h1" className="text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-tight text-navy my-2 mb-5">
              Clinical Excellence. Compassionate Care. Community Commitment.
            </Reveal>
            <Reveal variant="right" as="p" className="text-ink-700 text-[1.05rem] max-w-[640px] mb-4">
              Lumina Hospital is a fully accredited private healthcare institution dedicated to delivering
              world-class, affordable medical services to the people of Ado-Ekiti and its environs. We bridge the
              gap between advanced medical technology and accessible healthcare&mdash;serving civil servants,
              traders, students, and families alike.
            </Reveal>
            <Reveal variant="right" as="p" className="text-ink-700 text-[1.05rem] max-w-[640px]">
              At Lumina Hospital, we restore wellness with professionalism and compassion&mdash;contributing
              meaningfully to the health transformation of Ado-Ekiti and beyond.
            </Reveal>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-9 mt-5">
            {specializations.map((s, i) => (
              <Reveal key={s.title} variant="fade" className="bg-teal-mist rounded-2xl min-h-[200px] p-6" style={{ transitionDelay: `${0.1 * i}s` }}>
                <div className="flex flex-col items-center justify-center text-center h-full gap-3">
                  <img src={s.icon} alt={`${s.title} icon`} className="w-[82px] h-[82px] rounded-[30px] object-contain drop-shadow-[0_6px_12px_rgba(27,123,138,0.15)]" />
                  <h3 className="text-[1.15rem] text-navy m-0">{s.title}</h3>
                  <p className="text-[0.92rem] leading-relaxed text-ink-600 m-0">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISTS PREVIEW */}
      <section>
        <h1 className="text-center text-[32px] mb-10">The Specialists Behind Your Services</h1>
        <div className="flex flex-wrap justify-around gap-10 px-6 md:px-24 py-10 md:py-24">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="flex flex-col gap-4 justify-center items-center bg-white rounded-[40px] py-5 basis-[30%] min-w-[140px] hover:-translate-y-5 hover:bg-transparent transition">
              <img src={doctor.image} alt={doctor.name} className="w-[100px] rounded-full object-cover" />
              <h3 className="text-base">{doctor.name}</h3>
              <p>{doctor.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="flex flex-col gap-6 mx-auto mt-16 px-6 md:px-7 pt-9 pb-11 bg-[#F6F9F8] w-[92%] max-w-[1200px] rounded-[32px] shadow-[0_20px_48px_rgba(15,118,110,0.08)] border border-teal-dark/[0.06]">
        <h1 className="text-center text-blog-900 text-[clamp(2.1rem,3vw,3rem)] tracking-tight m-0">Wellness Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[2, 1].map((id) => {
            const a = articles[id]
            return (
              <article key={id} className="bg-white p-5 rounded-[22px] flex flex-col shadow-[0_12px_26px_rgba(44,62,53,0.06)] border border-teal-dark/5 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(44,62,53,0.08)] transition overflow-hidden">
                <div className="rounded-[18px] overflow-hidden"><img src={a.image} alt="" className="w-full h-[210px] object-cover" /></div>
                <div className="flex flex-col gap-3 pt-4 flex-1">
                  <div className="text-blog-500 text-xs font-bold">{a.readTime} • By {a.author}</div>
                  <h3 className="text-[1.25rem] leading-snug text-blog-900 m-0">{a.title}</h3>
                  <p className="text-blog-700 leading-relaxed m-0 flex-1">{a.excerpt}</p>
                  <button onClick={() => setOpenArticle(id)} className="text-left border-none bg-transparent text-teal-dark font-bold p-0 mt-1.5 cursor-pointer">
                    Read Full Article →
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-teal-pale border border-teal-dark/5 rounded-[22px] min-h-[160px] flex flex-col justify-center p-5">
            <h4 className="mb-3 text-[1.16rem] text-blog-900 flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-amber inline-block" />Hydrate first</h4>
            <p className="m-0 leading-relaxed text-blog-700">Start your morning with a glass of water and lemon to boost metabolism.</p>
          </div>
          <div className="bg-teal-pale border border-teal-dark/5 rounded-[22px] min-h-[160px] flex flex-col justify-center p-5">
            <h4 className="mb-3 text-[1.16rem] text-blog-900 flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-amber inline-block" />Colorful plate</h4>
            <p className="m-0 leading-relaxed text-blog-700">Fill half your plate with vegetables and fruits for essential vitamins.</p>
          </div>
          <div className="bg-teal-pale border border-teal-dark/5 rounded-[22px] min-h-[160px] flex flex-col justify-center p-5">
            <h4 className="mb-3 text-[1.16rem] text-blog-900 flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-amber inline-block" />Whole grains</h4>
            <p className="m-0 leading-relaxed text-blog-700">Swap refined carbs for quinoa, oats, or brown rice for sustained energy.</p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT / SIGN IN */}
      <section className="mx-4 md:mx-10 my-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-[32px] p-8 md:p-11 shadow-soft border border-teal/10 flex flex-col hover:shadow-lift hover:-translate-y-1 transition">
            <div className="w-[60px] h-[60px] rounded-2xl bg-teal/[0.12] text-teal text-[1.8rem] flex items-center justify-center mb-4">
              <i className="fas fa-calendar-check" />
            </div>
            <h3 className="text-[1.6rem] font-bold text-navy mb-3">Book an appointment</h3>
            <p className="text-ink-600 mb-6">Same-day availability with top specialists.</p>
            <form onSubmit={submitAppointment} className="flex-1 flex flex-col">
              <div className="flex flex-col mb-5">
                <label className="text-sm font-semibold text-navy mb-2">Full name</label>
                <input value={apptName} onChange={(e) => setApptName(e.target.value)} type="text" placeholder="e.g. Jane Cooper" required className="px-4 py-3 border border-[#e0e8ec] rounded-xl bg-brand-bg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" />
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-sm font-semibold text-navy mb-2">Preferred date</label>
                <input value={apptDate} onChange={(e) => setApptDate(e.target.value)} type="date" required className="px-4 py-3 border border-[#e0e8ec] rounded-xl bg-brand-bg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" />
              </div>
              <button type="submit" className="btn-full mt-auto flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition">
                <i className="fas fa-clock" /> Request appointment
              </button>
            </form>
            {apptMsg && <div className="mt-3 font-medium text-teal-dark">✓ Request received, we'll call you shortly.</div>}
          </div>

          {user ? (
            <div className="relative min-h-[390px] overflow-hidden rounded-[18px] bg-navy shadow-[0_15px_32px_rgba(11,42,59,0.14)]">
              <img src="/assets/child%202%20(2).jpg" alt="" className="w-full h-full min-h-[390px] object-cover opacity-70" />
              <div className="absolute inset-x-0 bottom-0 p-7 pb-7 text-white" style={{ background: 'linear-gradient(transparent, rgba(11,42,59,0.94) 32%)' }}>
                <span className="text-teal-light text-xs font-extrabold tracking-[0.12em] uppercase">Welcome back</span>
                <h3 className="mt-2 mb-1.5 text-white text-[1.6rem]">Your care is in good hands.</h3>
                <p className="mb-4 text-[#d5e4e7] text-sm leading-relaxed">
                  Review your visits, manage appointments, and keep your health goals moving forward.
                </p>
                <Link to="/dashboard" className="inline-flex items-center gap-2 bg-teal-dark text-white px-6 py-2.5 rounded-full font-medium hover:-translate-y-0.5 transition">
                  <i className="fas fa-chart-line" /> Open dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white border-[1.5px] border-teal/[0.15] rounded-[32px] p-8 md:p-11 shadow-soft flex flex-col hover:shadow-lift hover:-translate-y-1 transition">
              <h3 className="text-[1.6rem] font-bold text-navy mb-3 flex items-center gap-3"><i className="fas fa-lock text-[1.4rem]" /> Secure sign in</h3>
              <form onSubmit={submitSignin} className="flex-1">
                <div className="flex flex-col mb-5">
                  <label className="text-sm font-semibold text-navy mb-2">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="patient@adocare.com" required className="px-4 py-3 border border-[#e0e8ec] rounded-xl bg-brand-bg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="text-sm font-semibold text-navy mb-2">Password</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required className="px-4 py-3 border border-[#e0e8ec] rounded-xl bg-brand-bg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition">
                  <i className="fas fa-arrow-right" /> Sign in
                </button>
              </form>
              <p className="mt-5 text-[0.8rem] text-ink-600">Demo password: <strong>admin</strong></p>
            </div>
          )}
        </div>
      </section>

      {/* EMERGENCY CONTACT */}
      <section className="pt-0 mb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-teal-mist rounded-[60px] px-8 sm:px-11 py-9 flex flex-wrap items-center justify-between gap-6 border border-teal/10">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-rose/10 text-rose px-4 py-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-wide">
                <i className="fas fa-phone-alt" /> 24/7 emergency
              </span>
              <h2 className="mt-2 mb-0.5 font-semibold text-[1.8rem] text-navy">+234 800 123 4567</h2>
              <p className="text-[#2b4a5e]">Immediate care, every moment matters.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+2348001234567" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-rose shadow-[0_6px_16px_rgba(177,62,62,0.25)] hover:bg-rose-dark hover:-translate-y-0.5 transition">
                <i className="fas fa-ambulance" /> Call now
              </a>
              <Link to="/emergency" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold border-[1.5px] border-rose text-rose hover:bg-rose/[0.08] hover:-translate-y-0.5 transition">
                <i className="fas fa-map-marker-alt" /> Find ER
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ArticleReader articleId={openArticle} onClose={() => setOpenArticle(null)} />
    </>
  )
}
