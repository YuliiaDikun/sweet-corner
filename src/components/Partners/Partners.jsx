import React from "react";
import { partners } from "./partners-icon";
import { PartnersWrapper,PartnersTitle, PartnersList, PartnerItem } from "./Partners.styled";
const Partners = () => {
  return (
    <PartnersWrapper>
      <PartnersTitle>Our Partners:</PartnersTitle>
      <PartnersList>
        {partners.map((partner, i) => {
          return <PartnerItem key={i}>{partner.svg}</PartnerItem>;
        })}
      </PartnersList>
    </PartnersWrapper>
  );
};

export default Partners;
