import "./index.css";
import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Hex color
  const handleCreateRandomHexColor = () => {
    // Hex  color has 6 digits so our logic will have
    // #00000 have numbers from 0 - 9 and alphabet from abcdef
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    // let index = 6;
    let storage = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumberGenerate = Math.floor(Math.random() * hex.length);
      storage += hex[randomNumberGenerate];
    }
    console.log(storage);
    setColor(storage);
  };



  // RGB color
  const handleCreateRandomRgbColor = () => {
    // color: rgb(255, 255, 255);

    // storage
    let generated = "";
    
    let index = 0;
    let digit = 255;
    for (index; index < 3; index++) {
      const randNum = Math.floor(Math.random() * 255);
      generated += `${randNum},`;
    }
    
    let storage = `rgb(${generated})`;
    console.log(storage);
  };

  return (
    <>
      <div
        className="random"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setTypeOfColor("hex")}>
            Create HEX Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : typeOfColor === "rgb"
                ? handleCreateRandomRgbColor
                : null
            }
          >
            Generate Random Color
          </button>
        </div>

        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
            width: "inherit",
          }}
        >
          <div>
            <h1>{color}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
