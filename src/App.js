import on from "./images/ONbulb.jpg"
import off from "./images/OFFbulb.jpg"
import { useState } from "react";

const App = () => {
  const [isOn,setIsOn]=useState(false);


  const handleOnclick=()=>{
    setIsOn(!isOn);
  }
  return (
    <div className="main">
       {/* Place the 2 images here...*/}

       <img src={on} alt="on" style={{display: isOn?"block":"none"}}/> 
       <img src={off} alt="off" style={{display: isOn?"none":"block"}}/>
       <button className="button"  onClick={handleOnclick}>Turn On / Off</button>

    </div>

  )
}

export default App