import styled from "styled-components";

export const FilterWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const FilterBtn = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
  background-color: transparent;
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: ${({ theme }) => theme.spacing(1)};
  }
`;
