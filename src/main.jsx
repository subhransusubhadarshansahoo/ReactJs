import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

 import"./main.css"
 import MainRoot from './UIPLAYGROUND/MainRoot'





const root=createRoot(document.getElementById("root"))

root.render(
   <>
  <div className="flex flex-col min-h-screen  items-center">
  <MainRoot/>
</div>



   </>
)

