import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        What Is Classic
      </Link>
      <Link to="/baroque" className="nav">
        바로크 음악
      </Link>
      <Link to="/claussicus" className="nav">
        고전주의
      </Link>
      <Link to="/romanticism" className="nav">
        낭만주의
      </Link>
    </div>
  );
};

export default Header;
