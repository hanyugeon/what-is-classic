import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledCategory = styled.div`
  background: #c8c8c8;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const Claussicus = () => {
  return (
    <StyledCategory>
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
      <Outlet />
    </StyledCategory>
  );
};

export default Claussicus;
