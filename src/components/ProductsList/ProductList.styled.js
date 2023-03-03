import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Candy = styled.li`
  width: calc((100% - 60px) / 2);
  @media screen and (min-width: 1200px) {
    width: calc((100% - 60px) / 3);
  }
`;
export const CandyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  text-decoration: none;
  overflow: hidden;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const DescWrapper = styled.div`
  flex-grow: 1;
  padding: 20px 24px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
`;
export const CandyText = styled.h2`
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1px;
`;
export const CandyDesc = styled.p`
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1px;
`;
