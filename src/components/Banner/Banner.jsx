import React, { useState } from "react";
import { sliderData } from "./banner-data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Slider, Slide, Content, Link, iconStyle, next, prev } from "./Banner.styled";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = sliderData.length;
  
  return (
    <Slider>
      <AiOutlineArrowLeft size={20} style={{ ...iconStyle, ...prev }} />
      <AiOutlineArrowRight size={20} style={ { ...iconStyle, ...next }}/>
      {sliderData.map(({ image, heading, desc }, idx) => {
        return (
          <Slide key={idx} current={idx === currentSlide}>
            {idx === currentSlide && (
              <>
                <img src={image} alt="sweet slide" />
                <Content>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
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
