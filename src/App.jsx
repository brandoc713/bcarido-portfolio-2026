import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className="noise-bg"></div>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
