import styled from "styled-components";

export const StyledMain = styled.main`
  height: 90vh;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing(7)};
    justify-content: space-between;
  }
`;

export const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
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
