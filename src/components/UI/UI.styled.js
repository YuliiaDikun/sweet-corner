import styled from "styled-components";

export const StyledMainBtn = styled.button`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.dark};
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;
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
  color: ${({ theme }) => theme.colors.light};
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
`;

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
