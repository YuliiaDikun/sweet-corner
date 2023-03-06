import styled from "styled-components";

export const StyledMainBtn = styled.button`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.dark};
  transition: color 0.3s, background-color 0.3s;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
`;
