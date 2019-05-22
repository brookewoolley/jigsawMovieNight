import React from "react";
import ListOfMovies from "../ListOfMovies";

const Feed = ({
  popularList,
  favouriteMovie,
  isFavourite,
  favouriteList,
  navOffset,
  variant,
  rating,
  setRating
}) => {
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
        {variant === "popular" && !!popularList && (
          <ListOfMovies
            popularList={popularList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
            variant={variant}
            rating={rating}
          />
        )}
      </div>
      <div>
        {variant === "favourites" && !!favouriteList && (
          <ListOfMovies
            popularList={favouriteList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
            variant={variant}
            rating={rating}
            setRating={setRating}
          />
        )}
      </div>
    </div>
  );
};

export default Feed;
