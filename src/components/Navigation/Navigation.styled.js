import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HederWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  margin-bottom: 16px;
  max-width: ${({ theme }) => theme.media.desktop};
  margin: 0 auto;
`;

export const StyledNav = styled.nav`
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    z-index: 999;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
    transition: all 0.3s;
  }
  ul li {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        margin: 0 5px;
        &:first-child {
          display: none;
        }
      }
    }
  }
`;

export const NavWrapper = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transform: ${({ open }) => (open ? "translateX(100%);" : "translateX()")};
    transition: all 0.3s;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  display: inline-block;
  font-family: "Playfair Display SC", serif;
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const HomeLink = styled(NavLink, Link)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  position: relative;
`;

export const CartBtn = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  position: relative;
  cursor: pointer;
  &.active {
    color: white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
  span {
    font-size: 12px;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(NavLink, Link)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  position: relative;
  font-family: inherit;
  &.active {
    color: white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
  span {
    font-size: 12px;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  @media screen and (min-width: 766px) {
    display: none;
  }
`;
