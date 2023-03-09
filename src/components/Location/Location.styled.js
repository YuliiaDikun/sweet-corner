import styled from "styled-components";

export const LocationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding-top: 80px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    padding-top: 120px;
    padding-bottom: 64px;
  }
`;

export const LocationItem = styled.li`
  width: 100%;
  height: 412px;
  padding: 40px 32px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 30px rgba(33, 44, 181, 0.1);
  border-radius: 24px;
  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 3);
    height: 528px;
    padding: 40px 24px;
  }
  @media screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
    height: 538px;
    padding: 40px 40px;
  }
`;

export const Type = styled.p`
  display: inline-block;
  padding: 0 23px;
  margin-bottom: 19px;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    padding: 0 13px;
    height: 28px;
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

export const City = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 7px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 8px;
  }
`;

export const Address = styled.p`
  width: 212px;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 23px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 158px;
    font-size: 14px;
    margin-bottom: 26px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

export const TimeWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 24px;
  padding-top: 24px;
  padding-bottom: 23px;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  @media screen and (min-width: 768px) {
    gap: 12px;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-bottom: 32px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Days = styled.p`
  color: ${({ theme }) => theme.colors.dark};
`;

export const Hours = styled.p`
  color: ${({ theme }) => theme.colors.light};
`;

export const LocationContactLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.dark};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 26px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 30px;
  }
`;
