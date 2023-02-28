import React from 'react';
import { Link } from "./Navigation.styled";

const Navigation = () => {
  return (
     <nav>
      
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navigation;
