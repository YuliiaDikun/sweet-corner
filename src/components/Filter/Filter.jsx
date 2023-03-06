import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { RxCross1 } from 'react-icons/rx';
import { FilterWrapper, FilterBtn } from "./Filter.styled";

const Filter = ({ updateFiler}) => {
  const onFilterBtn = (e) => {
    const filter = e.target.dataset.filter;
    updateFiler(filter);
  };

  return (
    <FilterWrapper>
      <FilterBtn data-filter="low-p" onClick={onFilterBtn}>
        low price <AiOutlineArrowDown />
      </FilterBtn>
      <FilterBtn data-filter="hight-p" onClick={onFilterBtn}>
        hight price <AiOutlineArrowUp />
      </FilterBtn>
      <FilterBtn data-filter="hight-r" onClick={onFilterBtn}>
        top rating <AiFillStar />
      </FilterBtn>
      <FilterBtn data-filter="low-r" onClick={onFilterBtn}>
        low rating <AiOutlineStar />
      </FilterBtn>
      <FilterBtn data-filter="" onClick={onFilterBtn}>
        Reset <RxCross1 />
      </FilterBtn>
    </FilterWrapper>
  );
};

export default Filter;
