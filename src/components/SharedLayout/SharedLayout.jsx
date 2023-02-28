import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "..";
import { Container, Header, Logo} from "./SharedLayout.styled";
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">NONAME SHOP</Logo> 
        <Navigation />
      </Header>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
