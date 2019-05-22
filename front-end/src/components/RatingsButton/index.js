import React from "react";
import StarButton from "../StarButton";

const localStyles = {};

const stars = [1, 2, 3, 4, 5];

const RatingsButton = ({ setRating, rating }) => {
  return (
    <div style={localStyles.movieButton}>
      {stars.map(item => (
        <StarButton
          key={item}
          isFilled={item <= rating}
          onClick={() => setRating(item)}
        />
      ))}
    </div>
  );
};

export default RatingsButton;

{
  /* <span>{isFavourite ? "★" : "☆"}</span>; */
}
