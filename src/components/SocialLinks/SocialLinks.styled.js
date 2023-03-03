import styled from "styled-components";

export const SocialLinksWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  a {
    color: ${({ theme }) => theme.colors.dark};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
