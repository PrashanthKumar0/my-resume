import React from 'react'

interface IContactLink {
    iconName: any;
    link: any;
    display: any;
}

function ContactLink({ iconName, link, display }: IContactLink) {
    return (
        <div className="contect_chip" style={{ display: "flex", marginTop: "6px" }}>
            <i className={iconName} style={{ fontSize: "20px", marginRight: "15px", opacity: "0.3" }}></i>
            <a href={link} style={{ margin: "auto 0px" }}>{display}</a>
        </div>
    )
}

export default ContactLink;