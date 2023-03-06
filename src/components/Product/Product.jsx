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
const Product = ({ candy }) => {
  return (
    <Candy to={`${candy.id}`}>
      <CandyWrapper>
        <ImgWrapper>
          <img src={candy.img} alt={candy.name} />
        </ImgWrapper>
        <DescWrapper>
          <CandyText>{candy.name}</CandyText>
          <CandyDesc>{candy.desc} </CandyDesc>
          <PriceWrapper>
            <Score scored={ candy.scored} />
            <Price price={ candy.price} />
          </PriceWrapper>
         <MainBtn/>
        </DescWrapper>
      </CandyWrapper>
    </Candy>
  );
};

export default Product;
