import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'

type Phase = 'intro' | 'opening' | 'done'

function shouldPlayIntro() {
  try {
    if (new URLSearchParams(window.location.search).has('intro')) return true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return sessionStorage.getItem('nexora-intro') !== 'done'
  } catch {
    return true
  }
}

function App() {
  const [phase, setPhase] = useState<Phase>(() => (shouldPlayIntro() ? 'intro' : 'done'))

  function handleDone() {
    try {
      sessionStorage.setItem('nexora-intro', 'done')
    } catch {
      // storage can be blocked, the intro just plays again next visit
    }
    setPhase('done')
  }

  return (
    <MotionConfig reducedMotion="user">
      {phase !== 'intro' && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Portfolio />
            <Pricing />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      {phase !== 'done' && (
        <Intro onOpen={() => setPhase('opening')} onDone={handleDone} />
      )}
    </MotionConfig>
  )
}

export default App