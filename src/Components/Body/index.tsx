import React from 'react'
import "./style.css";
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Experiences from './Experiences';
import Education from './Education';
import Projects from './Projects';



function Body() {
  return (
    <div className="body">


      {/* left column */}
      <div>
        <About />
        <Contact />
        <Skills />
      </div>


      {/* right column */}
      <div>
        <Experiences />
        <Projects />
        <Education />
      </div>
    </div>
  )
}

export default Body;