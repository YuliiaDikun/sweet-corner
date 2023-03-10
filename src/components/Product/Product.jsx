import React from "react";
import {
  Candy,
  CandyWrapper,
  ImgWrapper,
  DescWrapper,
  CandyText,  
  PriceWrapper,
} from "./Product.styled";
import { MainBtn, Score, Price } from "../";
import { useLocation } from "react-router-dom";

const Product = ({ candy }) => {
  const location = useLocation();

  return (
    <Candy>
      <CandyWrapper>
        <ImgWrapper to={`${candy.id}`} state={{ from: location }}>
          <img src={candy.img} alt={candy.name} />
        </ImgWrapper>
        <DescWrapper>
          <CandyText to={`${candy.id}`} state={{ from: location }}>{candy.name}</CandyText>
          
          <PriceWrapper>
            <Score scored={candy.scored} />
            <Price price={candy.price} />
          </PriceWrapper>
          <MainBtn candy={candy} />
        </DescWrapper>
      </CandyWrapper>
    </Candy>
  );
};

export default Product;
