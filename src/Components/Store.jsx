import "../Styles/Store.scss";
import AddOnButton from "./AddOnButton";
import RobotCounterContext from "../Contexts/robotCounterContext.jsx"
import React, { useState, useContext } from "react"
import RobotGenerator from "./RobotGenerator"


export default function Store(){
   

    const [robotCounter,setRobotCounter] = useState(200)


    return (
        <div className="Store">
            <RobotCounterContext.Provider value ={[robotCounter,setRobotCounter]}>
                <AddOnButton />
                
            </RobotCounterContext.Provider>
        </div>
    )
    
};
