import React,{useReducer} from "react";

const addonObjects = {

    water: {
       amount: 0,
       rps:1,
       cost:10,
    },
    veg: {
       amount:0,
       rps:4,
       cost:20,
     },
   };
   



export const addonObjContext = React.createContext()


function AddonContextProvider(props){
    
    const reducer = (state, action) => {
        switch (action.type) {
          case 'WATER_INCREMENT':
           const test = {
                ...state,
               water: {
                 ...state.water,
                 amount: state.water.amount + 1
              }
           };
           return test;
    
          case 'VEGETATION_INCREMENT':
            return {
               ...state,
               veg: {
                 ...state.veg,
                 amount: state.veg.amount + 1
                  }
            };
          
       

          case 'HOUSING_INCREMENT':
              return {
               amount: state.amount + 20
           };


          case 'DINOS_INCREMENT':
          return {
           amount: state.amount + 20
          };
             
          
 
          case 'ENERGY_INCREMENT':
              return {
               amount: state.amount + 20
              };
           
          
 
          case 'FACTORY_INCREMENT':
              return {
               amount: state.amount + 20
              };
            
          
 
          case 'FARMING_INCREMENT':
              return {
               amount: state.amount + 20
              };
          
          
 
          case 'MINING_INCREMENT':
              return {
               amount: state.amount + 20
              };
            default:
            return state;
       }
      };  
   
      const [state, dispatch] = useReducer(reducer, addonObjects);
    return(
        <addonObjContext.Provider value={[state,dispatch]}> {props.children} </addonObjContext.Provider>
    )
}


export default AddonContextProvider