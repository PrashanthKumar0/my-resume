// uses experiences components
import React from 'react'

import "../Experiences/style.css";
import data from '../../../data';
import ExperienceCard from '../Experiences/ExperienceCard';
import Heading from '../../Heading/Heading';

function Education() {
    return (
        <div>
            <Heading text={"Education"} />
            <div className="experience_cards">
                {data.education.map((education, key) => {
                    const dat = {
                        "company": education.institute,
                        "post": education.course,
                        "from": education.from,
                        "to": education.to,
                        "desc": education.desc
                    };
                    return <ExperienceCard key={key} {...dat} />
                })}

            </div>
        </div>
    )
}

export default Education