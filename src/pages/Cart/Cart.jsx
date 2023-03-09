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
import { Container } from "../../components/SharedLayout/SharedLayout.styled";
import {
  CartSection,
  CartTitle,
  ErrorP,
  ErrorLinkWrapper,
  ErrorLink,
  ImgWrapper,
  PriceWrapper,
  ClearCartBtn
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
      <Container>
      <CartTitle>Your bag: </CartTitle>
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
          <PriceWrapper>
            <p>Total:</p>
            <p>{totalSum}$</p>
          </PriceWrapper>
          <ClearCartBtn
            type="button"
            aria-label="clear cart"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </ClearCartBtn>
        </div>
        )}
        </Container>
    </CartSection>
  );
};

export default Cart;
