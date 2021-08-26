import { useContext } from "react";
import robotCounterContext from "../Contexts/robotCounterContext.jsx"
import rpsContext from "../Contexts/robotPerSecondContext"

export default function RobotGenerator() {
    const robotCounter = useContext(robotCounterContext)
    const [robotCount,setRobotCount] = robotCounter
    const [rpsCounter,setRpsCounter] = useContext(rpsContext)
   
    function createRobots(){
        setRobotCount(robotCount+1)
    }


    return (
        <div className="robotGeneratorWrapper">
            <button onClick={createRobots}>Create Robot</button>
            <div>Robots: {robotCount}</div>
            <div>Rps: {rpsCounter}</div>
        </div>
    )


};