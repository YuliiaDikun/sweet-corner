import React from "react";
import { category } from "./category-data";
import { CategoryWrapper, CategoryTitle } from "./Categories.styled";
import CategoryBtn from "./CategoryBtn";
import { useState } from "react";
const Categories = ({ setCategory }) => {
  const [active, setActive] = useState();
  const onSelectedCategory = (category) => {
    setCategory(category);
  };
  const activeButton = (number) => { 
    setActive(number);
  }

  return (
    <CategoryWrapper>
      <CategoryTitle>Categories: </CategoryTitle>
      <ul>
        {category.map((cat) => {                
          return (
            <CategoryBtn
              isActive={Number(active) === Number(cat.id)}
              key={cat.id}
              info={cat}       
              activeButton={activeButton }
              onSelectedCategory={onSelectedCategory}
            />
          );
        })}
      </ul>
    </CategoryWrapper>
  );
};

export default Categories;
