import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: #323232;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Link)`
  color: #dcdcdc;
  align-items: center;
  text-align: center;
  flex: 1;
  text-decoration: none;
`;

const Nav = styled(Link)`
  color: #dcdcdc;
  align-items: center;
  text-align: center;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  display: flex;
  border-left: 5px solid #505050;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title to="/">What is classic</Title>
      <Nav to="/baroque">바로크 음악</Nav>
      <Nav to="/claussicus">고전주의</Nav>
      <Nav to="/romanticism">낭만주의</Nav>
    </StyledHeader>
  );
};

export default Header;
