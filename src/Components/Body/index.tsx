import React from 'react'
import "./style.css";
import About from './About';
import Contact from './Contact';

function Body() {
  return (
    <div className="body">


      {/* left column */}
      <div>

        <About />
        <Contact />

      </div>


      {/* right column */}
      <div>

        <div>
          lele2
        </div>

      </div>
    </div>
  )
}

export default Body;