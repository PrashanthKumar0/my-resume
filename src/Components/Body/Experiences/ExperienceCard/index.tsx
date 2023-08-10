import React from 'react'
import ReactMarkdown from 'react-markdown'

import "./style.css";


interface IExperienceCard {
    company: String;
    desc: String;
    from: String;
    to: String;
    post: String;
};

function ExperienceCard({ company, desc, from, to, post }: IExperienceCard) {
    return (
        <>
            <div className="experience_timeline">
                <div className="experience_post">{post}</div>
                <div className="experience_dur">{from} - {to}</div>
            </div>

            <div className="experience_content">
                <div className="experience_company">{company}</div>
                <div className="experience_desc">
                    <ReactMarkdown>
                        {desc}
                    </ReactMarkdown>
                </div>
            </div>

        </>
    )
}

export default ExperienceCard