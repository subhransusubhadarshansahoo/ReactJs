import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const root=createRoot(document.getElementById("root"));
let ans=2+2;

let name=""

// when you want to write expression use {} in jsx
// we can also use ternary operator

// we can write any type of html using jsx  

// here we use className instead of class
root.render(
  <StrictMode>
    {/* <h1>hello subhransu how are you  {ans} </h1> */}

   
     <>
   
    <p>Lorem ipsum dolor sit amet.</p>
     </>
  </StrictMode>
)

// whenever we dont want to use any extra node 
// in that case we use fragment <> </>

