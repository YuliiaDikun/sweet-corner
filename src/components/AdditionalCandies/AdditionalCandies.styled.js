import styled from "styled-components";

export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 80px;
  }
`;

export const AdditionalTitle = styled.h3`
  padding-top: 20px;
`;
