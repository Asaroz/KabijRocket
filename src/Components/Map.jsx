import React, { useState,useContext } from "react"
import "../Styles/Map.scss"
import RobotGenerator from "./RobotGenerator"

// import RobotCounter from "./RobotCounter"

import imgCloud from "../resources/cloud.png"

export default function Map(){
   
    return (
        <div className="Map">

                <RobotGenerator />
                <img src={imgCloud} className="imgCloud" alt="" />
                <img src="img_girl.jpg" alt="Girl in a jacket" />
                <img src="img_girl.jpg" alt="Girl in a jacket" />
            <div className="Planet"/>
        </div>
    )
    
};