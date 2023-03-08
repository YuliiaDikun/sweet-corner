import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing(1)};
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
`;

export const RemoveBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(8)};
`;

export const AmountBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledAmount = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
`;
