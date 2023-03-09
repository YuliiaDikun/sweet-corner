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
