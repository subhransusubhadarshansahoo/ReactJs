import React from 'react'

const Section2 = ({src,heading,text},child) => {
  return (
  <>
 <div className=" h-96  w-[300px]
   flex  flex-wrap flex-col border-amber-400 border-2 rounded-2xl  text-center  gap-4">
     <img src={src} alt="card"  className="content-cover rounded-tl-2xl rounded-tr-2xl bg-gradient-to-b  from-amber-200 to-amber-400 " />
  <h2 className="  font-bold text-[18px]">{heading}</h2>
  <p className="font-semibold">{text}</p>
 </div>
  </>
  )
}

export default Section2