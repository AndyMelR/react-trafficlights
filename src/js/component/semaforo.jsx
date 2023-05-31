import React, { useState } from "react";
import ReactDOM from "react-dom";

const Semaforo = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <>
      <div className="container">
        <div className="traffic-top"></div>
        <div className="semaphore">
          <div
            className={`light ${color === "red" ? "red selected" : ""}`}
            onClick={() => handleClick("red")}
          ></div>
          <div
            className={`light ${color === "yellow" ? "yellow selected" : ""}`}
            onClick={() => handleClick("yellow")}
          ></div>
          <div
            className={`light ${color === "green" ? "green selected" : ""}`}
            onClick={() => handleClick("green")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Semaforo;
