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

  button: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer"
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
          <button style={localStyles.button} onClick={onFavouriteMovie}>
            <span>{isFavourite ? "★" : "☆"}</span>
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
