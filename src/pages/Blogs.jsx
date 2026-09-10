import { useState } from 'react'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import ArticleReader from '../components/ArticleReader'
import articles from '../data/articles'

const tips = [
  ['Morning light', 'Spend a few minutes outdoors early in the day to support your body clock and energy.'],
  ['Move between tasks', 'Stand, stretch, or walk for two minutes whenever you finish a focused block of work.'],
  ['Protect your sleep', 'Keep a consistent bedtime and make your room cool, quiet, and comfortably dark.'],
  ['Check your labels', 'Compare packaged foods for salt, added sugar, and fiber before making your choice.'],
  ['Pause and breathe', 'Try four slow breaths before responding to a stressful message or situation.'],
  ['Keep water close', 'A bottle within reach makes hydration easier during busy clinic, school, or work days.'],
]

export default function Blogs() {
  const [openArticle, setOpenArticle] = useState(null)

  return (
    <>
      <header className="max-w-[1120px] mx-auto px-6 pt-[78px] sm:pt-[90px] pb-11 text-center">
        <p className="uppercase tracking-wide text-teal-dark text-xs font-bold">Ado Care Journal</p>
        <h1 className="text-navy text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] mt-2">Health that fits real life.</h1>
        <p className="max-w-[650px] mx-auto mt-3 text-[#475569]">
          Clear, practical guidance from our care team to help you make confident choices for yourself and your family.
        </p>
      </header>

      <section className="flex flex-col gap-6 mx-auto px-6 md:px-7 pt-9 pb-11 bg-white/70 w-[92%] max-w-[1200px] rounded-[32px] shadow-[0_20px_48px_rgba(15,118,110,0.08)] border border-teal-dark/[0.06]">
        <h1 className="text-blog-900 text-[clamp(1.8rem,3vw,2.6rem)] m-0">Latest from our specialists</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(articles).map(([id, a]) => (
            <Reveal key={id} variant="up" as="article" className="bg-white p-5 rounded-[22px] flex flex-col shadow-[0_12px_26px_rgba(44,62,53,0.06)] border border-teal-dark/5 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(44,62,53,0.08)] transition overflow-hidden">
              <div className="rounded-[18px] overflow-hidden"><img src={a.image} alt="" className="w-full h-[210px] object-cover" /></div>
              <div className="flex flex-col gap-3 pt-4 flex-1">
                <div className="text-blog-500 text-xs font-bold">{a.readTime} • By {a.author}</div>
                <h3 className="text-[1.25rem] leading-snug text-blog-900 m-0">{a.title}</h3>
                <p className="text-blog-700 leading-relaxed m-0 flex-1">{a.excerpt}</p>
                <button onClick={() => setOpenArticle(Number(id))} className="text-left border-none bg-transparent text-teal-dark font-bold p-0 mt-1.5 cursor-pointer">
                  Read Full Article →
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <h1 className="text-blog-900 text-[clamp(1.8rem,3vw,2.6rem)] m-0">Small habits, steady health</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map(([title, text]) => (
            <Reveal key={title} variant="up" className="bg-teal-pale border border-teal-dark/5 rounded-[22px] min-h-[160px] flex flex-col justify-center p-5">
              <h4 className="mb-3 text-[1.16rem] text-blog-900 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber inline-block" />
                {title}
              </h4>
              <p className="m-0 leading-relaxed text-blog-700">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
      <ArticleReader articleId={openArticle} onClose={() => setOpenArticle(null)} />
    </>
  )
}
