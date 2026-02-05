import "../../index.css"
import arrow from "../../assets/arrow.svg"
import Myproject1 from "../../component.jsx/Myproject1"

const MainSection = () => {
  return (

  <div className="maincontainer">
    <p>
        My name is Subhransu
    </p>

    <ol>
        <li>I like React Programming</li>
        <li>I like Vite also,WebPack not so much</li>
        <li>Let's build some interactive React Projector</li>
    </ol>
   
   <div className="button">
    <span>Hire Me</span> <img src={arrow} alt="" />
   </div>

   <section>
    <Myproject1  appname="Uber"
     desc="we can use this app to get the 
     vechile service immidiately
     "/>
    <Myproject1/>
    <Myproject1/>


   </section>


  </div>
   
  )
}

export default MainSection