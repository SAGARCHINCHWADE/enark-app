import React from "react";
import Buttons from "./../Button/Button";
import "./Component1.css";
import logo from "./../../assets/set.svg";
import Note from "../Note/Note";

const Component1 = () => {
  return (
    <div className="Main_container">
      <div className="tost_notification-inp">
        <Buttons>toggelbutton</Buttons>
        <button className="set_btn">
          <img src={logo} className="set_btn_logo"></img>
        </button>
      </div>
      <div className="notice_container">
        <Note/>
      </div>
    </div>
  );
};

export default Component1;
