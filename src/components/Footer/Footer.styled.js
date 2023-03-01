import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: #fff;
  font-size: ${({ theme }) => theme.spacing(4)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing(10)};
  p {
    color: #fff;
  }
`;
