import React from "react";
import { Section, Header, StyledParagraph } from "./AboutUs.styled";
import { TbCandy } from "react-icons/tb";
import { Partners } from "../";
import { Container } from "../SharedLayout/SharedLayout.styled";
const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Header>
          Sweet Corner <TbCandy size={50} />
        </Header>
        <StyledParagraph>
          "Sweet Corner" candy store is a place where you can find a wide selection of
          sweets at affordable prices.
        </StyledParagraph>
        <StyledParagraph>
          "Sweet Corner" candy store offers a variety of treats, ranging from classic
          chocolates to modern confections. The store is committed to providing
          high-quality products that are both delicious and satisfying. In
          addition to its tasty treats, "Sweet Corner" also offers a welcoming
          atmosphere and friendly customer service. Whether you're looking for a
          special gift or simply indulging your sweet tooth, "Sweet Corner" candy store
          has something for everyone to enjoy.
        </StyledParagraph>
        <Partners />
      </Container>
    </Section>
  );
};

export default AboutUs;
