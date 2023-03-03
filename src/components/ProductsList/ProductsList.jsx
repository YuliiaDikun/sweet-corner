import React from "react";
import {
  StyledList,
  Candy,
  CandyWrapper,
  ImgWrapper,
  DescWrapper,
  CandyText,
  CandyDesc
} from "./ProductList.styled";
const ProductsList = ({ sweets }) => {
  return (
    <StyledList>
      {sweets.map((candy) => {
        return (
          <Candy key={candy.id}>
            <CandyWrapper>
              <ImgWrapper>
                <img src={candy.img} alt={candy.name} />
              </ImgWrapper>
              <DescWrapper>
                <CandyText>{candy.name}</CandyText>
                <CandyDesc>{candy.desc} </CandyDesc>
                <button>Buy now</button>
              </DescWrapper>
            </CandyWrapper>
          </Candy>
        );
      })}
    </StyledList>
  );
};

export default ProductsList;
