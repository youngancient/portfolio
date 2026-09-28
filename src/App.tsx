import { useState } from "react";
import { About, SkillsComp } from "./components/About/About";
import { Capabilities } from "./components/Capabilities/Capabilities";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Production } from "./components/Production/Production";
import { Filter, Projects } from "./components/Project/Projects";

function App() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities onFilter={setFilter} />
        <Projects filter={filter} onFilter={setFilter} />
        <Production />
        <SkillsComp />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
