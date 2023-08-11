import React from 'react'

function Footer() {
    return (
        <div style={{ 
            textAlign: 'center',
            background: "var(--dark-bg)", 
            width: "100%",
            padding: "3px", 
            color: "white", 
            position:'absolute',
            bottom:"0px",
        }}>
            This resume is made using React & Typescript.
        </div>
    )
}

export default Footer