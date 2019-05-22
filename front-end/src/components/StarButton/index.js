import React from "react";

const localStyles = {
  button: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer"
  }
};

const StarButton = ({ isFilled, onClick }) => {
  return (
    <button style={localStyles.button} onClick={onClick}>
      <span>{isFilled ? "★" : "☆"}</span>
    </button>
  );
};

export default StarButton;
