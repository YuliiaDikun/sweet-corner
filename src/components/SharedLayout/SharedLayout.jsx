import React, { Suspense} from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Footer, Loader } from "..";
import { Header, Wrapper } from "./SharedLayout.styled";
const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
