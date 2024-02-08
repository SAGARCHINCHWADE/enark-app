import { useState } from "react";
import Buttons from "../Button/Button";
import "./PopupModel.css";

const PopupModel = ({ onclose }) => {
  const [Timer, setTimer] = useState();
  console.log(" papumode is on");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={(e) => setTimer(e.target.value)}
          />
          <Buttons type="submit">SUBMIT</Buttons>
        </form>
      </div>
    </div>
  );
};

export default PopupModel;
