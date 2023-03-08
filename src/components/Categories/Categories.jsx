import React from "react";
import { category } from "./category-data";
import { CategoryWrapper, CategoryTitle } from "./Categories.styled";
import CategoryBtn from "./CategoryBtn";
import { useState } from "react";
const Categories = ({ setCategory, urlParams }) => {
  const [active, setActive] = useState();
  const onSelectedCategory = (category) => {
    setCategory(category);
  };
  const activeButton = (category) => {
    setActive(category);
  };

  return (
    <CategoryWrapper>
      <CategoryTitle>Categories: </CategoryTitle>
      <ul>
        {category.map((cat) => {
          return (
            <CategoryBtn
              isActive={active === cat.data || cat.data === urlParams}
              key={cat.id}
              info={cat}
              activeButton={activeButton}
              onSelectedCategory={onSelectedCategory}
            />
          );
        })}
      </ul>
    </CategoryWrapper>
  );
};

export default Categories;
