import styled from "styled-components";
import { theme } from "../../styles/theme";
export const Slider = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grey}; ;
`;
export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ current }) => (current ? "1" : "0")};
  transform: ${({ current }) =>
    current ? "translateX(0)" : "translateX(-50%)"};
  transition: all 0.5s ease;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const Content = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  width: 50%;
  padding: ${({ theme }) => theme.spacing(5)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-self: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
  background-color: rgba(255, 251, 251, 0.7);
  border-radius: ${({ theme }) => theme.spacing(2)};
  animation: slider 1s ease 0.5s;
  animation-fill-mode: forwards;
  h2 {
    font-size: ${({ theme }) => theme.spacing(10)};
    color: ${({ theme }) => theme.colors.dark};
  }
  p {
    font-size: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.colors.dark};
  }
`;
export const Link = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  transition: color 0.3s, border 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const Line = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50%;
`;
export const iconStyle = {
  border: `2px solid ${theme.colors.white}`,
  borderRadius: "50%",
  background: "transparent",
  color: "#fff",
  width: "2.5rem",
  height: "2.5rem",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: "2",
};
export const next = {
  right: "1.5rem",
  color: `${theme.colors.white}`,
};
export const prev = {
  left: "1.5rem",
  color: `${theme.colors.white}`,
};
