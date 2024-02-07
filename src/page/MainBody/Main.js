import React from "react";
import { Routes, Route } from "react-router-dom";
import Component1 from "../Component1/Component1";
import './Main.css'


const Main = () => {
  return(
    <div className="main_container">
      <Routes>
        <Route path='/' element={<Component1/>}/>
      </Routes>
    </div>
  );
};

export default Main;
