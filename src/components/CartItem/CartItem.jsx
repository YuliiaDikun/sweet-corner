import React from "react";
import { removeItem, increase, decrease } from "../../redux/cart/cartSlice";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
const CartItem = ({ sweet }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <div>
          <img src={sweet.img} alt={sweet.name} width="100" />
        </div>
        <div>
          <h3>Name: {sweet.name}</h3>
          <p>Price {sweet.price}</p>
          <button
            type="button"
            aria-label='remove item from cart'
            onClick={() => dispatch(removeItem(sweet.id))}>
            Remove item
          </button>
        </div>
      </div>
      <div>
        <button>
          <IoIosArrowUp size={15} />
        </button>
        <p>Amount: {sweet.amount}</p>
        <button>
          <IoIosArrowDown size={15} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
