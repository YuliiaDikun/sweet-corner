import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
`;
