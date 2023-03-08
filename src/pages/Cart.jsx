import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalAmount,
  selectorCartItems,
  selectorCartTotal,
} from "../redux/cart/cartSelectors";
import {
  clearCart,
  removeItem,
  increase,
  decrease,
} from "../redux/cart/cartSlice";
import { CartItem } from "../components";
const Cart = () => {
  const cartItems = useSelector(selectorCartItems);
  const totalItems = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Your cart: </h2>
      {cartItems.length === 0 && (
        <>
          <p>Your cart is empty. Please, add something.</p>
          <Link to="/sweets">Go to the shopping!</Link>
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
          <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
