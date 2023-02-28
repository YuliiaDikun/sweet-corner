import React from 'react'
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
     <nav>
      <Link to="/">NONAME SHOP</Link>      
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navigation;
