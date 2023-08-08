import React from 'react'

import "./style.css";

interface IHeading {
    text: String,
};

function Heading({ text }: IHeading) {
    return (
        <div className="heading">
            {text.toUpperCase()}
        </div>
    );
}

export default Heading