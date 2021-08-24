import React, { useState,useContext } from "react"
import "../Styles/Map.scss"
import RobotGenerator from "./RobotGenerator"
// import RobotCounter from "./RobotCounter"
import RobotCounterContext from "../Contexts/robotCounterContext.jsx"

export default function Map(){
   

    const [robotCounter,setRobotCounter] = useState(200)


    return (
        <div className="Map">
            <RobotCounterContext.Provider value ={[robotCounter,setRobotCounter]}>
                <RobotGenerator />
                
            </RobotCounterContext.Provider>
        </div>
    )
    
};