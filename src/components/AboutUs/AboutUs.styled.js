import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing(40)}
    ${({ theme }) => theme.spacing(0)}; ;
`;
export const Header = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.spacing(10)};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
export const StyledParagraph = styled.p`
  width: ${({ theme }) => theme.spacing(200)};
  margin: ${({ theme }) => theme.spacing(10)} auto
    ${({ theme }) => theme.spacing(10)} auto;
  text-align: center;
  font-weight: 500;
`;
