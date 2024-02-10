import { useState } from "react";
import Buttons from "../Button/Button";
import "./PopupModel.css";

const PopupModel = ({ onclose }) => {
  const [Timer, setTimer] = useState(7);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Timer, "popmodel");
    localStorage.setItem("Timer", Timer);
    onclose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onclose} className="close">
          &times;
        </span>
        <h1>SET TIMEOUT</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={Timer}
            placeholder="time in second"
            onChange={(e) => setTimer(e.target.value)}
          />
          <Buttons type="submit">SUBMIT</Buttons>
        </form>
      </div>
    </div>
  );
};

export default PopupModel;
