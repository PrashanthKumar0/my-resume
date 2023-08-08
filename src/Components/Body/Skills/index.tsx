import React from 'react'
import Heading from '../../Heading/Heading';

import "./style.css";

import data from '../../../data';
import Skill from './SkillCard';

function Skills() {
    return (
        <div className="SkillCard">
            <Heading text={"Skills"} />

            <div className="skill_cover">
                {Object.entries(data.skills).map((ent, key) => (
                    <Skill key={key} name={ent[0]} experienceLevel={ent[1]} />
                ))}
            </div>
        </div>
    )
}

export default Skills;