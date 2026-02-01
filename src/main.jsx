import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// const root=createRoot(document.getElementById("root"));
// let ans=2+2;

// let name="subhransu" 

// let exp=<h1>hello {name} how are you </h1>
// let age=19

// when you want to write expression use {} in jsx

// we can also use ternary operator

// we can write any type of html in  jsx  


// here we use className instead of class

  
// we can add style in jsx as an object 

// In JSX style objects, CSS properties with hyphens must be written in camelCase. You wrote:

// let styleval={
//   backgroundColor:"yellow",
// fontWeight:"bolder",

//   display:"inline"
  
// }
// root.render(
//   <StrictMode>
//     {/* <h1>hello subhransu how are you  {ans} </h1> */}

      
       


//      <>
//    {name&&exp}
//    {age>=18?<p>you can drive</p>:<p>you can not drive </p>}
//     <p style={styleval}>Lorem ipsum dolor sit amet.</p>
//      </>
//   </StrictMode>
// )

// whenever we dont want to use any extra node 
// in that case we use fragment <> </>




// imp note-->the above part  in the main .jsx is about how to use the jsx 

// now we are going to make a small project inside main.jsx 


const root=createRoot(document.getElementById("root")).render(
<>
<img src="/vite.svg" alt="" srcset="" style={
  {
    height:"100px",  }}  />

    <div className='text'>
     <p className='childText' >Hi, I am a React</p>
     <p className='childText'> Devloper</p>
     
    </div>

    <p id="name">My name is Subhransu </p>

    <ol>
      <li>i  like vite ,Webpack Not  so much</li>
      <li>Let's make the web interactive and awesom </li>
      <li>Building cool user interfaces with React</li>
    </ol>

    <button>Hire Me</button>


</>

)



