import React, { useState,useContext } from "react"
import "../Styles/Map.scss"
import RobotGenerator from "./RobotGenerator"
// import RobotCounter from "./RobotCounter"


export default function Map(){
   
    return (
        <div className="Map">
            
                <RobotGenerator />
                
            
        </div>
    )
    
};