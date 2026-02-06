import React from 'react'
import "../index.css"
import github from "../assets/github.svg"


const Myproject1 = ({appname,desc,src}) => {
  const styleimg={
    height:"4rem",
    
    
   
  }
  // props destructuring
  // const{appname,desc}=props
  return ( 
    <>

    <h2>These are my Projects</h2>


    <div className="projectcontener">
    <p>i build a high quality project of all size
      and shapes
    </p>

    <div className="project1">
      <img src={src} alt=""  style={styleimg} />
     <div className="ubertext">
       <p>{appname} clone Application</p>
      <p> {desc}
      </p>
     </div>

      <div className="github">
        <img src={github} alt="" /> <span>
          View on GitHub
        </span>
        
      </div>

    </div>

     


    </div>




</>
   
  )
}

export default Myproject1