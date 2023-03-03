import React from "react";
import { SocialLinks } from "../";
import { Section, Header, StyledParagraph } from "./AboutUs.styled";
import { TbCandy } from "react-icons/tb";
const AboutUs = () => {
  return (
    <Section>
      <Header>
        NONAME sweets <TbCandy size={50} />
      </Header>
      <StyledParagraph>
        NONAME candy store is a place where you can find a wide selection of
        sweets at affordable prices.
      </StyledParagraph>
      <StyledParagraph>
        NONAME candy store offers a variety of treats, ranging from classic
        chocolates to modern confections. The store is committed to providing
        high-quality products that are both delicious and satisfying. In
        addition to its tasty treats, NONAME also offers a welcoming atmosphere
        and friendly customer service. Whether you're looking for a special gift
        or simply indulging your sweet tooth, NONAME candy store has something
        for everyone to enjoy.
      </StyledParagraph>
      <SocialLinks />
    </Section>
  );
};

export default AboutUs;
