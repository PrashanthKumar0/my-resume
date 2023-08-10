import React from 'react'
import "./style.css";
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Experiences from './Experiences';



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

      </div>
    </div>
  )
}

export default Body;