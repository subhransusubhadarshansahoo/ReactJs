import React from 'react'
import "./profile.css"
const Profile = ({src,name,designation,about}) => {
  return (
  
             <div className="profilecontainer">
                 <img src={src} alt="" />
                 <h2>{name}</h2>
                 <span>{designation}</span>
                 <p>{about}</p>
                 <a href="#">contact</a>

             </div>
           

        
  )
}

export default Profile