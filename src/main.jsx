import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Landpage from "./landpage/app/Landpage.jsx"
import Landing from './assignmet2/Landing'



const root=createRoot(document.getElementById("root"))

root.render(
   <>
  <Landing/>
   </>
)

