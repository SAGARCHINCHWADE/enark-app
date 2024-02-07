import React from "react";
import Header from "../page/Header/Header";
import Footer from "../page/Footer/Footer";
import Main from "../page/MainBody/Main";
import './Layout.css'

const Layout = () => {
  return (
    <div className="Layout_container">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
};

export default Layout;
