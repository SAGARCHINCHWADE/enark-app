import React from "react";
import "./Note.css";

const Note = ({ ele, removeCard }) => {
  if (ele) {
    return (
      <div className="Notes_gather">
        <div key={ele.newCardId} className="note_ele">
          {ele.message ? (
            <p>MODULE {ele.newCardId % 100}</p>
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
