import React from 'react'
import "../index.css"
import github from "../assets/github.svg"


const Myproject1 = () => {
  return ( 
    <>

    <h2>These are my Projects</h2>


    <div className="projectcontener">
    <p>i build a high quality project of all size
      and shapes
    </p>

    <div className="project1">
      <div className="uber">
        Uber
      </div>

     <div className="ubertext">
       <p>Uber clone Application</p>
      <p> in this uber clone project i creeated a backed
        of a Ride sharing application
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