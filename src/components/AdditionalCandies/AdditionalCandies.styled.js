import styled from "styled-components";
import { Link } from "react-router-dom";
export const AdditionalList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;

export const AdditionalLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  transition: transform 0.3s, box-shadow 0.3s;
  ${({ theme }) => theme.spacing(2)};
  &:hover {
    transform: scale(1.01);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const AdditionalTitle = styled.h3`
  padding-top: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.dark};
`;

export const AdditionalImgWrapper = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing(2)};
  width: 250px;
  height: 250px;
  img {
    display: block;
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const AdditionalP = styled.p`
  padding: ${({ theme }) => theme.spacing(2)};
`;
