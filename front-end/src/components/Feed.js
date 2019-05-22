import React from "react";
import ListOfMovies from "./ListOfMovies";

const Feed = ({
  movieList,
  favouriteMovie,
  isFavourite,
  favourites,
  navOffset,
  variant
}) => {
  console.log("-------- |", favourites);
  return (
    <div
      style={{
        paddingTop: navOffset,
        width: "100%",
        maxWidth: 500,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <div>
        {variant === "popular" && !!movieList && (
          <ListOfMovies
            movieList={movieList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
          />
        )}
      </div>
      <div>
        {variant === "favourites" && !!favourites && (
          <ListOfMovies
            movieList={favourites}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
          />
        )}
      </div>
    </div>
  );
};

export default Feed;
