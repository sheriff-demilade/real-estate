import React from 'react'
import Navbar from './components/navbar/Navbar'
import Slide from './components/slide/Slide'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Project from './components/project/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App