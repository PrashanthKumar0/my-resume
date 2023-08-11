import React from 'react'

import "./style.css";
import data from '../../../data';
import Heading from '../../Heading/Heading';

import "./style.css";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


interface IProjects {
    repo: string;
    desc: string[];
};


function getRepoName(repoUrl: string) {
    const arr = repoUrl.split('/');
    return arr[arr.length - 1];
}

function makeMarkdown(projects: IProjects[]): string {
    let markdownStr = '';
    projects.forEach(proj => {
        markdownStr += `- [${getRepoName(proj.repo)}](${proj.repo})\n`;
        proj.desc.forEach(desc => {
            markdownStr += `    - ${desc}\n`
        });
        markdownStr += '\n';
    });

    return markdownStr;
}

function Projects() {
    const projectSection = makeMarkdown(data.projects);
    return (
        <div>
            <Heading text={"Projects"} />
            <div className="projects_cards">
                {/* {data.projects.map(p=><li>{p.repo}</li>)} */}
                <ReactMarkdown>{projectSection}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Projects;