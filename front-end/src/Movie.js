import React from "react";
import useMovies from "../src/hooks/movies";

const localStyles = {
  // container: {
  //   display: "flex"
  // }

  movie: {
    height: "300px",
    width: "500px",
    position: "relative",
    overflow: "hidden"
  },

  movieButton: {
    position: "absolute",
    right: 10,
    top: 10
  },

  buttonOn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    textTransform: "uppercase"
  },

  buttonOff: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase"
  },

  movieImageColumn: { height: "100%" },

  movieImage: {},

  movieDetails: {
    position: "absolute",
    fontFamily: "Helvetica",
    bottom: 0,

    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)",
    // backgroundColor: "rgb(0,0,0,0.5)",
    color: "white",
    padding: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  movieTitle: { margin: 5 },
  movieOverview: { fontSize: 12 }
};

const Movie = ({ image, title, overview, onFavouriteMovie, isFavourite }) => {
  return (
    <div style={localStyles.movie}>
      <div style={localStyles.movieImageColumn}>
        <div style={localStyles.movieButton}>
          <button
            style={!isFavourite ? localStyles.buttonOff : localStyles.buttonOn}
            onClick={onFavouriteMovie}
          >
            Fave
          </button>
        </div>
        <img style={localStyles.movieImage} src={image} alt={title} />
      </div>
      <div style={localStyles.movieDetails}>
        <h2 style={localStyles.movieTitle}>{title}</h2>
        <span style={localStyles.movieOverview}>{overview}</span>
      </div>
    </div>
  );
};

export default Movie;
