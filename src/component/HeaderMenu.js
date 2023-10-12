import React from "react";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="mainHeader">
      <div className="leftHeader">
        <p>StartUp3</p>
      </div>
      <div className="rightHeader">
        <a href="" style={{ opacity: 0.3 }}>
          Overview
        </a>
        <a href="">Price</a>
        <a href="">Blog</a>
        <a href="">Feedback</a>
        <button className="menuButton">Purchase</button>
      </div>
    </div>
  );
};

export default HeaderMenu;
