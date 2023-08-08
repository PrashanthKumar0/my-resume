import React from 'react'


import "./style.css";
import Progress from '../../../Progress';

interface ISkill {
    name: String;
    experienceLevel: Number;
}


function Skill({ name, experienceLevel }: ISkill) {
    return (
        <>
            <div className="skill_name">{name}</div>
            <Progress amount={experienceLevel} max={5} />
        </>
    );
}

export default Skill