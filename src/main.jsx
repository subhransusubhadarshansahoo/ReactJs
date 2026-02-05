import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landpage from "./landpage/app/Landpage.jsx"



const root=createRoot(document.getElementById("root"));

root.render(
   <>
  <div className="rootcontainer">
   <Landpage/>
   
   
    
  </div>
 
   </>

)
