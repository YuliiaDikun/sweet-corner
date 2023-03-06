import React from "react";
import { Link } from "react-router-dom";
const AdditionalCandies = ({ addCandy }) => {
  return (
    <ul>
      {addCandy.map((candy) => {
        return (
          <Link key={candy.id} to={`sweets/${candy.id}`}>
            <div>
              <img src={candy.img} alt={candy.name} />
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default AdditionalCandies;
