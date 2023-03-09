import React from "react";
import { category } from "./category-data";
import { CategoryWrapper } from "./Categories.styled";
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
    </CategoryWrapper>
  );
};

export default Categories;
