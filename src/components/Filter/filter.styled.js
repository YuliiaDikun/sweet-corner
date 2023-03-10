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
  color: ${({ active }) => (active ? `#ffffff` : `#898989`)};
  background-color: ${({ active }) => (active ? `#898989` : `transparent`)};
  border-radius: ${({ active }) => (active ? `4px` : `0px`)};
  transition: color 0.3s, background-color 0.3s, border-radius 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.spacing(1)};
  }
`;
