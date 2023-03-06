import React from "react";
import { GiChocolateBar } from "react-icons/gi";
import { FaCandyCane } from "react-icons/fa";
import { TbCookie } from "react-icons/tb";
import { RxCross1 } from 'react-icons/rx';
import {
  CategoryWrapper,
  CategoryTitle,
  CategoryBtn,
} from "./Categories.styled";
const Categories = ({ setCategory }) => {
  const onSelectedCategory = (e) => {
    const category = e.target.dataset.category;
    setCategory(category);
  };
  return (
    <CategoryWrapper>
      <CategoryTitle>Categories: </CategoryTitle>
      <CategoryBtn data-category="chocolate" onClick={onSelectedCategory}>
        Chocolate <GiChocolateBar />
      </CategoryBtn>
      <CategoryBtn data-category="macaroons" onClick={onSelectedCategory}>
        Macaroon <TbCookie />
      </CategoryBtn>
      <CategoryBtn data-category="candies" onClick={onSelectedCategory}>
        Candies <FaCandyCane />
      </CategoryBtn>
      <CategoryBtn data-category="" onClick={onSelectedCategory}>
        Reset <RxCross1 />
      </CategoryBtn>
    </CategoryWrapper>
  );
};

export default Categories;
