import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const specRows = [
  {
    dept: 'General Medicine',
    title: 'Primary care, built around you',
    text: 'From routine checkups to managing chronic conditions, our primary care physicians get to know you as a person, not just a chart. We coordinate everything—labs, referrals, follow-ups—so your care never falls through the cracks. Preventive screening, vaccinations, and personalized health guidance keep small issues from becoming big ones.',
    imgA: '/assets/On%20duty.jpg',
    imgB: '/assets/healthy_lifestyle.png',
    reverse: false,
  },
  {
    dept: 'Behavioural Health',
    title: 'Support for the mind, not just the body',
    text: 'Our licensed therapists and psychiatrists create a calm, judgment-free space to work through anxiety, depression, grief, and everyday stress. Sessions are private and paced to you, whether that means weekly talk therapy, medication management, or a one-time consultation. Healing takes time, and we stay with you through it.',
    imgA: '/assets/mindBody.jpg',
    imgB: '/assets/hero2.jpg',
    reverse: true,
  },
  {
    dept: 'Laboratory & Imaging',
    title: 'Answers you can trust, fast',
    text: 'Same-day bloodwork, ultrasound, X-ray, and CT services mean fewer days spent waiting and wondering. Our lab is calibrated and cross-checked against international standards, and every result is reviewed by a physician before it reaches you—so you get clarity, not just numbers.',
    imgA: '/assets/answers.jpg',
    imgB: '/assets/hero3.jpg',
    reverse: false,
  },
  {
    dept: 'Bone & Joint',
    title: 'Getting you moving again',
    text: "Whether it's a sports injury, arthritis, or a joint that's been aching for years, our orthopedic team builds a plan around your mobility goals. We lean on physiotherapy and minimally invasive techniques first, reserving surgery for when it's truly the better option.",
    imgA: '/assets/moving.jpg',
    imgB: '/assets/hero4.jpg',
    reverse: true,
  },
  {
    dept: 'Child & Adolescent Health',
    title: 'Care that grows with your child',
    text: 'From newborn checkups to teenage growth spurts, our pediatric team tracks development milestones and keeps immunizations on schedule. We talk to kids at their level and to parents in plain language, so nobody leaves an appointment with unanswered questions.',
    imgA: '/assets/child%201.jpg',
    imgB: '/assets/child%202%20(2).jpg',
    reverse: false,
  },
  {
    dept: 'Heart & Vascular',
    title: 'Protecting the heart of the matter',
    text: "Our cardiologists combine advanced diagnostics—ECG, echocardiography, stress testing—with honest conversations about lifestyle and risk. Whether you're managing hypertension or recovering from a cardiac event, we build a treatment plan that fits your life, not just your chart.",
    imgA: '/assets/heart%20(1).jpg',
    imgB: '/assets/heart%20(5).jpg',
    reverse: true,
  },
]

const values = [
  { icon: 'fa-heart', title: 'Compassion', text: 'We begin by listening, with empathy, patience, and respect.' },
  { icon: 'fa-star', title: 'Excellence', text: 'We keep learning and pursue the highest standards of care.' },
  { icon: 'fa-shield-heart', title: 'Integrity', text: "We communicate honestly and protect every patient's trust." },
  { icon: 'fa-door-open', title: 'Access', text: 'We work to keep quality healthcare available to our community.' },
  { icon: 'fa-people-group', title: 'Teamwork', text: 'We collaborate across every role for coordinated care.' },
  { icon: 'fa-house-chimney-heart', title: 'Community', text: 'We support healthier lives in Ado-Ekiti and beyond.' },
]

export default function About() {
  return (
    <>
      {/* INTRO */}
      <section>
        <div className="flex flex-wrap items-center gap-10 bg-white rounded-[40px] p-8 sm:p-12 md:p-14 mx-4 sm:mx-8 md:mx-10 mt-10">
          <div className="flex-1 basis-[35%] min-w-[260px]">
            <img src="/assets/download.jpg" alt="Ado Care hospital" className="w-full h-auto max-h-[380px] object-cover rounded-[28px] shadow-[0_16px_40px_rgba(8,40,50,0.08)]" />
          </div>
          <div className="flex-[2] basis-[50%] min-w-[280px]">
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[2px] text-teal font-semibold bg-teal/[0.08] px-[18px] py-1 rounded-full mb-3">About us</span>
            <h1 className="text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-tight text-navy my-2 mb-5">
              Clinical Excellence. Compassionate Care. Community Commitment.
            </h1>
            <p className="text-ink-700 text-[1.05rem] max-w-[640px] mb-4">
              Lumina Hospital is a fully accredited private healthcare institution dedicated to delivering
              world-class, affordable medical services to the people of Ado-Ekiti and its environs. We bridge the
              gap between advanced medical technology and accessible healthcare&mdash;serving civil servants,
              traders, students, and families alike.
            </p>
            <p className="text-ink-700 text-[1.05rem] max-w-[640px]">
              At Lumina Hospital, we restore wellness with professionalism and compassion&mdash;contributing
              meaningfully to the health transformation of Ado-Ekiti and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS — alternating rows */}
      <section>
        <div className="bg-white rounded-[40px] px-6 sm:px-10 md:px-14 pt-12 md:pt-14 pb-14 md:pb-[70px] mx-4 sm:mx-8 md:mx-10 my-10 shadow-card border border-black/[0.03]">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[2px] text-teal font-semibold bg-teal/[0.08] px-[18px] py-1 rounded-full mb-3.5">
              Our specializations
            </span>
            <h1 className="text-[clamp(1.8rem,3.4vw,2.4rem)] font-bold leading-snug text-navy m-0">
              Six departments, one standard of care
            </h1>
          </div>

          <div className="flex flex-col gap-16 md:gap-[70px]">
            {specRows.map((row) => (
              <div key={row.title} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${row.reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 basis-[44%] text-center md:text-left">
                  <span className="inline-block text-[0.78rem] uppercase tracking-[1.5px] text-teal font-bold bg-teal/[0.08] px-3.5 py-1 rounded-full mb-3.5">
                    {row.dept}
                  </span>
                  <h3 className="text-[1.55rem] font-bold text-navy leading-tight mb-3.5">{row.title}</h3>
                  <p className="text-base leading-[1.75] text-ink-700 max-w-[480px] mx-auto md:mx-0">{row.text}</p>
                </div>
                <div className={`spec-images relative flex-1 basis-[56%] w-full h-[240px] sm:h-[300px] md:h-[380px] ${row.reverse ? 'is-reverse' : ''}`}>
                  <img
                    src={row.imgA}
                    alt=""
                    className={`img-a absolute top-0 w-[76%] h-[82%] object-cover rounded-[24px] shadow-[0_20px_44px_rgba(8,40,50,0.14)] transition-all duration-500 z-[1] ${row.reverse ? 'right-0' : 'left-0'}`}
                  />
                  <img
                    src={row.imgB}
                    alt=""
                    className={`img-b absolute bottom-0 w-[52%] h-[54%] object-cover rounded-[24px] border-4 sm:border-[6px] border-white shadow-[0_20px_44px_rgba(8,40,50,0.14)] transition-all duration-500 z-[2] ${row.reverse ? 'left-0' : 'right-0'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="w-[92%] max-w-[1200px] mx-auto mt-5 p-8 md:p-16 bg-navy text-white rounded-[30px] overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] items-center gap-10 lg:gap-20 relative z-[1]">
          <Reveal variant="up" className="max-w-[610px]">
            <div className="flex items-center gap-2.5 text-teal-light text-[0.78rem] font-extrabold tracking-[0.14em] uppercase">
              <span className="w-[34px] h-[34px] rounded-full bg-teal-light/[0.14] flex items-center justify-center"><i className="fas fa-heart-pulse" /></span>
              <span>Our mission</span>
            </div>
            <h1 className="max-w-[540px] my-4 text-white text-[clamp(2.25rem,4.5vw,4.2rem)] leading-[1.04] tracking-tight">Care that puts people first.</h1>
            <p className="max-w-[590px] text-[#f3fbfa] text-[1.12rem] leading-relaxed mb-3.5">
              We make excellent healthcare feel more human, more accessible, and easier to understand for every family we serve.
            </p>
            <p className="max-w-[590px] text-[#c5d9de] leading-[1.8]">
              Our clinicians pair modern diagnostics and treatment with clear communication, so patients in Ado-Ekiti and surrounding communities can make informed decisions about their health.
            </p>
            <Link to="/appointment" className="inline-flex items-center gap-2.5 mt-7 text-teal-light font-extrabold hover:gap-3.5 transition-all">
              Meet us where you are <i className="fas fa-arrow-right" />
            </Link>
          </Reveal>

          <Reveal variant="up" className="relative min-h-[300px] md:min-h-[390px]">
            <img src="/assets/child%202%20(2).jpg" alt="A healthcare professional caring for a patient" className="block w-full h-[300px] md:h-[390px] object-cover rounded-[20px] saturate-[.9]" />
            <div className="absolute right-3 md:-right-5 bottom-4 md:bottom-6 flex items-center gap-3 w-[88%] max-w-[270px] p-4 bg-white text-navy rounded-xl shadow-[0_16px_34px_rgba(0,0,0,0.2)]">
              <span className="flex-none text-teal-dark"><i className="fas fa-hand-holding-heart" /></span>
              <p className="text-[0.82rem] font-extrabold leading-snug">Every patient deserves to feel heard, safe, and supported.</p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-12 md:mt-[58px] border-t border-white/20 relative z-[1]">
          {[
            ['01', 'Accessible by design', 'Quality care without unnecessary barriers.'],
            ['02', 'Always learning', 'Better outcomes through training and teamwork.'],
            ['03', 'Rooted in community', 'Prevention and partnership beyond our walls.'],
          ].map(([num, title, text], i) => (
            <Reveal key={num} variant="up" className={`flex gap-4 pt-6 pr-0 md:pr-5 ${i > 0 ? 'md:pl-5 md:border-l border-white/20' : ''}`}>
              <strong className="text-teal-light text-[0.78rem] tracking-[0.08em]">{num}</strong>
              <div>
                <h3 className="mb-1 text-white text-base">{title}</h3>
                <p className="text-[#a9c3ca] text-[0.82rem] leading-snug">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="bg-white rounded-[40px] p-8 sm:p-12 md:p-14 mx-4 sm:mx-8 md:mx-10 my-10">
          <h2 className="opacity-100 inline-block text-sm uppercase tracking-[2px] text-teal font-semibold bg-teal/[0.08] px-[18px] py-1 rounded-full mb-3">Our Values</h2>
          <h1 className="text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-tight text-navy my-2 mb-8">What guides every decision</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[18px]" aria-label="Ado Care values">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                variant="up"
                className={`relative overflow-hidden rounded-[17px] p-6 pt-6 min-h-[190px] border border-teal/[0.08] ${i % 2 ? 'bg-brand-cream' : 'bg-teal-mist'}`}
              >
                <span className={`absolute inset-y-0 left-0 w-1 ${i % 2 ? 'bg-amber' : 'bg-teal'}`} />
                <i className={`fas ${v.icon} grid place-items-center w-[42px] h-[42px] mb-5 rounded-xl bg-white/80 ${i % 2 ? 'text-amber-dark' : 'text-teal'}`} />
                <h3 className="mb-1.5 text-[1.08rem] text-navy">{v.title}</h3>
                <p className="max-w-[250px] text-[0.84rem] text-ink-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 pb-10">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h2 className="text-navy">Ready when you are</h2>
          <h1 className="text-navy mb-3">Book a visit with Ado Care</h1>
          <p className="mx-auto mb-5 max-w-[520px] text-ink-700">Same-day availability with specialists who put your wellbeing first.</p>
          <Link to="/appointment" className="inline-flex items-center justify-center px-[22px] py-2.5 rounded-full text-sm font-medium bg-teal-dark text-white hover:-translate-y-0.5 hover:shadow-lg transition">
            Book An Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
