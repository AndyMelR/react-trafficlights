
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Semaforo = () => {
  const black= "black";
  const red = "red";
  const orange = "orange";
  const green = "green";

  const [trafficLights, setTrafficLights] = useState(black);

  const startTrafficLights = () => {
    setTrafficLights(red);
    setTimeout(() => setTrafficLights(orange), 3000);
    setTimeout(() => setTrafficLights(green), 6000);
    setTimeout(() => setTrafficLights(red), 9000);
  };

  return (
    <>
    <div id="top-trafficlight"></div>
      <div className="container">
        
        <div className={`light ${trafficLights === red ? red : black}`}></div>
        <div className={`light ${trafficLights === orange ? orange : black}`}></div>
        <div className={`light ${trafficLights === green ? green : black}`}></div>
        
      </div>
      <div id="button">
          <button className= "btn btn-lg btn-success" onClick={() => startTrafficLights()}>Switch On</button>
        </div>
      
    </>
  );
};

export default Semaforo;

