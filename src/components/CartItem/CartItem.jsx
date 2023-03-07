import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const CartItem = ({ sweet }) => {
  return (
    <li>
      <div>
        <div>
          <img src={sweet.img} alt={sweet.name} width="100" />
        </div>
        <div>
          <h3>Name: {sweet.name}</h3>
          <p>Price {sweet.price}</p>
          <button>Remove item</button>
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
