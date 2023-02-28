import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>&copy; {year} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
