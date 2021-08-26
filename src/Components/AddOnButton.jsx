import React, { createContext, useContext, useReducer, useState } from 'react';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";
import RobotPerSecondContext from "../Contexts/robotPerSecondContext.jsx";
import {addonObjContext} from "../Contexts/AddonObjContext.jsx";



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

    function display(){

    }
       
    return (
      <div>
        
        <button onClick={() => Click({type: 'WATER_INCREMENT'},state.water)} className="water btn">
          <h2>WATER</h2>Amount:{state.water.amount} costs:{state.water.cost} Rps:{state.water.rps} </button>

        <button onClick={() => Click({type: 'VEGETATION_INCREMENT'},state.veg)} className="veg btn">
          <h2>VEGETATION</h2>Amount:{state.veg.amount} costs:{state.veg.cost} Rps:{state.veg.rps}</button>

        <button onClick={() => Click({type: 'HOUSING_INCREMENT'},state.house)} className="housing btn">
          <h2>HOUSING</h2>Amount:{state.house.amount} costs:{state.house.cost} Rps:{state.house.rps}</button>

        <button onClick={() => Click({type: 'DINOS_INCREMENT'},state.dinos)} className="dinos btn">
          <h2>DINOS</h2>Amount:{state.dinos.amount} costs:{state.dinos.cost} Rps:{state.dinos.rps}</button>

        <button onClick={() => Click({type: 'ENERGY_INCREMENT'},state.energy)} className="energy btn">
          <h2>ENERGY</h2>Amount:{state.energy.amount} costs:{state.energy.cost} Rps:{state.energy.rps}</button>

        <button onClick={() => Click({type: 'FACTORY_INCREMENT'},state.factory)} className="factory btn">
          <h2>FACTORY</h2>Amount:{state.factory.amount} costs:{state.factory.cost} Rps:{state.factory.rps}</button>

        <button onClick={() => Click({type: 'FARMING_INCREMENT'},state.farming)} className="farm btn">
          <h2>FARMING</h2>Amount:{state.farming.amount} costs:{state.farming.cost} Rps:{state.farming.rps}</button>

        <button onClick={() => Click({type: 'MINING_INCREMENT'},state.mining)} className="mine btn">
          <h2>MINING</h2>Amount:{state.mining.amount} costs:{state.mining.cost} Rps:{state.mining.rps}</button>
       
      </div>
    );
  };
  

