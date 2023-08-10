import React from 'react'

import "./style.css";
import data from '../../../data';
import Heading from '../../Heading/Heading';

import "./style.css";

function Projects() {
    return (
        <div>
            <Heading text={"Projects"} />
            <div className="projects_cards">
                {data.projects.map(p=><li>{p.repo}</li>)}
            </div>
        </div>
    )
}

export default Projects;