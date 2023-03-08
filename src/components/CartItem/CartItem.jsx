import React from "react";
import { removeItem, increase, decrease } from "../../redux/cart/cartSlice";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
const CartItem = ({ sweet }) => {
  const { img, name, price, id, amount } = sweet;
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <div>
          <img src={img} alt={name} width="100" />
        </div>
        <div>
          <h3>Name: {name}</h3>
          <p>Price {price}</p>
          <button
            type="button"
            aria-label="remove item from cart"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove item
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          aria-label="increase item in cart"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <IoIosArrowUp size={15} />
        </button>
        <p>Amount: {amount}</p>
        <button
          type="button"
          aria-label="decrease item in cart"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decrease({ id }));
          }}
        >
          <IoIosArrowDown size={15} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
