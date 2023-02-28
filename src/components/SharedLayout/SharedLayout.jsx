import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">NONAME SHOP</Link>
          
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
     
        <Outlet />
      
      <Footer />
    </div>
  );
};

export default SharedLayout;
