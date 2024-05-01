/* eslint-disable react/prop-types */
import "./style.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

// we will imaging getting numbers of star from a prop and set a default to 5

const Star = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
    <div className="star-container">
      <div className="star-rating">
        {[...Array(numberOfStars)].map((_, index) => {
          // range 1 - 5;
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Star;
