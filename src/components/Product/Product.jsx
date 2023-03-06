import React from "react";
import {
  Candy,
  CandyWrapper,
  ImgWrapper,
  DescWrapper,
  CandyText,
  CandyDesc,
  ScoreWrapper,
  Price,
  PriceWrapper,
  BuyBtn
} from "./Product.styled";
import { BsFillStarFill, BsStarHalf, BsCurrencyDollar } from "react-icons/bs";

const Product = ({ candy }) => {
  console.log(candy);
  return (
    <Candy>
      <CandyWrapper>
        <ImgWrapper>
          <img src={candy.img} alt={candy.name} />
        </ImgWrapper>
        <DescWrapper>
          <CandyText>{candy.name}</CandyText>
          <CandyDesc>{candy.desc} </CandyDesc>
          <PriceWrapper>
            <ScoreWrapper>
              <span>
                <BsFillStarFill size={15}/>
                <BsFillStarFill size={15}/>
                <BsFillStarFill size={15}/>
                <BsFillStarFill size={15}/>
                <BsStarHalf size={15}/>
              </span>
              <span>{candy.scored}</span>
            </ScoreWrapper>
            <Price>
              {candy.price} <BsCurrencyDollar size={20} />
            </Price>
          </PriceWrapper>
          <BuyBtn>Buy now</BuyBtn>
        </DescWrapper>
      </CandyWrapper>
    </Candy>
  );
};

export default Product;
