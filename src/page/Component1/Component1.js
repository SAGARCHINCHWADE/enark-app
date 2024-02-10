import React, { useEffect,useState } from "react";
import Buttons from "../../Component/Button/Button";
import "./Component1.css";
import logo from "./../../assets/set.svg";
import Note from "../../Component/Note/Note";
import PopupModel from "../../Component/PopupModel/PopupModel";

const Component1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);



  const addCard = () => {
    const newCardId = Date.now();
    console.log(newCardId,'time')
    setCards([...cards, { newCardId }]);
  };

  const removeCard = (id) => {
    console.log(id, "remove card");
    const RemArr = cards.filter((cardId) => cardId !== id);
    setCards(RemArr);
  };
  


  const onclose = () => {
    console.log(" click on closes mode");
    setShowModal(false);
  };

  return (
    <div className="Main_container">
      <div className="tost_notification-inp">
        <Buttons onClick={addCard}>toggelbutton</Buttons>
        <button className="set_btn">
          <img
            src={logo}
            onClick={() => setShowModal(true)}
            className="set_btn_logo"
          ></img>
        </button>
      </div>
      {/* -------------bottom cards---------------- */}
      <div>
        {cards.slice(-3).map((ele) => (
          <Note key={ele} ele={ele} removeCard={removeCard} />
        ))}
      </div>

      {/* ---------------popup model----------------- */}
      {showModal && <PopupModel onclose={onclose} />}
    </div>
  );
};

export default Component1;
