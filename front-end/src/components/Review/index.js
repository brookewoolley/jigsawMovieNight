import React, { useState } from "react";

const localStyles = {
  daddyDiv: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Helvetica"
  },

  label: {
    fontSize: 18,
    color: "black",
    paddingLeft: 20,
    marginTop: 20
  },

  textArea: {
    outline: "none",
    border: 0,
    padding: 20,
    paddingTop: 5,
    fontSize: 14
  },

  button: {
    backgroundColor: "black",
    color: "#00fd97",
    cursor: "pointer",
    height: "30px",
    width: "50%",
    fontSize: 16
  }
};

const Review = ({ onReview, value }) => {
  const [isFocussed, setIsFocussed] = useState(false);

  return (
    <div style={localStyles.daddyDiv}>
      <h2 style={localStyles.label}>My Review: </h2>
      <textarea
        style={{ ...localStyles.textArea, opacity: isFocussed ? 1 : 0.6 }}
        type="text"
        placeholder="Leave a review..."
        onChange={onReview}
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        value={value}
      />
    </div>
  );
};

export default Review;
