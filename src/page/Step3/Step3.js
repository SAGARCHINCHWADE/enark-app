import React, { useEffect } from "react";
import Buttons from "../../Component/Button/Button";
import { useState } from "react";
import Pagenation from "../../Component/Pagenation/Pagenation";

const Step3 = () => {
  const [Timer, setTimer] = useState(0);
  const [Country, setCountry] = useState([]);

  const sendApiRequest = async () => {
    const responce = await fetch(
      "https://api.knowmee.co/api/v1/master/get-country-list"
    );
    const data = await responce.json();
    setCountry(data.responseData);
    console.log(Country, "contry");
  };

  const handleClick = () => {
    // Start the timer when button click
    const timerId = setTimeout(() => {
      // After timeout, send the API request
      console.log("time out start");
      sendApiRequest();
    }, Timer);
  };

  return (
    <div className="Step3_container">
      <h1>ENTER COUNTDOWN TIME</h1>
      <input
        placeholder="Enter Time in second"
        value={Timer}
        type="number"
        onChange={(e) => setTimer(e.target.value)}
      />
      <Buttons onClick={handleClick}>START TIMER</Buttons>

      {Country.length ? <Pagenation Country={Country} /> : null}
    </div>
  );
};

export default Step3;
