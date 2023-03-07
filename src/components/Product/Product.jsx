import React from "react";
import {
  Candy,
  CandyWrapper,
  ImgWrapper,
  DescWrapper,
  CandyText,
  CandyDesc, 
  PriceWrapper,
} from "./Product.styled";
import { MainBtn, Score, Price} from '../'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../redux/cart/cartSlice";
const Product = ({ candy }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);
  const onBuyBtnClick = (e) => { 
    
     console.log('click on buy btn ' + candy.name);
    if (!isLoggedIn) {
      toast.error('You must be login!');
      return;
    } else {      
      dispatch(addToCart(candy));
    }
  }
  return (
    <Candy>
      <CandyWrapper>
        <ImgWrapper to={`${candy.id}`}>
          <img src={candy.img} alt={candy.name} state={{ from: location }}/>
        </ImgWrapper>
        <DescWrapper>
          <CandyText to={`${candy.id}`}>{candy.name}</CandyText>
          <CandyDesc>{candy.desc} </CandyDesc>
          <PriceWrapper>
            <Score scored={ candy.scored} />
            <Price price={ candy.price} />
          </PriceWrapper>
          <MainBtn onBuyBtnClick={ onBuyBtnClick} />
        </DescWrapper>
      </CandyWrapper>
    </Candy>
  );
};

export default Product;
