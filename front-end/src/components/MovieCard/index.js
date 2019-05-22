import React from "react";
import StarButton from "../StarButton";
import RatingsButton from "../RatingsButton";

const localStyles = {
  // container: {
  //   display: "flex"
  // }

  movie: {
    // height: "300px",
    // width: "100%",
    position: "relative",
    overflow: "hidden",
    marginBottom: 10
  },

  movieImageColumn: { height: "100%" },

  movieImage: {
    width: "100%"
  },

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

const Movie = ({
  image,
  title,
  overview,
  onFavouriteMovie,
  isFavourite,
  variant,
  rating,
  setRating
}) => {
  return (
    <div style={localStyles.movie}>
      <div style={localStyles.movieImageColumn}>
        <div style={{ position: "absolute", right: 10, top: 10 }}>
          {variant === "popular" ? (
            <StarButton isFilled={isFavourite} onClick={onFavouriteMovie} />
          ) : (
            <RatingsButton setRating={setRating} rating={rating} />
          )}
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
