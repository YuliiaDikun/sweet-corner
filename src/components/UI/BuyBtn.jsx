import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { StyledMainBtn } from "./UI.styled";
const MainBtn = ({onBuyBtnClick }) => {
  return (
    <StyledMainBtn onClick={onBuyBtnClick}>
      Buy now <AiOutlineShoppingCart size={15}  />
    </StyledMainBtn>
  );
};

export default MainBtn;
