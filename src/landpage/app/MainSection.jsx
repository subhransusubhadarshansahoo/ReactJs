import "../../index.css"
import arrow from "../../assets/arrow.svg"
import Myproject1 from "../../component.jsx/Myproject1"

const MainSection = () => {

  const carddetails={
    src:"https://thumbs.dreamstime.com/z/swiggy-online-food-delivery-company-logo-samsung-tablet-119522447.jpg",
    appname:"Swiggy",
    desc:"are you felling hungry then why not to use swiggy"
    
  
  }
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
     vechile service immidiately" 
     src="https://www.pngall.com/wp-content/uploads/4/Uber-Logo-PNG-Free-Image.png"/>
    <Myproject1 appname="airbnb" 
                desc="you need hotel according 
                your budget then why not to use 
                air bnb"
                src="https://cdn.1min30.com/wp-content/uploads/2018/02/Couleur-logo-Airbnb.jpg"/>
    
    <Myproject1   {...carddetails}/>


   </section>


  </div>
   
  )
}

export default MainSection