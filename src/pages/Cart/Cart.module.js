import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing(10)};
  @media screen and (min-width: 768px) {
    padding-left: ${({ theme }) => theme.spacing(30)};
    padding-right: ${({ theme }) => theme.spacing(30)};
  }
`;

export const CartTitle = styled.h2`
  text-transform: uppercase;
`;

export const ErrorP = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light};
`;

export const ErrorLinkWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ErrorLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  font-weight: 700;

  &:before {
    content: "";
    left: ${({ theme }) => theme.spacing(-2)};
    bottom: ${({ theme }) => theme.spacing(-7)};
    width: 100%;
    height: 2px;
    display: block;
    position: relative;
    background: ${({ theme }) => theme.colors.dark};
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  &:hover:before {
    transform: translateX(6%);
  }
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const PriceWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const ClearCartBtn = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 18px;
  font-weight: 500;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.01);
  }
`;
