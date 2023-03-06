import styled from "styled-components";
import { Link } from "react-router-dom";

export const Candy = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
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
  height: 100%;
  list-style: none;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
export const DescWrapper = styled.div`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(6)};
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CandyText = styled.h2`
  font-size: ${({ theme }) => theme.spacing(5)};
  font-weight: 500;
`;
export const CandyDesc = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.spacing(4)};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
