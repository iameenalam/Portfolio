import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
// import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header />

    <main className='home'>
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
