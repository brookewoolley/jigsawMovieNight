import React from "react";
import Review from "../Review";
import Button from "../Button";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 20
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
};

const WatchedSection = ({ setWatched, movie, setReview }) => {
  return (
    <div style={localStyles.container}>
      {movie.watched === true ? (
        <Review
          onReview={event => setReview(movie, event.target.value)}
          value={movie.review}
        />
      ) : (
        <div style={localStyles.buttonContainer}>
          <Button onClick={() => setWatched(movie)}>
            I'VE WATCHED THIS MOVIE
          </Button>
        </div>
      )}
    </div>
  );
};

export default WatchedSection;
