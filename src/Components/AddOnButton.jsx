import React, { createContext, useContext, useReducer } from 'react';
import RobotCounterContext from "../Contexts/robotCounterContext.jsx";

const [ robotCounter, setRobotCounter ] = useContext(RobotCounterContext);

const initialState = {
    robotsPerSec: 4,
    imagePrinted: null, 
    amount: 2,
    


  };
 
const reducer = (state, action) => {
    switch (action.type) {
      case 'WATER_INCREMENT':
        return {
            count: state.count + 1
        };
 

      case 'VEGETATION_INCREMENT':
        return {
         count: state.count + 20
        };
      default:
        return state;
    }
  };  




  const Store = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
         <h1> Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'WATER_INCREMENT'})}><h2>WATER</h2></button>
        <button onClick={() => dispatch({type: 'VEGETATION_INCREMENT'})}><h2>VEGETATION</h2></button>
       
      </div>
    );
  };
  

export default Store;