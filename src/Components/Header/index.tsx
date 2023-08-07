import React from 'react'
import "./style.css"

import data from "../../data.json";
import profilePic from "../../assets/profile.jpg";

function Header() {
  return (
    <div className="header">
      
      <div className="profile_pic">
        <img src={profilePic} />
      </div>

      <div className="name_container">
        <div className='name'>
          {data.name}
        </div>
        <div className='role'>
          {data.role}
        </div>
      </div>

    </div>
  )
}

export default Header;