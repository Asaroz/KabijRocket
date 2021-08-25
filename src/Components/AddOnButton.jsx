import React, { createContext, useContext, useReducer } from 'react';
import robotCounterContext from '../Contexts/robotCounterContext.jsx';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";
import RobotPerSecondContext from "../Contexts/robotPerSecondContext.jsx";



export default  function AddOnButton() {
    const [ robotCounter, setRobotCounter ] = useContext(RobotCounterContext);
    const [ rpsCounter, setRpsCounter ] = useContext(RobotPerSecondContext);
    
    //  rpsCounter = rpsCounter + amount *robotspersecond
    const initialState = {

        water: {
           count: 0, 
        },
        veg: {
           count:0,
         },
       };
      
     const reducer = (state, action) => {
         switch (action.type) {
           case 'WATER_INCREMENT':
            const test = {
                 ...state,
                water: {
                count: state.water.count + 1
               }
            };
             console.log(test)
            return test;
     
           case 'VEGETATION_INCREMENT':
             return {
                ...state,
                veg: {
                    count: state.veg.count + 1
                   }
             };
           
        

           case 'HOUSING_INCREMENT':
               return {
                count: state.count + 20
            };


           case 'DINOS_INCREMENT':
           return {
            count: state.count + 20
           };
              
           
  
           case 'ENERGY_INCREMENT':
               return {
                count: state.count + 20
               };
            
           
  
           case 'FACTORY_INCREMENT':
               return {
                count: state.count + 20
               };
             
           
  
           case 'FARMING_INCREMENT':
               return {
                count: state.count + 20
               };
           
           
  
           case 'MINING_INCREMENT':
               return {
                count: state.count + 20
               };
             default:
             return state;
        }
       };  
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        
        <button onClick={() => dispatch({type: 'WATER_INCREMENT'})} className="water btn"><h2>WATER</h2>{state.water.count}</button>
        <button onClick={() => dispatch({type: 'VEGETATION_INCREMENT'})} className="veg btn"><h2>VEGETATION</h2>{state.veg.count}</button>
        <button onClick={() => dispatch({type: 'HOUSING_INCREMENT'})} className="housing btn"><h2>HOUSING</h2></button>
        <button onClick={() => dispatch({type: 'DINOS_INCREMENT'})} className="dinos btn"><h2>DINOS</h2></button>
        <button onClick={() => dispatch({type: 'ENERGY_INCREMENT'})} className="energy btn"><h2>ENERGY</h2></button>
        <button onClick={() => dispatch({type: 'FACTORY_INCREMENT'})} className="factory btn"><h2>FACTORY</h2></button>
        <button onClick={() => dispatch({type: 'FARMING_INCREMENT'})} className="farm btn"><h2>FARMING</h2></button>
        <button onClick={() => dispatch({type: 'MINING_INCREMENT'})} className="mine btn"><h2>MINING</h2></button>
       
      </div>
    );
  };
  

