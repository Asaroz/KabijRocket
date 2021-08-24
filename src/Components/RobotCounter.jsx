import React, {useState,useContext} from "react";

export default function RobotCounter(){
const [counter,setCounter] = useState(0)
    return [counter,setCounter]

}