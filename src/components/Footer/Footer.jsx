import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
    return <Footer>
      <p>&copy; {year} All Rights Reserved</p>
  </Footer>;
};

export default Footer;