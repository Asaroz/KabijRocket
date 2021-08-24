import React from "react";
import Map from "./Components/Map";
import Store from "./Components/Store";
import "./Styles/App.scss"


export default function App(){
    return <div className="gameWrapper">
        <Map>
        </Map>
        <Store>
        </Store>
    </div>
}