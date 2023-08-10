import React from 'react'
import "./style.css"
import Heading from '../../Heading/Heading'

import data from '../../../data'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function About() {
  return (
    <div>
      <Heading text="About Me" />
      <div>
        <ReactMarkdown>
          {data.aboutMe}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default About