import styled from "styled-components";

export const CategoryWrapper = styled.ul`
  padding-top: ${({ theme }) => theme.spacing(6)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(2)};
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
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  color: ${({ isActive }) => (isActive ? `#ffffff` : `#898989`)};
  background-color: ${({ isActive }) => (isActive ? `#898989` : `transparent`)};
  transition: color 0.3s, background-color 0.3s;
  border-radius: ${({ isActive }) => (isActive ? `4px` : `0px`)};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 4px;
  }
`;
