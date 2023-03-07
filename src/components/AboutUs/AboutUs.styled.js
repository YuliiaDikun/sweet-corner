import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
export const Header = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.spacing(10)};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.dark};
`;
export const StyledParagraph = styled.p`
  max-width: ${({ theme }) => theme.spacing(200)};
  margin: ${({ theme }) => theme.spacing(10)} auto
    ${({ theme }) => theme.spacing(10)} auto;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;
