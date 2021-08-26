import React, { useState, useContext } from "react";
import RobotGenerator from "./RobotGenerator";
import {addonObjContext} from "../Contexts/AddonObjContext.jsx";
import "../Styles/Map.scss";

// import cloud from "../resources/cloud.png";
import mountains from "../resources/mountains3.png";
import farm from "../resources/farming-button.png";
import mine from "../resources/mining.png";

export default function Map(){
    const  [state] = useContext(addonObjContext)
   

    return (
        <div className="map">

                <RobotGenerator />
                {state.water.amount > 0 && 
                   <img src={state.water.imgSrc[0]} className="cloud" alt="cloud" /> 
                }

                {state.water.amount > 5 && 
                <img src={state.water.imgSrc[1]}  className="water" alt="water" />
                }

                 {state.veg.amount > 0 && 
                   <img src={state.veg.imgSrc[0]} className="forest" alt="forest" /> 
                }

                
                {state.house.amount > 0 && 
                   <img src={state.house.imgSrc[0]} className="tippi" alt="tippi" /> 
                }

                
                {state.house.amount > 5 && 
                   <img src={state.house.imgSrc[1]} className="skyscrapers" alt="" /> 
                }

                {state.dinos.amount > 0 && 
                   <img src={state.dinos.imgSrc[0]} className="dinos" alt="dinos" /> 
                }

                {state.energy.amount > 0 && 
                   <img src={state.energy.imgSrc[0]} className="windmill" alt="windmill" /> 
                }
                
                {state.factory.amount > 0 && 
                   <img src={state.factory.imgSrc[0]} className="fabric" alt="fabric" /> 
                }
                
                {state.mining.amount > 0 && 
                   <img src={state.mining.imgSrc[0]} className="pickaxe" alt="pickaxe" /> 
                }

                {state.farming.amount > 0 && 
                   <img src={state.farming.imgSrc[0]} className="farm" alt="farm" /> 
                }
              
            
            <div className="planet">
            <img src={mountains} className="mountains" alt="" />
            

            </div>
           
        </div>
    )
    
};

