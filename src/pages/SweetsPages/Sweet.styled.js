import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledMain = styled.div`
  padding-top: ${({ theme }) => theme.spacing(5)};
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(7)};
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.light};
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 550px;
  }
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const DescrWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;

export const StyledProductTitle = styled.h2`
  margin-bottom: 16px;
`;

export const StyledP = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const MainContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(7)};
  }
`;
