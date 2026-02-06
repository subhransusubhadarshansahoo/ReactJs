import React from 'react'
import RedBorder from './RedBorder'

const ToolCart = ({src,name,desc}) => {
  return (
    <>
  
  
        <div className="toolcart">
        <img src={src} alt="" />
        <h2>{name}</h2>
        <p>{desc}</p>
        <a href="">Learn More</a>
    </div>
   

    </>
  )
}

export default ToolCart