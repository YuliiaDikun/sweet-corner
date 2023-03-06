import React from "react";
import { StyledList } from "./ProductList.styled";
import { Product } from "../";

const ProductsList = ({ sweets }) => {
  return (
    
      
      <StyledList>
        {sweets.map((candy) => {
          return <Product key={candy.id} candy={candy} />;
        })}
      </StyledList>
   
  );
};

export default ProductsList;
