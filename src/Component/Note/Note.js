import React, { useEffect, useState } from "react";
import "./Note.css";

const Note = ({ ele, removeCard }) => {
  // const [Pause, setPause] = useState(false);
  // const [timeoutId, setTimeoutId] = useState(null);

  // const MouseEnter = () => {
  //   clearTimeout(timeoutId);
  // };

  // const MouseLeave=()=>{
  //   if(!Pause){
  //     setTimeoutId(setTimeout(()=>{
  //       setPause(false)
  //     },5000))
  //   }
  // }

  useEffect(() => {
    const Timer = localStorage.getItem("Timer");
    console.log('localstoragetimer',Timer)
    setTimeout(() => {
      removeCard(ele);
    }, Timer*1000);
    return clearTimeout();
  }, []);

  if (ele) {
    return (
      <div key={ele.newCardId} className="Notes_gather">
        <div
          // onMouseEnter={MouseEnter}
          // onMouseLeave={MouseLeave}
          className="note_ele"
        >
          {ele.Message ? (
            <p> {ele.Message}</p>
          ) : (
            <p>MODULE {ele.newCardId % 100}</p>
          )}

          <button
            onClick={() => {
              removeCard(ele);
            }}
          >
            x
          </button>
        </div>
      </div>
    );
  }
};

export default Note;
