import React from "react";
import { Link, Outlet } from "react-router-dom";

const Baroque = () => {
  return (
    <div>
      <h2>바로크 음악</h2>
      <p>바로크 음악 작곡가들이에요.</p>
      <ul>
        <li>
          <Link to="/baroque/bach">바흐</Link>
        </li>
        <li>
          <Link to="/baroque/handel">핸델</Link>
        </li>
        <li>
          <Link to="/baroque/vivaldi">비발디</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Baroque;
