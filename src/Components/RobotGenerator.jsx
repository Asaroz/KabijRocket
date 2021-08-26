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
            <button onClick={createRobots} className="rocket"></button>
            <h3>Robots: {robotCount}</h3>
            <h3>Rps: {rpsCounter}</h3>
        </div>
    )


};