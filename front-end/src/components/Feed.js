import React from "react";
import ListOfMovies from "./ListOfMovies";

const Feed = ({
  movieList,
  favouriteMovie,
  isFavourite,
  favourites,
  navOffset
}) => {
  console.log("-------- |", favourites);
  return (
    <div style={{ paddingTop: navOffset }}>
      <div>
        {!!movieList && (
          <ListOfMovies
            movieList={movieList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
          />
        )}
      </div>
      <div>
        {!!favourites && (
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
