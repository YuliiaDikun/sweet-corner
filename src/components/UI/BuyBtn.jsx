import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { StyledMainBtn } from "./UI.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { selectorCartItems } from "../../redux/cart/cartSelectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../redux/cart/cartSlice";

const MainBtn = ({ candy }) => {  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cartItems = useSelector(selectorCartItems);
  const dispatch = useDispatch();
  const isInCart = cartItems.some((sweet) => {     
    return sweet.id === candy.id
  });
  
  const onBuyBtnClick = () => {
    if (!isLoggedIn) {
      toast.error("You must be login!");
      return;
    } else {
      if (isInCart) {
        toast.error("Already in cart!");
        return;
      } else {
        dispatch(addToCart(candy));
        toast.success("Add to cart!");
      }
    }
  };

  return (
    <StyledMainBtn type="button" aria-label="buy item button" onClick={onBuyBtnClick}>
      {isInCart ? "Added to cart" : "Buy now"}
      <AiOutlineShoppingCart size={15} />
    </StyledMainBtn>
  );
};

export default MainBtn;
