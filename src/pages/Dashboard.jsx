import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const visits = [
  ['12', 'JUN 2026', 'Primary care consultation', 'Dr. N. Adeyemi · Completed'],
  ['04', 'APR 2026', 'Blood pressure review', 'Dr. M. Rivera · Completed'],
  ['19', 'FEB 2026', 'Laboratory diagnostics', 'Ado Care Lab · Completed'],
  ['08', 'DEC 2025', 'Wellness checkup', 'Dr. N. Adeyemi · Completed'],
  ['21', 'OCT 2025', 'Nutrition consultation', 'Ado Care Wellness Team · Completed'],
  ['06', 'AUG 2025', 'Annual health screening', 'Ado Care Diagnostics · Completed'],
]

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [feedbackMsg, setFeedbackMsg] = useState(null)

  useEffect(() => {
    document.title = 'Dashboard | Ado Care'
  }, [])

  if (!user) {
    return <Navigate to="/appointment#auth-panel" replace />
  }

  function submitFeedback(e) {
    e.preventDefault()
    if (!rating) {
      setFeedbackMsg({ type: 'error', text: 'Please select a rating before sending your feedback.' })
      return
    }
    setFeedbackMsg({ type: 'success', text: 'Thank you. Your feedback has been received.' })
    setRating(0)
    setComment('')
  }

  return (
    <div className="w-[min(1180px,calc(100%-48px))] mx-auto py-[78px] pb-20">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">
            <i className="fas fa-chart-line" /> Patient dashboard
          </div>
          <h1 className="mt-3 mb-2 text-navy text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight">Your care, in one place.</h1>
          <p className="text-ink-600">Welcome back. Review your care history, upcoming visits, and simple ways to stay well.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/appointment#booking-panel" className="inline-flex items-center gap-2 px-[22px] py-2.5 rounded-full text-sm font-medium bg-teal-dark text-white hover:-translate-y-0.5 hover:shadow-lg transition">
            <i className="fas fa-plus" /> Book an appointment
          </a>
          <button onClick={signOut} className="inline-flex items-center gap-2 px-[22px] py-2.5 rounded-full text-sm font-medium border border-[#d7e3e7] hover:-translate-y-0.5 transition">
            Sign out
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-5">
        <div className="grid content-start gap-5">
          <article className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 p-6 rounded-[18px] border border-teal/10 shadow-[0_14px_32px_rgba(11,42,59,0.06)] bg-teal-pale">
            <div className="col-span-2 flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Next scheduled visit</span>
              <span className="px-2.5 py-1.5 rounded-full bg-teal-pale text-teal text-[0.7rem] font-extrabold whitespace-nowrap">Confirmed</span>
            </div>
            <div className="flex items-center gap-1.5 text-teal">
              <strong className="text-[3.4rem] leading-[0.9]">18</strong>
              <span className="text-[0.72rem] font-extrabold leading-[1.3]">SEP<br />2026</span>
            </div>
            <div>
              <h2 className="m-0 mb-2 text-navy text-[1.35rem]">Cardiology follow-up</h2>
              <p className="mt-1 text-ink-600 text-[0.82rem]"><i className="fas fa-user-doctor" /> Dr. M. Rivera &nbsp; <i className="fas fa-clock" /> 10:30 AM</p>
              <p className="mt-1 text-ink-600 text-[0.82rem]"><i className="fas fa-location-dot" /> Ado Care, Heart &amp; Vascular Unit</p>
            </div>
            <a href="/appointment#booking-panel" className="col-span-2 inline-flex items-center gap-2 w-fit text-teal text-[0.84rem] font-extrabold">
              Manage appointment <i className="fas fa-arrow-right" />
            </a>
          </article>

          <article className="p-6 rounded-[18px] border border-teal/10 shadow-[0_14px_32px_rgba(11,42,59,0.06)] bg-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Your care history</span>
                <h2 className="mt-1.5 text-navy text-[1.35rem]">Recent visits</h2>
              </div>
              <span className="px-2.5 py-1.5 rounded-full bg-teal-pale text-teal text-[0.7rem] font-extrabold whitespace-nowrap">6 visits</span>
            </div>
            <div className="mt-5">
              {visits.map(([day, month, title, sub]) => (
                <div key={title} className="grid grid-cols-[58px_1fr_auto] items-center gap-3.5 py-4 border-t border-[#edf2f4]">
                  <span className="text-teal text-[1.3rem] font-extrabold leading-none">
                    {day}<br /><small className="text-ink-400 text-[0.55rem] tracking-wide">{month}</small>
                  </span>
                  <div>
                    <h3 className="m-0 mb-0.5 text-navy text-[0.91rem]">{title}</h3>
                    <p className="m-0 text-ink-500 text-[0.75rem]">{sub}</p>
                  </div>
                  <i className="fas fa-check-circle text-teal" />
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="grid content-start gap-5">
          <article className="p-6 rounded-[18px] border border-teal/10 shadow-[0_14px_32px_rgba(11,42,59,0.06)] bg-brand-cream">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Small steps</span>
                <h2 className="mt-1.5 text-navy text-[1.35rem]">Tips for better health</h2>
              </div>
              <i className="fas fa-sun text-amber text-[1.4rem]" />
            </div>
            {[
              ['fa-glass-water', 'Keep water close', 'Regular sips throughout the day support energy and focus.'],
              ['fa-person-walking', 'Move for ten minutes', 'A short walk after meals can help circulation and digestion.'],
              ['fa-moon', 'Protect your sleep', 'A consistent bedtime gives your body time to restore.'],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex gap-3.5 py-4 border-b border-amber/20">
                <span className="grid place-items-center flex-none w-[34px] h-[34px] rounded-[10px] bg-white text-amber-dark">
                  <i className={`fas ${icon}`} />
                </span>
                <div>
                  <h3 className="m-0 mb-0.5 text-navy text-[0.91rem]">{title}</h3>
                  <p className="m-0 text-ink-500 text-[0.75rem]">{text}</p>
                </div>
              </div>
            ))}
            <a href="/blogs" className="inline-flex items-center gap-2 mt-5 text-teal text-[0.84rem] font-extrabold">
              Read the wellness blog <i className="fas fa-arrow-right" />
            </a>
          </article>

          <article className="p-6 rounded-[18px] border border-teal/10 shadow-[0_14px_32px_rgba(11,42,59,0.06)] bg-white">
            <span className="inline-flex items-center gap-2 text-teal text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Your voice matters</span>
            <h2 className="mt-1.5 text-navy text-[1.35rem]">How was your last visit?</h2>
            <p className="mt-3 mb-5 text-ink-500 text-[0.86rem] leading-relaxed">
              Tell us about the care you received so we can keep improving the patient experience.
            </p>
            <form onSubmit={submitFeedback} className="grid gap-3.5">
              <div className="flex gap-1.5" role="radiogroup" aria-label="Rate your visit">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setRating(n)}
                    aria-label={`${n} star${n > 1 ? 's' : ''}`}
                    className={`px-0.5 text-3xl transition hover:-translate-y-0.5 ${n <= rating ? 'text-amber' : 'text-[#d7e3e7]'}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <label className="sr-only" htmlFor="feedbackComment">Your comment</label>
              <textarea
                id="feedbackComment"
                rows={3}
                required
                placeholder="Share a few words about your experience"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3.5 py-3 border border-[#d7e3e7] rounded-[9px] bg-brand-bg text-navy resize-y outline-none focus:border-teal focus:ring-2 focus:ring-teal/10"
              />
              <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold w-full bg-gradient-to-br from-teal to-teal-dark shadow-[0_8px_20px_rgba(27,123,138,0.25)] hover:-translate-y-0.5 transition">
                <i className="fas fa-paper-plane" /> Send feedback
              </button>
              {feedbackMsg && <p className={`text-sm font-bold ${feedbackMsg.type === 'error' ? 'text-rose' : 'text-teal'}`}>{feedbackMsg.text}</p>}
            </form>
          </article>
        </div>
      </section>
    </div>
  )
}
