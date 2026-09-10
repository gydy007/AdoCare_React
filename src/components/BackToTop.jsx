import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-[30px] right-[30px] w-[50px] h-[50px] rounded-full bg-teal text-white text-2xl shadow-[0_4px_12px_rgba(27,123,138,0.3)] flex items-center justify-center hover:bg-teal-dark hover:scale-110 transition z-[999]"
    >
      ↑
    </button>
  )
}
