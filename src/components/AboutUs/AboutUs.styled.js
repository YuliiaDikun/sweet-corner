import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
  @media screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(30)};
    padding-bottom: ${({ theme }) => theme.spacing(30)};
  }
`;
export const Header = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.spacing(10)};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.white};
`;
export const StyledParagraph = styled.p`
  max-width: ${({ theme }) => theme.spacing(200)};
  margin: ${({ theme }) => theme.spacing(10)} auto;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const Parent = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  img {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  @media screen and (min-width: 768px) {
    height: 800px;
  }
`;

export const First = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  overflow: hidden;
`;

export const Second = styled.div`
  grid-area: 3 / 1 / 4 / 3;
  overflow: hidden;
`;
export const Third = styled.div`
  grid-area: 1 / 3 / 2 / 7;
  overflow: hidden;
`;
export const Fourth = styled.div`
  grid-area: 2 / 3 / 4 / 6;
  overflow: hidden;
`;
export const Fifth = styled.div`
  grid-area: 2 / 6 / 3 / 7;
  overflow: hidden;
`;
export const Sixth = styled.div`
  grid-area: 3 / 6 / 4 / 7;
  overflow: hidden;
`;
