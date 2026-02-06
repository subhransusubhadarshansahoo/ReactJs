import React from 'react'
import Profile from './Profile'
import "./landing.css"
import ToolCart from './ToolCart'
import RedBorder from './RedBorder'
const Landing = () => {

  return (
    <>
   <div className="ladningcon">
     <Profile  src="https://tse2.mm.bing.net/th/id/OIP.bOQax8ieVKZPy8vZPi2GegHaEJ?pid=Api&P=0&w=714&h=400"
     name="john doe"
     designation="Ceo"
     about="The CEO works closely with other leaders like the CTO, CFO, and board of directors to ensure the company grows successfully."
     />
     <Profile  src="https://tse1.mm.bing.net/th/id/OIP.1Fngz3KG9ZvtrWdIFFDAxAHaE8?pid=Api&P=0&w=600&h=400"
     name="Mike clerk"
     designation="Art Director"
     about="The art director closely with other leaders, and board of directors to ensure the company grows successfully."
     />
     <Profile  src="https://tse2.mm.bing.net/th/id/OIP.oCC9pFLHgBzwjfY_uqBFNAHaE8?pid=Api&P=0&w=599&h=400"
     name="elina cather"
     designation="Designer"
     about="The  designer works closely with other nd board of directors to ensure the company grows successfully."
     />
     </div>
      <RedBorder>
          <div className="header">
             <h1>Your user research swiss Army knife</h1>
             <div className="button"><a href="">See all Features</a></div>
         </div>
        </RedBorder>

     <RedBorder>
      <div className="tollcont">
     <RedBorder><ToolCart src=""
     name="card Sorting "
     desc="Discover how people group and label information"
     />
     </RedBorder>
     <ToolCart src=""
     name="Prototype tests"
     desc="Discover how people navigate your 
     figma prototypes"
     />
     <ToolCart src=""
     name="First click tests"
     desc="Test interact with first click and navigation tests"
     />
     <ToolCart src=""
     name="Design Surveys"
     desc="get feedback on images,Videos or audio files"
     />
     <ToolCart src=""
     name="Perference Tests"
     desc="Findout Which design users prefer and why "
     />
     <ToolCart src=""
     name="Five Second Tests"
     desc="Test comprehnsability by measuring first impression"
     />
     </div>
     


     </RedBorder>

    </>
   
  )
}

export default Landing