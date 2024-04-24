import React from "react";
import Slider from "react-slick";
import { carouselData } from "../../data";
// Import css files
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../CarouselCard";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    arrowsOutside: false,
    dotsOutside: false,
  };
  return (
    <Slider {...settings}>
      {carouselData.map((each) => (
        <CarouselCard details={each} key={each.id} />
      ))}
    </Slider>
  );
}

export default MultipleItems;
