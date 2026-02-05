import React from 'react'
import "../index.css"
import github from "../assets/github.svg"


const Myproject1 = (props) => {
  const styleimg={
    height:"2.5rem",
    border:"2px solid black",
    backgroundColor:"white",
    padding:"0.8rem"

  }
  // props destructuring
  const{appname,desc}=props
  return ( 
    <>

    <h2>These are my Projects</h2>


    <div className="projectcontener">
    <p>i build a high quality project of all size
      and shapes
    </p>

    <div className="project1">
      <img src="https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png" alt=""  style={styleimg} />
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