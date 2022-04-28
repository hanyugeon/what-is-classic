import React from "react";
import { Link } from "react-router-dom";

const Claussicus = () => {
  return (
    <div>
      <h2>고전주의</h2>
      <p>고전주의 작곡가들이에요.</p>
      <ul>
        <li>
          <Link to="/claussicus/mozart">모차르트</Link>
        </li>
        <li>
          <Link to="/claussicus/beethoven">베토벤</Link>
        </li>
      </ul>
    </div>
  );
};

export default Claussicus;
