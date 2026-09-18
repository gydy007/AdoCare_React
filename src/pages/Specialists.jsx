import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'

const specialists = [
  {
    id: 'adebayo', name: 'Dr. Adebayo Ogunleye', dept: 'Neurosurgery', badge: 'fa-brain',
    title: 'MBBS, FWACS, FICS — Chief Neurosurgeon',
    bio: 'With over 18 years of neurosurgical experience, Dr. Ogunleye specialises in minimally invasive brain and spine procedures. He trained at Lagos University Teaching Hospital and completed a fellowship at Johns Hopkins. He leads our neurosciences department with precision and compassion.',
    image: `${import.meta.env.BASE_URL}assets/doctor1.jpg`,
    stats: [['18+', 'Years Exp.'], ['2,400+', 'Surgeries'], ['97%', 'Success']],
  },
  {
    id: 'folashade', name: 'Dr. Folashade Eniola', dept: 'Clinical Therapy', badge: 'fa-heart-pulse',
    title: 'PhD Psychology, MNIM — Lead Therapist',
    bio: 'Dr. Eniola is a licensed clinical psychologist with deep expertise in cognitive-behavioural therapy (CBT), trauma recovery, and stress management. She has counselled over 3,000 patients and runs our Mental Wellness Programme, offering group therapy sessions and one-on-one consultations for individuals and families.',
    image: `${import.meta.env.BASE_URL}assets/doctor2.jpg`,
    stats: [['12+', 'Years Exp.'], ['3,100+', 'Patients'], ['99%', 'Satisfaction']],
  },
  {
    id: 'chidinma', name: 'Dr. Chidinma Nwosu', dept: 'Pediatrics', badge: 'fa-baby',
    title: 'MBBS, FMCPaed — Senior Pediatrician',
    bio: 'Dr. Nwosu is a Fellow of the Medical College of Paediatrics with a passion for neonatal care and childhood immunisation. She oversees our pediatric ward and outpatient clinics, ensuring every child receives age-appropriate, evidence-based treatment. Parents trust her gentle bedside manner and thorough approach.',
    image: `${import.meta.env.BASE_URL}assets/doctor3.jpg`,
    stats: [['14+', 'Years Exp.'], ['5,200+', 'Children'], ['98%', 'Recovery']],
  },
  {
    id: 'emeka', name: 'Pharm. Emeka Azubuike', dept: 'Pharmacy', badge: 'fa-pills',
    title: 'B.Pharm, M.Sc Pharmacology — Chief Pharmacist',
    bio: "Pharm. Azubuike manages our in-house dispensary and pharmaceutical care services. With a Master's in Clinical Pharmacology, he ensures accurate drug dispensing, monitors medication interactions, and counsels patients on adherence. He is a certified member of the Pharmaceutical Society of Nigeria and an advocate for antimicrobial stewardship.",
    image: `${import.meta.env.BASE_URL}assets/doctor4.jpg`,
    stats: [['10+', 'Years Exp.'], ['15,000+', 'Prescriptions'], ['100%', 'Accuracy']],
  },
  {
    id: 'amara', name: 'Dr. Amara Okechukwu', dept: 'Dentistry', badge: 'fa-tooth',
    title: 'BDS, FMCDS — Consultant Dental Surgeon',
    bio: 'Dr. Okechukwu is a Fellow of the Medical College of Dental Surgeons specialising in restorative and cosmetic dentistry. She provides comprehensive oral health services including root canal therapy, dental implants, orthodontics, and preventive care. Her calm, patient-centred approach makes dental visits stress-free for adults and children alike.',
    image: `${import.meta.env.BASE_URL}assets/doctor5.jpg`,
    stats: [['11+', 'Years Exp.'], ['4,800+', 'Procedures'], ['96%', 'Satisfaction']],
  },
  {
    id: 'ibrahim', name: 'Dr. Ibrahim Musa', dept: 'General Surgery', badge: 'fa-hand-holding-medical',
    title: 'MBBS, FWACS — Consultant General Surgeon',
    bio: 'Dr. Musa is a seasoned general and laparoscopic surgeon with extensive experience in abdominal, thyroid, and hernia surgeries. A Fellow of the West African College of Surgeons, he trained at Ahmadu Bello University Teaching Hospital and brings a meticulous, safety-first approach to every procedure. He also mentors junior surgical residents at Ado Care.',
    image: `${import.meta.env.BASE_URL}assets/doctor60.jpg`,
    stats: [['16+', 'Years Exp.'], ['3,600+', 'Surgeries'], ['98%', 'Success']],
  },
]

export default function Specialists() {
  return (
    <>
      <section>
        <div className="bg-white rounded-[40px] p-8 sm:p-12 md:p-14 mx-4 sm:mx-8 md:mx-10 mt-16 md:mt-24 text-center shadow-card border border-black/[0.03]">
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[2px] text-teal font-semibold bg-teal/[0.08] px-[18px] py-1 rounded-full mb-3">
            Our Specialists
          </span>
          <h1 className="text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-tight text-navy my-2 mb-5">The Experts Behind Your Care</h1>
          <p className="text-ink-700 text-[1.05rem] max-w-[680px] mx-auto leading-[1.7]">
            Our team of board-certified physicians brings decades of combined experience across critical medical
            disciplines. Each specialist is handpicked for their clinical excellence, empathetic approach, and
            commitment to the Ado-Ekiti community.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-10 pt-10 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {specialists.map((s, i) => (
            <Reveal
              key={s.id}
              variant="fade"
              as="article"
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-teal/[0.06] flex flex-col hover:-translate-y-2 hover:shadow-lift transition"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-gradient-to-br from-[#e8f4f6] to-[#d0eef3]">
                <img src={s.image} alt={`${s.name} — ${s.dept}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white text-xl shadow-[0_6px_20px_rgba(27,123,138,0.35)]">
                  <i className={`fas ${s.badge}`} />
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-2.5 flex-1">
                <span className="inline-block text-[0.78rem] uppercase tracking-[1.5px] text-teal font-bold bg-teal/[0.08] px-3.5 py-1 rounded-full w-fit">{s.dept}</span>
                <h3 className="text-[1.35rem] font-bold text-navy mt-0.5">{s.name}</h3>
                <p className="text-[0.88rem] text-ink-600 italic m-0">{s.title}</p>
                <p className="text-[0.94rem] text-ink-700 leading-relaxed my-1">{s.bio}</p>
                <div className="flex gap-4 my-2">
                  {s.stats.map(([num, label]) => (
                    <div key={label} className="flex-1 text-center bg-teal-mist rounded-2xl py-3 px-2 hover:bg-teal/10 transition">
                      <span className="block text-[1.25rem] font-extrabold text-teal leading-tight">{num}</span>
                      <span className="block text-[0.72rem] text-ink-600 font-semibold uppercase tracking-wide mt-0.5">{label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/appointment"
                  className="mt-auto flex items-center justify-center gap-2 text-[0.88rem] px-6 py-3 rounded-2xl w-full text-white font-medium bg-gradient-to-br from-teal to-teal-dark shadow-[0_6px_18px_rgba(27,123,138,0.2)] hover:shadow-[0_10px_28px_rgba(27,123,138,0.3)] transition"
                >
                  <i className="fas fa-calendar-check" /> Book Appointment
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-5 pb-10">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <h2 className="text-navy">Need expert care?</h2>
          <h1 className="text-navy mb-3">Book a visit with our specialists</h1>
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
