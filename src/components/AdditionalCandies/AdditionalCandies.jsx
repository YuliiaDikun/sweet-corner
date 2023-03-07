import React from "react";
import { Link } from "react-router-dom";
import { AdditionalList, AdditionalTitle } from "./AdditionalCandies.styled";
const AdditionalCandies = ({ addCandy }) => {
  return (
    <>
      <AdditionalTitle>You may also like:</AdditionalTitle>
      <AdditionalList>
        {addCandy.map((candy) => {
          return (
            <Link key={candy.id} to={`/sweets/${candy.id}`}>
              <div>
                <img src={candy.img} alt={candy.name} />
              </div>
              <p>{candy.name}</p>
            </Link>
          );
        })}
      </AdditionalList>
    </>
  );
};

export default AdditionalCandies;
