import React, { useEffect } from "react";
import Buttons from "../../Component/Button/Button";
import { useState } from "react";
import Pagenation from "../../Component/Pagenation/Pagenation";

const Step3 = () => {
  const [Timer, setTimer] = useState(0);
  const [Country, setCountry] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const sendApiRequest = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.knowmee.co/api/v1/master/get-country-list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCountry(data.responseData);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
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

      {Country.length ? <Pagenation Country={Country} Loading={Loading} Error={Error}/> : null}
    </div>
  );
};

export default Step3;
