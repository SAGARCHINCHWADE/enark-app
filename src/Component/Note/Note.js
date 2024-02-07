import React from "react";
import "./Note.css";


const Note = ({ List, handleDelete }) => {
  if (List) {
    return (
      <div className="Notes_gather">
        {List.map((ele, index) => (
          <div key={ele} className="note_ele">
            <p>testing{ele}</p>
            <button
              onClick={() => {
                handleDelete(ele);
              }}
            >
              x{index}
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Note;
