import React, { useState } from "react";
import {
  StyledNav,
  NavWrapper,
  Link,
  Logo,
  MobileWrapper,
} from "./Navigation.styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const hideMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const shopItems = 0;
  const cart = (
    <Link to="/cart">
      Cart <AiOutlineShoppingCart size={20} /> <span>{shopItems}</span>
    </Link>
  );
  const logo = <Logo to="/">NONAME SHOP</Logo>;
  return (
    <>
      {logo}
      <StyledNav open={isMobileMenuOpen}>
        <NavWrapper open={isMobileMenuOpen} onClick={hideMenu}></NavWrapper>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {cart}
      </StyledNav>
      <MobileWrapper>
        {cart}
        {isMobileMenuOpen ? (
          <MdClose size={20} onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu size={20} onClick={toggleMenu} />
        )}
      </MobileWrapper>
    </>
  );
};

export default Navigation;
