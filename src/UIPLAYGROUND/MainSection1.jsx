import React from 'react'
import Section2 from './Section2'

const MainSection1 = () => {

    let sec2obj=[
        {
            src:"https://framerusercontent.com/images/F2zQCSSXjnKHT0SXkzNv1isnrQ.png?scale-down-to=512&width=960&height=720",
            heading:"Play with iOS 26 Components",
            text:"Explore and customise native UI components to unlock endless possibilities for your app."

        },
         {
         src:"https://framerusercontent.com/images/dHLGfFvSyzIcHqIukwQ9NVoosCs.png?scale-down-to=512&width=960&height=720",
         heading:"Preview Mode",
         text:"Preview a live component within the context of your app, by adding a screenshot image."
        },
         {
            src:"https://framerusercontent.com/images/ObeXoCRE7PnU194Lcfy5oBXHZJo.png?scale-down-to=512&width=960&height=720",
            heading:"Export SwiftUI Code",
            text:"Export native code to share with developers streamlining development."

        }
    ]
    return (
        <>
            <div className="flex-1 w-full flex i items-center justify-evenly flex-col text-center border-2 
            border-amber-400">

             <div className="flex flex-col  items-center  gap-10 font-serif p-12">
                <div className="mainsection1img  min-w-50 max-w-55">
                  <img src="https://framerusercontent.com/images/eLy0mDqICTCYMaFG5Xf1PiqqLhg.png?width=512&height=512" className='cover' />
             </div>
              <h1 className="text-5xl font-semibold">UI Playground 2.0</h1>
              <div className="text-4xl font-light  text-gray-400">
               <p> Play with native iOS 26</p>
               <p>user interface components.</p>
              
              </div>
              <div className="min-w-45  m-4 "> 
                 <a href="#"> <img src="https://framerusercontent.com/images/CqJhpLAlT4N04Ro0B3Bn5hSFBfI.svg" alt="" className="object-cover w-full"/>
                  </a>

              </div>
             </div>

            </div>


          <div className="flex justify-center items-center flex-wrap gap-10  mt-10  mb-10 ">
            {sec2obj.map((val,index)=>(<Section2 {...val} key={index}/>))}
          </div>
           
        </>
    )
}

export default MainSection1