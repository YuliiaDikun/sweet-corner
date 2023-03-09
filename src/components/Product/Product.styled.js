import styled from "styled-components";
import { Link } from "react-router-dom";

export const Candy = styled.li`
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 768px) {
    width: calc((100% - 80px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 120px) / 4);
  }
`;
export const CandyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  height: 100%;
  list-style: none;
  text-decoration: none;
  overflow: hidden;
  border-radius: 8px;

  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
    img {
      transform: scale(1.1) rotate(0.01deg);
    }
  }
`;
export const ImgWrapper = styled(Link)`
  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 250px;
  img {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    transition: all 0.4s;
  }
`;
export const DescWrapper = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-radius: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
export const CandyText = styled(Link)`
  font-size: ${({ theme }) => theme.spacing(5)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  padding-bottom: 5px;
  &:before {
    content: "";
    left: -30px;
    bottom: -100%;
    width: 100%;
    height: 2px;
    display: block;
    position: relative;
    background: ${({ theme }) => theme.colors.dark};
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  &:hover:before {
    transform: translateX(10%);
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
