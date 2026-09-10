import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Specialists from './pages/Specialists'
import Blogs from './pages/Blogs'
import Appointment from './pages/Appointment'
import Dashboard from './pages/Dashboard'
import Emergency from './pages/Emergency'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </main>
      <BackToTop />
    </>
  )
}
