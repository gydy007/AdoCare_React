import { useEffect } from 'react'
import articles from '../data/articles'

export default function ArticleReader({ articleId, onClose }) {
  const article = articleId ? articles[articleId] : null

  useEffect(() => {
    if (article) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [article])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!article) return null

  return (
    <div className="fixed inset-0 z-[2000]" role="dialog" aria-modal="true" aria-labelledby="readerTitle">
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={onClose} />
      <article className="relative w-[92%] max-w-[760px] max-h-[88vh] mx-auto my-[6vh] overflow-y-auto bg-white rounded-[22px] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-3.5 right-4 w-[38px] h-[38px] rounded-full bg-white/90 text-navy text-3xl leading-none z-10"
        >
          &times;
        </button>
        <img className="block w-full h-[180px] sm:h-[260px] object-cover" src={article.image} alt="" />
        <div className="px-6 sm:px-10 py-8 sm:py-10 pb-10">
          <span className="text-teal-dark text-xs font-extrabold tracking-[0.12em] uppercase">{article.category}</span>
          <h2 id="readerTitle" className="mt-2.5 mb-2 text-navy text-[clamp(1.65rem,4vw,2.5rem)] leading-tight">
            {article.title}
          </h2>
          <div className="text-[#64748b] text-[0.82rem] font-bold">
            {article.readTime} • By {article.author}
          </div>
          <div className="mt-6 text-[#334155] leading-[1.85] space-y-4">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
