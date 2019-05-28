import React from "react";
import StarButton from "../StarButton";
import RatingsButton from "../RatingsButton";

const localStyles = {
  movie: {
    position: "relative",
    overflow: "hidden",
    marginBottom: 10
  },

  movieImage: {
    width: "100%",
    cursor: "pointer"
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
  setRating,
  setModalMovie,
  setWatched
}) => {
  return (
    <div style={localStyles.movie}>
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        {variant === "popular" ? (
          <StarButton isFilled={isFavourite} onClick={onFavouriteMovie} />
        ) : (
          <RatingsButton setRating={setRating} rating={rating} />
        )}
      </div>

      <img
        style={localStyles.movieImage}
        src={image}
        alt={title}
        onClick={setModalMovie}
      />
      <div style={localStyles.movieDetails}>
        <h2 style={localStyles.movieTitle}>{title}</h2>
        <span style={localStyles.movieOverview}>{overview}</span>
      </div>
    </div>
  );
};

export default Movie;
