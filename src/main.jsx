import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
 import Landpage from "./landpage/app/Landpage.jsx"
 import"./main.css"





const root=createRoot(document.getElementById("root"))

root.render(
   <>
   <div className="min-h-screen flex items-center justify-center bg-red-800">
  <h2 className="bg-amber-300 text-white px-6 py-3 rounded">
  Hello
</h2>
  </div>
   </>
)

