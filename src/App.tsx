import { useEffect } from 'react'
import './App.css'
import { About, SkillsComp } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Project/Projects'
import { splitAnimation } from './animations/text'


function App() {
  useEffect(() => {
    splitAnimation();
});

  return (
    <>
      <Header />
      <Hero />
      <About />
      <SkillsComp />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
