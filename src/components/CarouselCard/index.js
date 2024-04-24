import React from "react";
import "./index.css";

const CarouselCard = ({ details }) => {
  return (
    <li className="carousel-card-contianer">
      <img src={details.imageUrl} alt="img" className="carousel-image" />
      <h2>{details.heading}</h2>
      <p>{details.description}</p>
    </li>
  );
};

export default CarouselCard;
