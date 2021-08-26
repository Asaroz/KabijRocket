import React, { createContext, useContext, useReducer, useState } from 'react';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";
import RobotPerSecondContext from "../Contexts/robotPerSecondContext.jsx";
import {addonObjContext} from "../Contexts/AddonObjContext.jsx";

import imgCloud from "../resources/cloud.png";
import mountains from "../resources/mountains.png";
import mines from "../resources/mining.png";
import water from "../resources/water.png";
import housing from "../resources/housing.png";




export default  function AddOnButton() {
    const [ robotCounter, setRobotCounter ] = useContext(RobotCounterContext);
    const [ rpsCounter, setRpsCounter ] = useContext(RobotPerSecondContext);
    const  [state,dispatch] = useContext(addonObjContext)

    //  rpsCounter = rpsCounter + amount *robotspersecond
    
    
    function Click(type,name){
      if(robotCounter >= name.cost ){
        dispatch(type);
        setRobotCounter(robotCounter-name.cost)
        console.log(robotCounter)
        setRpsCounter(()=>rpsCounter + name.rps)
        }
        
      }


       
    return (
      <div>
        
        <button onClick={() => Click({type: 'WATER_INCREMENT'},state.water)} className="water btn"><h2>WATER</h2>{state.water.amount}</button>
        <button onClick={() => Click({type: 'VEGETATION_INCREMENT'},state.veg)} className="veg btn"><h2>VEGETATION</h2>{state.veg.amount}</button>
        <button onClick={() => Click({type: 'HOUSING_INCREMENT'},state.house)} className="housing btn"><h2>HOUSING</h2>{state.house.amount}</button>
        <button onClick={() => Click({type: 'DINOS_INCREMENT'},state.dinos)} className="dinos btn"><h2>DINOS</h2>{state.dinos.amount}</button>
        <button onClick={() => Click({type: 'ENERGY_INCREMENT'},state.energy)} className="energy btn"><h2>ENERGY</h2>{state.energy.amount}</button>
        <button onClick={() => Click({type: 'FACTORY_INCREMENT'},state.factory)} className="factory btn"><h2>FACTORY</h2>{state.factory.amount}</button>
        <button onClick={() => Click({type: 'FARMING_INCREMENT'},state.farming)} className="farm btn"><h2>FARMING</h2>{state.farming.amount}</button>
        <button onClick={() => Click({type: 'MINING_INCREMENT'},state.mining)} className="mine btn"><h2>MINING</h2>{state.mining.amount}</button>
       
      </div>
    );
  };
  

