import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import skills from './data/skills'
import project from './data/project'


const App = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills skills={skills} />
          <Projects projects={project}/>
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
