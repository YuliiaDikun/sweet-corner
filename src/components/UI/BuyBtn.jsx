import React from "react";

import { StyledMainBtn } from "./UI.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectorCartItems } from "../../redux/cart/cartSelectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../redux/cart/cartSlice";
import { BsMinecart } from 'react-icons/bs';
const MainBtn = ({ candy }) => {
  const cartItems = useSelector(selectorCartItems);
  const dispatch = useDispatch();
  const isInCart = cartItems.some((sweet) => {
    return sweet.id === candy.id;
  });

  const onBuyBtnClick = () => {
    if (isInCart) {
      toast.error("Already in cart!");
      return;
    } else {
      dispatch(addToCart(candy));
      toast.success("Add to cart!");
    }
  };

  return (
    <StyledMainBtn
      type="button"
      aria-label="buy item button"
      onClick={onBuyBtnClick}
    >
      {isInCart ? "Added to cart" : "Buy now"}
      <BsMinecart size={15} />
    </StyledMainBtn>
  );
};

export default MainBtn;
