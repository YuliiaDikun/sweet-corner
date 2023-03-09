import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(10)};
    border-radius: 20px;
    width: auto;
    height: auto;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const LoginLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(2)};
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`;

export const ModalCloseBtn = styled.button`
  color: ${({ theme }) => theme.colors.dark};
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
`;
