import on from "./images/ONbulb.jpg"
import off from "./images/OFFbulb.jpg"
import { useState, useEffect} from "react";


const App = () => {
  const [isOn,setIsOn]=useState(false);
  const [text, setText]=useState("");
 
  const info="Welcome to this small code demonstration. I did this to teach one of my students who is still a novice in react, how to handle stuff like this."
  


  const handleOnclick=()=>{
    setIsOn(!isOn);
  }
  
  useEffect(()=>{
    let i=0;
    let infoLength=info.length;
    let char;
     
  let intervalID=setInterval(()=>{
                     
                     if(i<infoLength){
                      char=info[i]
                      setText(prev=>prev+char)
                      
                     }
                     i++
                  },100)
                return ()=>{
                  clearInterval(intervalID)
                  setText("")
                }

  },[])
  return (
    <div className="main">
       {/* Place the 2 images here...*/}

       <img src={on} alt="on" style={{display: isOn?"block":"none"}}/> 
       <img src={off} alt="off" style={{display: isOn?"none":"block"}}/>
       <button className="button"  onClick={handleOnclick} style={{width: 100, height: 20}}>Turn On / Off</button>
       <div className="info">
       <p>
        {text}
       </p>
       </div>


    </div>

  )
}

export default App