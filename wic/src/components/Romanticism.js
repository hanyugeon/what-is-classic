import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "../../node_modules/react-router-dom/index";

const Romanticism = () => {
  return (
    <div>
      <h2>낭만주의</h2>
      <p>낭만주의 작곡가들이에요.</p>
      <ul>
        <li>
          <Link to="/romanticism/chopin">쇼팽</Link>
        </li>
        <li>
          <Link to="/romanticism/liszt">리스트</Link>
        </li>
        <li>
          <Link to="/romanticism/rachmaninoff">라흐마니노프</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Romanticism;
