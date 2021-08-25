import React,{useState, useEffect} from "react";
import Map from "./Components/Map";
import Store from "./Components/Store";
import "./Styles/App.scss"
import RobotCounterContext from "./Contexts/robotCounterContext.jsx";
import RobotPerSecond from "./Contexts/robotPerSecondContext.jsx";


export default function App(){
    const [robotCounter, setRobotCounter] = useState(0)
    const [rpsCounter, setRpsCounter] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
          gameTick();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
    function gameTick(){

        setRobotCounter(prevrobotCounter => prevrobotCounter + rpsCounter);

    };
    

    return <div className="gameWrapper">
        <RobotCounterContext.Provider value ={[robotCounter,setRobotCounter]}>
            <RobotPerSecond.Provider value = {[rpsCounter,setRpsCounter]}>
              <Map/>
              <Store/>  
            </RobotPerSecond.Provider>
        </RobotCounterContext.Provider>
    </div>
}