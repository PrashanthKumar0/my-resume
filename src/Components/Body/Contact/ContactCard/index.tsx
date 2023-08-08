import React from 'react'

import "./style.css";

interface IContact {
    type: String;
    info: any;
};

function ContactCard({ type, info }: IContact) {
    return (
        <div className="contact_card">
            <div className="contact_type">{type}:</div>
            <div className="contact_info">{info}</div>
        </div>
    );
}

export default ContactCard;