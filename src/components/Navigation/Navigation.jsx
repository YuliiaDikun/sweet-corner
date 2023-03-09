import React, { useState, useEffect } from "react";
import {
  HederWrapper,
  StyledNav,
  NavWrapper,
  StyledLink,
  HomeLink,
  Logo,
  MobileWrapper,
} from "./Navigation.styled";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Loader, ProtectedLink, PublicLink } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, setLogoutUser } from "../../redux/auth/authSlice";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { selectTotalAmount } from "../../redux/cart/cartSelectors";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalAmount = useSelector(selectTotalAmount);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName
          ? user.displayName
          : user.email.replace(/@.*/, "");
        setUserName(name);

        dispatch(
          setActiveUser({
            email: user.email,
            userName: name,
            userId: user.uid,
          })
        );
      } else {
        setUserName("");
        dispatch(setLogoutUser());
      }
    });
  }, [dispatch]);

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
        dispatch(setLogoutUser());
        toast.success("Bye! Come back to us soon.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  
  const cart = isLoggedIn ? (
    <StyledLink to="/cart">
      Cart <AiOutlineShoppingCart size={20} /> <span>{totalAmount}</span>
    </StyledLink>
  ) : (
    <HomeLink to="/">
      Cart <AiOutlineShoppingCart size={20} /> <span>{totalAmount}</span>
    </HomeLink>
  );
  const logo = <Logo to="/">Sweet Corner</Logo>;
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
              <StyledLink to="/sweets">Sweets</StyledLink>
            </li>
            <li>
              <PublicLink>
                <StyledLink to="/login">Login</StyledLink>
              </PublicLink>
            </li>
            <li>
              <ProtectedLink>
                <HomeLink to="/">
                  <AiOutlineUser size="20" />
                  Welcome, {userName}
                </HomeLink>
              </ProtectedLink>
            </li>
            <li>
              <PublicLink>
                <StyledLink to="/register">Register</StyledLink>
              </PublicLink>
            </li>
            <li>
              <ProtectedLink>
                <HomeLink to="/" onClick={logoutUser}>
                  Logout
                </HomeLink>
              </ProtectedLink>
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
