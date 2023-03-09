import styled from "styled-components";

export const PartnersWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(25)};
  text-align: center;
`;

export const PartnersTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

export const PartnersList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PartnerItem = styled.li`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(2)};
  transition: color 0.3s, border-color 0.3s, fill 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.grey};
    fill: ${({ theme }) => theme.colors.grey};
  }
`;
