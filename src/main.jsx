import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const root=createRoot(document.getElementById("root"));
let ans=2+2;

let name="subhransu" 

let exp=<h1>hello {name} how are you </h1>
let age=19

// when you want to write expression use {} in jsx
// we can also use ternary operator

// we can write any type of html using jsx  


// here we use className instead of class

  
// we can add style in jsx as an object 

let styleval={
  backgroundColor:"yellow",
fontWeight:"bolder",

  display:"inline"
  
}
root.render(
  <StrictMode>
    {/* <h1>hello subhransu how are you  {ans} </h1> */}

      
       


     <>
   {name&&exp}
   {age>=18?<p>you can drive</p>:<p>you can not drive </p>}
    <p style={styleval}>Lorem ipsum dolor sit amet.</p>
     </>
  </StrictMode>
)

// whenever we dont want to use any extra node 
// in that case we use fragment <> </>

