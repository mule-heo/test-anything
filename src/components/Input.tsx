import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { phoneNumberFormat } from "../utils/format";
import "./input.css";

function Input() {
  const [number, setNumber] = useState<string>("010");
  const navigate = useNavigate();
  const handleClickButton = (event: { target: EventTarget }) => {
    if ("value" in event.target && event.target.value === "backspace") {
      setNumber(number.slice(0, Math.max(0, number.length - 1)));
      return;
    }
    if (number.length === 11) return;
    if ("value" in event.target)
      setNumber(number.concat(event.target.value as string));
  };
  return (
    <>
      <div className="input-container">
        <div className="input-number">{phoneNumberFormat(number)}</div>
        <div className="button-wrapper">
          <div className="button-row">
            <button value="7" onClick={handleClickButton}>
              7
            </button>
            <button value="8" onClick={handleClickButton}>
              8
            </button>
            <button value="9" onClick={handleClickButton}>
              9
            </button>
          </div>
          <div className="button-row">
            <button value="4" onClick={handleClickButton}>
              4
            </button>
            <button value="5" onClick={handleClickButton}>
              5
            </button>
            <button value="6" onClick={handleClickButton}>
              6
            </button>
          </div>
          <div className="button-row">
            <button value="1" onClick={handleClickButton}>
              1
            </button>
            <button value="2" onClick={handleClickButton}>
              2
            </button>
            <button value="3" onClick={handleClickButton}>
              3
            </button>
          </div>
          <div className="button-row">
            <button value="backspace" onClick={handleClickButton}>
              ←
            </button>
            <button value="0" onClick={handleClickButton}>
              0
            </button>
            <button
              onClick={() => {
                navigate("/confirm");
              }}
            >
              done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
