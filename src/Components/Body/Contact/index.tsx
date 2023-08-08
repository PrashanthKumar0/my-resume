import React from 'react'

import "./style.css";
import Heading from '../../Heading/Heading';
import ContactCard from './ContactCard';

import data from '../../../data';

function Contact() {
  return (
    <div>
      <Heading text="Contact" />
      <div className="contacts">
        {
          Object.entries(data.contacts)
            .map((ent, key) => <ContactCard key={key} type={ent[0]} info={ent[1]} />)
        }
      </div>
    </div>
  )
}

export default Contact