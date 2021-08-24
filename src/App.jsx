import React,{useState} from "react";
import Map from "./Components/Map";
import Store from "./Components/Store";
import "./Styles/App.scss"
import RobotCounterContext from "./Contexts/robotCounterContext.jsx"


export default function App(){

    const [robotCounter,setRobotCounter] = useState(200)


    return <div className="gameWrapper">
        <RobotCounterContext.Provider value ={[robotCounter,setRobotCounter]}>
            <Map>
            </Map>
            <Store>
            </Store>
        </RobotCounterContext.Provider>
    </div>
}