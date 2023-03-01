import React, { useState } from "react";
import {
  HederWrapper,
  StyledNav,
  NavWrapper,
  StyledLink,
  Logout,
  Logo,
  MobileWrapper,
} from "./Navigation.styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Loader } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const hideMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const logoutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("Bye! Come back to us soon.");
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const shopItems = 0;
  const cart = (
    <StyledLink to="/cart">
      Cart <AiOutlineShoppingCart size={20} /> <span>{shopItems}</span>
    </StyledLink>
  );
  const logo = <Logo to="/">NONAME SHOP</Logo>;
  return (
    <>
      {isLoading && <Loader />}
      <HederWrapper>
        {logo}
        <StyledNav open={isMobileMenuOpen}>
          <NavWrapper open={isMobileMenuOpen} onClick={hideMenu}></NavWrapper>
          <ul onClick={hideMenu}>
            <li>{logo}</li>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
            <li>
              <StyledLink to="/register">Register</StyledLink>
            </li>
            <li>
              <Logout to="/" onClick={logoutUser}>
                Logout
              </Logout>
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
    </>
  );
};

export default Navigation;
