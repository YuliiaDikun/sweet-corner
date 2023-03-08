import React, { useEffect } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import emptyCart from "../../assets/empry-cart.png";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalAmount,
  selectorCartItems,
  selectorCartTotal,
} from "../../redux/cart/cartSelectors";
import { clearCart, calculateTotal } from "../../redux/cart/cartSlice";
import { CartItem } from "../../components";
import {
  CartSection,
  CartTitle,
  ErrorP,
  ErrorLinkWrapper,
  ErrorLink,
  ImgWrapper
} from "./Cart.module";
const Cart = () => {
  const cartItems = useSelector(selectorCartItems);
  const totalItems = useSelector(selectTotalAmount);
  const totalSum = useSelector(selectorCartTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <CartSection>
      <CartTitle>Your cart: </CartTitle>
      {cartItems.length === 0 && (
        <>
          <ErrorP>Your cart is empty. Please, add something.</ErrorP>
          <ErrorLinkWrapper>
            <ErrorLink to="/sweets">Go to the shopping! </ErrorLink>
            <RiShoppingBasketLine size={20} />
          </ErrorLinkWrapper>
          <ImgWrapper>
            <img src={emptyCart} alt="Empty cart" />
          </ImgWrapper>
        </>
      )}
      <ul>
        {cartItems.map((sweet) => {
          return <CartItem key={sweet.id} sweet={sweet} />;
        })}
      </ul>
      {totalItems > 0 && (
        <div>
          <p>Total items: {totalItems} </p>
          <p>Total sum: {totalSum}$</p>
          <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        </div>
      )}
    </CartSection>
  );
};

export default Cart;