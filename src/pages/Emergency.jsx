import Footer from '../components/Footer'

const procedure = [
  ['01', 'fa-phone-volume', 'Call or arrive', 'Call the emergency desk, or come directly to our emergency entrance. Ambulance arrivals are received by the clinical team.'],
  ['02', 'fa-stethoscope', 'Rapid assessment', 'A nurse quickly checks the patient\u2019s condition and identifies anything that needs immediate attention.'],
  ['03', 'fa-user-doctor', 'Urgent treatment', 'The appropriate doctor and support team begin care, tests, monitoring, or stabilization without unnecessary delay.'],
  ['04', 'fa-clipboard-check', 'Next steps', 'We explain the care plan, prescriptions, referrals, admission, or safe discharge instructions before you leave.'],
]

const emergencyMiddle = {
  title: 'Emergency',
  items: [
    { label: 'Emergency procedure', to: '/emergency' },
    { label: 'Call emergency desk', to: 'tel:+2348001234567' },
    { label: 'Patient appointments', to: '/appointment' },
  ],
}

export default function Emergency() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] items-center gap-10 lg:gap-16 max-w-[1200px] mx-auto px-6 md:px-10 py-16 lg:py-20">
        <div className="max-w-[700px]">
          <span className="inline-flex items-center gap-2 text-rose text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">
            <i className="fas fa-heart-pulse" /> Ado Care Emergency Unit
          </span>
          <h1 className="max-w-[680px] my-4 text-navy text-[clamp(2.6rem,6vw,5.3rem)] leading-[1.02] tracking-tight">
            When every second matters, start here.
          </h1>
          <p className="max-w-[610px] text-ink-600 text-[1.08rem] leading-[1.75]">
            Our emergency team is available 24 hours a day, every day. Call ahead when possible so our team can
            prepare for your arrival.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-7">
            <a href="tel:+2348001234567" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white font-medium bg-emergency hover:bg-emergency-dark hover:-translate-y-0.5 hover:shadow-lg transition">
              <i className="fas fa-phone" /> Call emergency desk
            </a>
            <a href="#arrival-procedure" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white font-medium bg-teal-dark hover:-translate-y-0.5 hover:shadow-lg transition">
              <i className="fas fa-arrow-down" /> See the procedure
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-8 bg-emergency rounded-[24px] text-[#c5d9de]" style={{ boxShadow: '18px 18px 0 rgba(220,53,69,0.18)' }}>
          <span className="inline-block w-3 h-3 rounded-full bg-amber shadow-[0_0_0_7px_rgba(240,162,97,0.15)]" />
          <span>Emergency desk</span>
          <strong className="mt-3 mb-0.5 text-white text-[clamp(1.65rem,3vw,2.3rem)] leading-tight">+234 800 123 4567</strong>
          <small className="text-white font-bold">Open now · 24 hours</small>
        </div>
      </section>

      <section className="flex items-center gap-4 w-[min(1120px,calc(100%-80px))] mx-auto mb-16 sm:mb-[72px] p-5 border-l-4 border-rose bg-white text-[#5c3a3a] shadow-[0_10px_25px_rgba(177,62,62,0.07)]">
        <i className="fas fa-triangle-exclamation text-rose text-xl" />
        <p className="text-[0.92rem]">
          <strong>Life-threatening emergency?</strong> Call your local emergency service immediately, then contact
          Ado Care. Do not drive yourself if you are seriously unwell.
        </p>
      </section>

      <section id="arrival-procedure" className="w-[min(1120px,calc(100%-80px))] mx-auto mb-[78px] scroll-mt-24">
        <div className="max-w-[650px] mb-7">
          <span className="text-rose text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Our procedure</span>
          <h2 className="mt-2.5 mb-3 text-navy text-[clamp(1.75rem,3vw,2.7rem)] leading-tight">What happens when you arrive</h2>
          <p className="text-ink-600 leading-[1.7]">
            Knowing the next step can make a difficult moment feel more manageable. Our teams prioritize immediate
            danger first while keeping families informed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {procedure.map(([num, icon, title, text]) => (
            <article key={num} className="relative min-h-[238px] p-6 pt-6 bg-white border border-rose/[0.12] rounded-2xl shadow-[0_12px_25px_rgba(11,42,59,0.06)] hover:-translate-y-1.5 hover:shadow-[0_19px_32px_rgba(11,42,59,0.11)] transition">
              <span className="absolute top-[18px] right-[18px] text-[#e9b8ae] text-[0.72rem] font-extrabold">{num}</span>
              <span className="grid place-items-center w-[42px] h-[42px] mb-5 rounded-xl bg-rose-soft text-rose">
                <i className={`fas ${icon}`} />
              </span>
              <h3 className="mb-2 text-navy text-[1.05rem]">{title}</h3>
              <p className="text-ink-500 text-[0.86rem] leading-[1.65]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[min(1120px,calc(100%-80px))] mx-auto mb-[78px]">
        <div className="p-8 bg-white rounded-[20px] shadow-[0_12px_25px_rgba(11,42,59,0.05)]">
          <span className="text-rose text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Before you come</span>
          <h2 className="mt-2.5 mb-3 text-navy text-[clamp(1.75rem,3vw,2.7rem)] leading-tight">Bring what helps us help you</h2>
          <ul className="grid gap-3.5 mt-6">
            {[
              'A list of current medicines and allergies',
              'Identification and insurance information, if available',
              'A trusted contact person and relevant medical history',
              'Comfort items for a child, when appropriate',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-600 text-[0.92rem]">
                <i className="fas fa-check mt-1 text-teal" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-teal-pale rounded-[20px]">
          <span className="text-rose text-[0.76rem] font-extrabold tracking-[0.12em] uppercase">Find the unit</span>
          <h2 className="mt-2.5 mb-3 text-navy text-[clamp(1.75rem,3vw,2.7rem)] leading-tight">Emergency entrance</h2>
          <p className="text-ink-600 leading-[1.7]">25 Harbor Avenue, Ado-Ekiti</p>
          <p className="mt-3 text-[#597084] text-[0.9rem]">The emergency entrance is open 24/7. Follow the red emergency signs when you arrive.</p>
          <a href="tel:+2348001234567" className="inline-flex gap-2 mt-6 text-teal font-extrabold">
            Call for directions <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>

      <Footer middleColumn={emergencyMiddle} />
    </>
  )
}
