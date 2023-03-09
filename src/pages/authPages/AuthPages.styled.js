import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAuth = styled.section`
  min-height: 90vh;
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  animation: slide-down 0.5s ease;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const FormWrapper = styled.div`
  width: 350px;
  padding: ${({ theme }) => theme.spacing(10)};
  animation: slide-up 0.5s ease;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const StyledForm = styled.form`
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: block;
    font-size: ${({ theme }) => theme.spacing(4)};
    font-weight: 300;
    padding: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(2)} auto;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: ${({ theme }) => theme.spacing(1)};
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledSpan = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const RegisterWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)}; ;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
`;
