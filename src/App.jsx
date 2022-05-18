import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Photography from './components/photography/Photography'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Photography />
        <Contact />
        <Footer />
      </>
  )
}

export default App