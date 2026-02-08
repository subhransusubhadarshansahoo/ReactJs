import React from 'react'

import github from "../assets/github.svg"
import "./component.css"


const Myproject1 = ({appname,desc,src}) => {
  const styleimg = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
};

  // props destructuring
  // const{appname,desc}=props
  return ( 
    <>



    
   
    <div className="projectcontainer">
      <img src={src} alt=""  style={styleimg} />
     <div className="ubertext">
       <p>{appname} clone Application</p>
      <p> 
        {desc}
      </p>
     </div>

      <div className="github">
        <img src={github} alt="" /> <span>
          View on GitHub  
        </span>
        
      </div>

    </div>

     


   




</>
   
  )
}

export default Myproject1