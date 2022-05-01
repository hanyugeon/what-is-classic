import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const StyledLayout = styled("div")`
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #ffffff;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
