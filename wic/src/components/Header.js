import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="title">What Is Classic</div>
      <div className="nav">바로크 음악</div>
      <div className="nav">고전주의</div>
      <div className="nav">낭만주의</div>
    </div>
  );
};

export default Header;
