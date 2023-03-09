import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer } from "..";
import { Header, Wrapper } from "./SharedLayout.styled";
const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
