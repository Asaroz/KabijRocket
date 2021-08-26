import React, { useState, useContext } from "react"
import RobotGenerator from "./RobotGenerator"
import "../Styles/Map.scss"

import imgCloud from "../resources/cloud.png";
import mountains from "../resources/mountains.png";

export default function Map(){
   
    return (
        <div className="map">

                <RobotGenerator />
                <img src={imgCloud} className="cloud" alt="" />
                
            <div className="planet">
            <img src={mountains} className="mountains" alt="" />

            </div>
           
        </div>
    )
    
};