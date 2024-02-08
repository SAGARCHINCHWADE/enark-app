import React from "react";
import { Routes, Route } from "react-router-dom";
import Component1 from "../Component1/Component1";
import './Main.css'
import Step2 from "../Step2/Step2";



const Main = () => {
  return(
    <div className="main_container">
      <Routes>
        <Route path='/' element={<Component1/>}/>
        <Route path='/step2' element={<Step2/>}/>
        

      </Routes>
    </div>
  );
};

export default Main;
