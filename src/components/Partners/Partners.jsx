import React from "react";
import { partners } from "./partners-icon";
const Partners = () => {
  return (
    <>
      <h2 className="visually-hidden">Partners</h2>
      <ul>
        {partners.map((partner, i) => {
          return <li key={i}>{partner.svg}</li>;
        })}
      </ul>
    </>
  );
};

export default Partners;
