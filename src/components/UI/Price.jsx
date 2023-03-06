import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { StyledPrice } from "./UI.styled";
const Price = ({ price }) => {
  return (
    <StyledPrice>
      {price} <BsCurrencyDollar size={20} />
    </StyledPrice>
  );
};

export default Price;
