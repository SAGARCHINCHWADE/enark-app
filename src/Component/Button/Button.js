import React from "react";
import './Button.css'

const Buttons = ({children, ...otherProps}) => {  
  return (
    <div>
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
};
export default Buttons;