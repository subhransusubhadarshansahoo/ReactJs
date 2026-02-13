import React from 'react'
import Header from './Header'
import MainSection1 from './MainSection1'
const MainRoot = () => {
  let navitem=["Audience","Features","Pricing","Support","Privacy","About"]
  return (
  <>
  <div className="h-auto flex  gap-5 border-2 flex-wrap font-serif  p-4  w-full">

     <img src="https://framerusercontent.com/images/eLy0mDqICTCYMaFG5Xf1PiqqLhg.png?width=512&height=512" className='h-7' />
    <ul className='flex gap-5  flex-wrap'>
      {navitem.map((name,index)=>(<Header  name={name}  key={index} />))}
    </ul>
   </div>
   <MainSection1/>


  
  </>

  ) 
}

export default MainRoot 