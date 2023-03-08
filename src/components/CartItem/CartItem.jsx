import React from "react";
import { removeItem, increase, decrease } from "../../redux/cart/cartSlice";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  StyledLi,
  ProductInfoWrapper,
  ImgWrapper,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  RemoveBtn,
  AmountWrapper,
  AmountBtn,
  StyledAmount
} from "./CartItem.styled";
const CartItem = ({ sweet }) => {
  const { img, name, price, id, amount } = sweet;
  const dispatch = useDispatch();
  return (
    <StyledLi>
      <ProductInfoWrapper>
        <ImgWrapper>
          <img src={img} alt={name} width="100" />
        </ImgWrapper>
        <ProductInfo>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>{price} $</ProductPrice>
          <RemoveBtn
            type="button"
            aria-label="remove item from cart"
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </RemoveBtn>
        </ProductInfo>
      </ProductInfoWrapper>
      <AmountWrapper>
        <AmountBtn
          type="button"
          aria-label="increase item in cart"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <IoIosArrowUp size={25} />
        </AmountBtn>
        <StyledAmount>{amount}</StyledAmount>
        <AmountBtn
          type="button"
          aria-label="decrease item in cart"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decrease({ id }));
          }}
        >
          <IoIosArrowDown size={25} />
        </AmountBtn>
      </AmountWrapper>
    </StyledLi>
  );
};

export default CartItem;
