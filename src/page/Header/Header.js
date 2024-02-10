import React from "react"; 
import { useNavigate } from "react-router-dom";
import './Header.css'

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className="Nav_container">
      <div>
        <h1 className="header"> Header </h1>
      </div>
      <div className="Nav_components">
        <div onClick={()=>navigate('/')} className="Nav_ele"> <p> STEP 1 </p></div>
        <div onClick={()=>navigate('/step2')} className="Nav_ele"> <p> STEP 2 </p></div>
        <div onClick={()=>navigate('/step3')} className="Nav_ele"> <p> STEP 3  </p></div>
      </div>
    </div>
  );
};

export default Header;
