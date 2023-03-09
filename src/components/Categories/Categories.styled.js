import styled from "styled-components";

export const CategoryWrapper = styled.aside`
  padding-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  @media screen and (min-width: 768px) {
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

export const StyledCategoryBtn = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ isActive }) => (isActive ? `#323232` : `#ffffff`)};
  background-color: ${({ isActive }) => (isActive ? `transparent` : `#323232`)};
  transition: color 0.3s, background-color 0.3s;
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    background-color: transparent;
  }
`;
