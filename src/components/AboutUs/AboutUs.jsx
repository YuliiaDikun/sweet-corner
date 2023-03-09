import React from "react";
import img1 from "../../assets/about/1-min.jpg";
import img2 from "../../assets/about/2-min.jpg";
import img3 from "../../assets/about/3-min.jpg";
import img4 from "../../assets/about/4-min.jpg";
import img5 from "../../assets/about/5-min.jpg";
import img6 from "../../assets/about/6-min.jpg";
import {
  Section,
  Header,
  StyledParagraph,
  Parent,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
} from "./AboutUs.styled";
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
          "Sweet Corner" candy store is a place where you can find a wide
          selection of sweets at affordable prices.
        </StyledParagraph>
        <StyledParagraph>
          "Sweet Corner" candy store offers a variety of treats, ranging from
          classic chocolates to modern confections. The store is committed to
          providing high-quality products that are both delicious and
          satisfying. In addition to its tasty treats, "Sweet Corner" also
          offers a welcoming atmosphere and friendly customer service. Whether
          you're looking for a special gift or simply indulging your sweet
          tooth, "Sweet Corner" candy store has something for everyone to enjoy.
        </StyledParagraph>

        <Parent>
          <First>
            <img src={img1} alt="about us" loading="lazy" />
          </First>
          <Second>
            <img src={img2} alt="about us" loading="lazy" />
          </Second>
          <Third>
            <img src={img3} alt="about us" loading="lazy" />
          </Third>
          <Fourth>
            <img src={img4} alt="about us" loading="lazy" />
          </Fourth>
          <Fifth>
            <img src={img5} alt="about us" loading="lazy" />
          </Fifth>
          <Sixth>
            <img src={img6} alt="about us" loading="lazy" />
          </Sixth>
        </Parent>

        <Partners />
      </Container>
    </Section>
  );
};

export default AboutUs;
