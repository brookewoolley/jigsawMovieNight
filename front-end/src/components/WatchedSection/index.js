import React from "react";
import Review from "../Review";

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
  },

  button: {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 15,
    margin: 10
  }
};

const WatchedSection = ({ setWatched, movie, setReview }) => {
  return (
    <div style={localStyles.container}>
      {movie.watched === true ? (
        <Review onReview={event => setReview(movie, event.target.value)} />
      ) : (
        <div style={localStyles.buttonContainer}>
          <button style={localStyles.button} onClick={() => setWatched(movie)}>
            I'VE WATCHED THIS MOVIE
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchedSection;
