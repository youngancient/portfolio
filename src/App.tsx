import './App.css'
import { About, SkillsComp } from './components/About/About'
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
    </>
  )
}

export default App
