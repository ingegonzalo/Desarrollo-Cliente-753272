import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Hero />
      <div className="ticks"></div>

      <About />
      <div className="ticks"></div>

      <Projects />
      <div className="ticks"></div>

      <Skills />
      <div className="ticks"></div>

      <Education />
      <div className="ticks"></div>

      <Hobbies />
      <div className="ticks"></div>

      <ContactForm />

      <section id="spacer"></section>
    </>
  );
}

export default App