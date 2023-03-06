import styled from "styled-components";

export const CategoryWrapper = styled.aside`
  padding-top: ${({ theme }) => theme.spacing(2)};

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    max-width: 250px;
  }
`;

export const CategoryTitle = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;

export const CategoryBtn = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark};
  transition: color 0.3s, background-color 0.3s;
  border-radius: ${({ theme }) => theme.spacing(1)};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.dark};
    background-color: transparent;
  }
  .active {
    color: ${({ theme }) => theme.colors.dark};
    background-color: transparent;
  }
`;
