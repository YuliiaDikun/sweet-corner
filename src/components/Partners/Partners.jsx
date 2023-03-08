import React from "react";
import { partners } from "./partners-icon";
import { PartnersWrapper, PartnersList, PartnerItem } from "./Partners.styled";
const Partners = () => {
  return (
    <PartnersWrapper>
      <h2 className="visually-hidden">Partners</h2>
      <PartnersList>
        {partners.map((partner, i) => {
          return <PartnerItem key={i}>{partner.svg}</PartnerItem>;
        })}
      </PartnersList>
    </PartnersWrapper>
  );
};

export default Partners;
