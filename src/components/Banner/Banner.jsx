import React, { useState } from "react";
import { sliderData } from "./banner-data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  Slider,
  Slide,
  Content,
  Link,
  Line,
  iconStyle,
  next,
  prev,
} from "./Banner.styled";

const Banner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderLength = sliderData.length;

  const nexSlide = () => {
    setCurrentSlideIndex(
      currentSlideIndex === sliderLength - 1 ? 0 : currentSlideIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlideIndex(
      currentSlideIndex === 0 ? sliderLength - 1 : currentSlideIndex - 1
    );
  };

  return (
    <Slider>
      <AiOutlineArrowLeft
        onClick={prevSlide}
        size={20}
        style={{ ...iconStyle, ...prev }}
      />
      <AiOutlineArrowRight
        onClick={nexSlide}
        size={20}
        style={{ ...iconStyle, ...next }}
      />
      {sliderData.map(({ image, heading, desc }, idx) => {
        return (
          <Slide key={idx} current={idx === currentSlideIndex}>
            {idx === currentSlideIndex && (
              <>
                <img src={image} alt="sweet slide" />
                <Content>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <Line />
                  <Link href="#product">Shop now</Link>
                </Content>
              </>
            )}
          </Slide>
        );
      })}
    </Slider>
  );
};

export default Banner;
