import QRCode from "react-qr-code";
import "./style.css";
import { useState } from "react";

const QrcodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="qrcode">
      <div className="qrcode-container ">
        <h1>QR Code Generator</h1>
        <div className="qrcode-form">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            name="qr-code"
            placeholder="Enter text"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            className={
              input && input.trim() !== ""
                ? "button-allowed"
                : "button-disabled"
            }
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>

        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default QrcodeGenerator;
