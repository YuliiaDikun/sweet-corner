import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  text-align: center;
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
    left: -9px;
    bottom: -28px;
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
