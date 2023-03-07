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
import { MainBtn, Score, Price } from "../";
import { useLocation } from "react-router-dom";

const Product = ({ candy }) => {
  const location = useLocation();

  return (
    <Candy>
      <CandyWrapper>
        <ImgWrapper to={`${candy.id}`}>
          <img src={candy.img} alt={candy.name} state={{ from: location }} />
        </ImgWrapper>
        <DescWrapper>
          <CandyText to={`${candy.id}`}>{candy.name}</CandyText>
          <CandyDesc>{candy.desc} </CandyDesc>
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
