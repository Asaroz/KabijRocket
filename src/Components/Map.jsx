import React, { useState, useContext } from "react"
import RobotGenerator from "./RobotGenerator"
import "../Styles/Map.scss"

import imgCloud from "../resources/cloud.png"

export default function Map(){
   
    return (
        <div className="Map">

                <RobotGenerator />
                <img src={imgCloud} className="imgCloud" alt="" />
            <div className="Planet"/>
        </div>
    )
    
};