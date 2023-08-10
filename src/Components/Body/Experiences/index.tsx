import React from 'react'

import "./style.css";
import data from '../../../data';
import ExperienceCard from './ExperienceCard';
import Heading from '../../Heading/Heading';

function Experiences() {
    return (
        <div>
            <Heading text={"Experiences"} />
            <div className="experience_cards">
                {data.experiences.map((experience, key) => (
                    <ExperienceCard key={key} {...experience} />
                ))}

            </div>
        </div>
    )
}

export default Experiences