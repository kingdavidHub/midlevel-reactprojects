import "./index.css";
import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // General utitlity
  function randomColorUititlity(length) {
    return Math.floor(Math.random() * length);
  }

  // Hex color
  const handleCreateRandomHexColor = () => {
    // Hex  color has 6 digits so our logic will have
    // #00000 have numbers from 0 - 9 and alphabet from abcdef
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let storage = "#";
    let i = 0;
    for (i; i < 6; i++) {
      storage += hex[randomColorUititlity(hex.length)];
    }
    setColor(storage);
  };

  // RGB color
  const handleCreateRandomRgbColor = () => {
    // color: rgb(255, 255, 255);
    const red = randomColorUititlity(256);
    const green = randomColorUititlity(256);
    const blue = randomColorUititlity(256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };


  useEffect(() => {
    if(typeOfColor === 'rgb'){
      handleCreateRandomRgbColor();
    }else if(typeOfColor === 'hex') {
      handleCreateRandomHexColor();
    }

  }, [typeOfColor]); // everytime this typeOfColor state is changed call the function inside the useEffect callback 


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
            flexDirection: "column",
            gap: "5rem",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
            width: "inherit",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
