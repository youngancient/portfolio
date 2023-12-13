import './App.css'
import { About, SkillsComp } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Project/Projects'

function App() {

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
