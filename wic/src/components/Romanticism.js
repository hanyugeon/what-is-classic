import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategory = styled.div`
  background: #c8c8c8;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const Romanticism = () => {
  return (
    <StyledCategory>
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
    </StyledCategory>
  );
};

export default Romanticism;
