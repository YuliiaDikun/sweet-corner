import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "..";
import { Container, Header } from "./SharedLayout.styled";
const SharedLayout = () => {
  return (
    <>
      <Header>        
          <Navigation />       
      </Header>
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default SharedLayout;
