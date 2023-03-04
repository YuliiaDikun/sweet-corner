import React from "react";
import {
  Candy,
  CandyWrapper,
  ImgWrapper,
  DescWrapper,
  CandyText,
  CandyDesc,
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
          <div>
            <div>
              <span>
                <BsFillStarFill size={25}/>
                <BsFillStarFill size={25}/>
                <BsFillStarFill size={25}/>
                <BsFillStarFill size={25}/>
                <BsStarHalf size={25}/>
              </span>
              <span>{candy.scored}</span>
            </div>
            <div>
              {candy.price} <BsCurrencyDollar size={25} />
            </div>
          </div>
          <button>Buy now</button>
        </DescWrapper>
      </CandyWrapper>
    </Candy>
  );
};

export default Product;
