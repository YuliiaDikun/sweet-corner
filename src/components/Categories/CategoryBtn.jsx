import React from "react";
import { StyledCategoryBtn } from "./Categories.styled";
const CategoryBtn = ({ isActive, onSelectedCategory, info, activeButton }) => {
  const onBtnClicked = (e) => {
    const category = e.target.dataset.category;
    onSelectedCategory(category);
    activeButton(category);
  };

  return (
    <li>
      <StyledCategoryBtn
        isActive={isActive}
        data-category={info.data}
        onClick={onBtnClicked}
      >
        {info.title} {info.icon}
      </StyledCategoryBtn>
    </li>
  );
};

export default CategoryBtn;
