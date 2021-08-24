import React, {useState} from "react";

export default function RobotCounter(){
const [counter,setCounter] = useState(0)
    return (
        <div className="RobotCounter">{counter}</div>
    )
}