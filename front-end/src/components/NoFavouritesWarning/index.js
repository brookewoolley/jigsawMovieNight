import React from "react";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const NoFavouritesWarning = () => {
  return (
    <div style={localStyles.container}>
      <p>Mate, you don't have any faves.</p>
      <p>Sort your shit out. </p>
      <p>
        Click the star <span>☆</span>
      </p>
    </div>
  );
};

export default NoFavouritesWarning;
