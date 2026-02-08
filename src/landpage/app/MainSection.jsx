import "./landpage.css"
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
   <h2>These are my Projects</h2>


    <p>i build a high quality project of all size
      and shapes
    </p>


   <div className="section">
    <Myproject1   src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  appname="UBER"  desc="you want an affordable ride then use uber"  />
   
    <Myproject1    {...carddetails}  />
   
    <Myproject1   src="https://imjustcreative.com/wp-content/uploads/2014/07/airbnb-logo-design-by-wearedesignstudio.png" appname="AIRBNB"  desc="Are you plannig for trip use AirBnb"  />
   
     
   </div>
   


   


  </div>
   
  )
}

export default MainSection