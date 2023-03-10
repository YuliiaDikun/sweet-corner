import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { FilterWrapper, FilterBtn } from "./Filter.styled";

const Filter = ({ updateFiler, filter}) => {
  const onFilterBtn = (e) => {
    const filter = e.target.dataset.filter;
    updateFiler(filter);    
  };

  return (
    <FilterWrapper>
      <FilterBtn data-filter="low-p" onClick={onFilterBtn} active={filter === "low-p" }>
        low price <AiOutlineArrowDown />
      </FilterBtn>
      <FilterBtn data-filter="hight-p" onClick={onFilterBtn} active={filter === "hight-p" }>
        hight price <AiOutlineArrowUp />
      </FilterBtn>
      <FilterBtn data-filter="hight-r" onClick={onFilterBtn} active={filter === "hight-r" }>
        top rating <AiFillStar />
      </FilterBtn>
      <FilterBtn data-filter="low-r" onClick={onFilterBtn} active={filter === "low-r" }>
        low rating <AiOutlineStar />
      </FilterBtn>      
    </FilterWrapper>
  );
};

export default Filter;
