import "./landpage.css"
import arrow from "../../assets/arrow.svg"
import Myproject1 from "../../component.jsx/Myproject1"

const MainSection = () => {
let arr=[
  {  src:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" ,
    appname:"UBER",  desc:"you want an affordable ride then use uber" ,
    id:"1"

  },
  {src:"https://imjustcreative.com/wp-content/uploads/2014/07/airbnb-logo-design-by-wearedesignstudio.png" ,appname:"AIRBNB" ,
     desc:"Are you plannig for trip use AirBnb"
    ,id:"4"},
  {src:"https://data1.ibtimes.co.in/en/full/767511/myntra.png",
    desc:"get clothes in an affordable price",

    appname:"MYntra"
    ,id:"3"
  },
  
  {src:"https://images.firstpost.com/wp-content/uploads/2019/08/Zomato-Logo-10241.jpg",
    desc:"get food immediatley",
    appname:"Zomato"
    ,id:"4"
  },
  
  {src:"https://wallpaperswide.com/download/netflix-wallpaper-2880x1620.jpg",
    desc:"Watch any type of Movie",
    appname:"Netflix"

  },
  
]
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
   {
    arr.map(el=>(
      <Myproject1 {...el} />
    ))
   }
     
   </div>
   


   


  </div>
   
  )
}

export default MainSection