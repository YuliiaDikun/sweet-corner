import styled from "styled-components";

export const PartnersWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const PartnersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justafy-content: center;
  align-items: center;
`;

export const PartnerItem = styled.li`
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
