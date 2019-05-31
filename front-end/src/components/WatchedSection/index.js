import React from "react";
import Button from "../Button";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

  button: {
    fontSize: 12,
    padding: 8
  }
};

const WatchedSection = ({ setWatched, movie }) => {
  return (
    <div style={localStyles.container}>
      <div style={localStyles.buttonContainer}>
        <Button onClick={() => setWatched(movie)} style={localStyles.button}>
          {!!movie.watched ? "WATCHED" : "NEED TO WATCH"}
        </Button>
      </div>
    </div>
  );
};

export default WatchedSection;
