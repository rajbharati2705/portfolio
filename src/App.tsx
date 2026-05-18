import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ProductionContext from "./components/ProductionContext.tsx";
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import EngineeringChallenges from "./components/EngineeringChallenges.tsx";
import Learning from "./components/Learning.tsx";
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <ProductionContext />
      <Experience />
      <Projects />
      <EngineeringChallenges />
      <Learning />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App
