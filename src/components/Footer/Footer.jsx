import React from "react";
import { StyledFooter } from "./Footer.styled";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {year} All Rights Reserved</p>
    </StyledFooter>
  );
};

export default Footer;
