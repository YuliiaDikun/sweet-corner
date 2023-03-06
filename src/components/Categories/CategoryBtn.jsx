import React from "react";
import { StyledCategoryBtn } from "./Categories.styled";
const CategoryBtn = ({isActive, onSelectedCategory, info, activeButton }) => {  
  const onBtnClicked = (e) => {
    const category = e.target.dataset.category;
    const id = e.target.dataset.id;
    onSelectedCategory(category);
    activeButton(id);
  };

  return (
    <li>
      <StyledCategoryBtn
        isActive={isActive }
        data-id={info.id}
        data-category={info.data}
        onClick={onBtnClicked}
      >
        {info.title} {info.icon}
      </StyledCategoryBtn>
    </li>
  );
};

export default CategoryBtn;
