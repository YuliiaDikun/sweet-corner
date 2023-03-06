import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
const Filter = ({ updateFiler}) => {
  const onFilterBtn = (e) => {
    const filter = e.target.dataset.filter;
    updateFiler(filter);
  };

  return (
    <div>
      <button data-filter="low-p" onClick={onFilterBtn}>
        low price <AiOutlineArrowDown />
      </button>
      <button data-filter="hight-p" onClick={onFilterBtn}>
        hight price <AiOutlineArrowUp />
      </button>
      <button data-filter="hight-r" onClick={onFilterBtn}>
        top rating <AiFillStar />
      </button>
      <button data-filter="low-r" onClick={onFilterBtn}>
        low rating <AiOutlineStar />
      </button>
    </div>
  );
};

export default Filter;
