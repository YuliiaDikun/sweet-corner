import React, { useState } from "react";
import {
  HederWrapper,
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
    <HederWrapper>
      {logo}
      <StyledNav open={isMobileMenuOpen}>
        <NavWrapper open={isMobileMenuOpen} onClick={hideMenu}></NavWrapper>
        <ul onClick={hideMenu}>
          <li>{logo}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/" onClick={logoutUser}>
              Logout
            </Link>
          </li>
          <li>{cart}</li>
        </ul>
      </StyledNav>
      <MobileWrapper>
        {cart}
        {isMobileMenuOpen ? (
          <MdClose size={20} onClick={toggleMenu} />
        ) : (
          <RxHamburgerMenu size={20} onClick={toggleMenu} />
        )}
      </MobileWrapper>
    </HederWrapper>
  );
};

export default Navigation;
