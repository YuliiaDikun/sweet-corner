import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  @media screen and (min-width: ${({ theme }) => theme.media.mobile}) {
    max-width: ${({ theme }) => theme.media.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    max-width: ${({ theme }) => theme.media.tablet};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    max-width: ${({ theme }) => theme.media.desktop};
  }
`;
export const Header = styled.header`
  width: 100%;
  transition: all 0.5s;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;
