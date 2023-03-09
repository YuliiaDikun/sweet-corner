import React from "react";

import { AdditionalList, AdditionalTitle,AdditionalLink, AdditionalImgWrapper, AdditionalP } from "./AdditionalCandies.styled";
const AdditionalCandies = ({ addCandy }) => {
  return (
    <>
      <AdditionalTitle>You may also like:</AdditionalTitle>
      <AdditionalList>
        {addCandy.map((candy) => {
          return (
            <AdditionalLink key={candy.id} to={`/sweets/${candy.id}`}>
              <AdditionalImgWrapper>
                <img src={candy.img} alt={candy.name} />
              </AdditionalImgWrapper>
              <AdditionalP>{candy.name}</AdditionalP>
            </AdditionalLink>
          );
        })}
      </AdditionalList>
    </>
  );
};

export default AdditionalCandies;
