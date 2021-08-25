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
        }
      }


       
    return (
      <div>
        
        <button onClick={() => Click({type: 'WATER_INCREMENT'},state.water)} className="water btn"><h2>WATER</h2>{state.water.amount}</button>
        <button onClick={() => Click({type: 'VEGETATION_INCREMENT'},state.veg)} className="veg btn"><h2>VEGETATION</h2>{state.veg.amount}</button>
        <button onClick={() => dispatch({type: 'HOUSING_INCREMENT'})} className="housing btn"><h2>HOUSING</h2></button>
        <button onClick={() => dispatch({type: 'DINOS_INCREMENT'})} className="dinos btn"><h2>DINOS</h2></button>
        <button onClick={() => dispatch({type: 'ENERGY_INCREMENT'})} className="energy btn"><h2>ENERGY</h2></button>
        <button onClick={() => dispatch({type: 'FACTORY_INCREMENT'})} className="factory btn"><h2>FACTORY</h2></button>
        <button onClick={() => dispatch({type: 'FARMING_INCREMENT'})} className="farm btn"><h2>FARMING</h2></button>
        <button onClick={() => dispatch({type: 'MINING_INCREMENT'})} className="mine btn"><h2>MINING</h2></button>
       
      </div>
    );
  };
  

