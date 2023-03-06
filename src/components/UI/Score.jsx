import React from "react";
import { BsFillStarFill, BsStarHalf} from "react-icons/bs";

import { ScoreWrapper } from "./UI.styled";
const Score = ({ scored }) => {
  return (
    <ScoreWrapper>
      <span>
        <BsFillStarFill size={15} />
        <BsFillStarFill size={15} />
        <BsFillStarFill size={15} />
        <BsFillStarFill size={15} />
        <BsStarHalf size={15} />
      </span>
      <span>{scored}</span>
    </ScoreWrapper>
  );
};

export default Score;
