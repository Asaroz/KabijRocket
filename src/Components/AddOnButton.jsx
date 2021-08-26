import React, { createContext, useContext, useReducer, useState } from 'react';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";
import RobotPerSecondContext from "../Contexts/robotPerSecondContext.jsx";
import {addonObjContext} from "../Contexts/AddonObjContext.jsx";
import imgCloud from "../resources/cloud.png";
import mountains from "../resources/mountains.png";
import mines from "../resources/mining.png";
import water from "../resources/water.png";
import housing from "../resources/housing.png";
import dinoButton from "../resources/dinosaur-button.png"
import farmingButton from "../resources/farming-button.png"
import housingButton from "../resources/housing-button.png"
import energyButton from "../resources/energy-button.png"
import waterButton from "../resources/water-button.png"
import vegButton from "../resources/vegetation-button.png"
import factoryButton from "../resources/factory-button.png"
import miningButton from "../resources/mining-button.png"


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
      <div className="btnContainer">
        
        <div onClick={() => Click({type: 'WATER_INCREMENT'},state.water)} className="water btn"><img className="addOnicon" src={waterButton}/><h2>WATER</h2><h3>{state.water.amount}</h3></div>
        <div onClick={() => Click({type: 'VEGETATION_INCREMENT'},state.veg)} className="veg btn"><img className="addOnicon" src={vegButton}/><h2>VEGETATION</h2><h3>{state.veg.amount}</h3></div>
        <div onClick={() => Click({type: 'HOUSING_INCREMENT'},state.house)} className="housing btn"><img className="addOnicon" src={housingButton}/><h2>HOUSING</h2><h3>{state.house.amount}</h3></div>
        <div onClick={() => Click({type: 'DINOS_INCREMENT'},state.dinos)} className="dinos btn"><img className="addOnicon" src={dinoButton}/><h2>DINOS</h2><h3>{state.dinos.amount}</h3></div>
        <div onClick={() => Click({type: 'ENERGY_INCREMENT'},state.energy)} className="energy btn"><h2>ENERGY</h2><h3>{state.energy.amount}</h3></div>
        <div onClick={() => Click({type: 'FACTORY_INCREMENT'},state.factory)} className="factory btn"><img className="addOnicon" src={factoryButton}/><h2>FACTORY</h2><h3>{state.factory.amount}</h3></div>
        <div onClick={() => Click({type: 'FARMING_INCREMENT'},state.farming)} className="farm btn"><img className="addOnicon" src={farmingButton}/><h2>FARMING</h2><h3>{state.farming.amount}</h3></div>
        <div onClick={() => Click({type: 'MINING_INCREMENT'},state.mining)} className="mine btn"><img className="addOnicon" src={miningButton}/><h2>MINING</h2><h3>{state.mining.amount}</h3></div>
       
      </div>
    );
  };
  

