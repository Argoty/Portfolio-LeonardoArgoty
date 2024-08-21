import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='relative h-full overflow-y-auto overflow-x-hidden antialiased'>
      {/* Container that has the background image of the entire page covered */}
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>

      {/* Container of the page, their elements */}
      <div className='relative flex flex-col z-10 items-center p-4 space-y-8 container mx-auto'>
        <Hero/>
        <Navbar/>
        <Bio/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Education/>
        <ContactForm/>
        <Footer />
      </div>
    </div>
  )
}

export default App