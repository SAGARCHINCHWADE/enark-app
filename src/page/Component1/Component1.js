import React from "react";
import Buttons from "../../Component/Button/Button";
import "./Component1.css";
import logo from "./../../assets/set.svg";
import Note from "../../Component/Note/Note";
import { useState } from "react";

const Component1 = () => {
  const [List, setList] = useState('');
  const [Counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(Counter+ 1);
    let arr = [...Array(Counter).keys()];
    setList(arr);

  };
  const handleDelete = (deletedItem) => {
    const updatedList = List.filter((item) => item !== deletedItem);
    setList(updatedList);
    console.log(List,'list after delete')
    setCounter(List.length)
  };
 
  // setList(arr);
  return (
    <div className="Main_container">
      <div className="tost_notification-inp">
        <Buttons onClick={handleClick}>toggelbutton</Buttons>
        <button className="set_btn">
          <img src={logo} className="set_btn_logo"></img>
        </button>
        {Counter}
      </div>
      <div className="notice_container">
        <Note List={List} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Component1;
