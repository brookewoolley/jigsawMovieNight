import React from "react";
import ListOfMovies from "../ListOfMovies";
import NoFavouritesWarning from "../NoFavouritesWarning";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

const Feed = ({
  popularList,
  favouriteMovie,
  isFavourite,
  favouriteList,
  navOffset,
  rating,
  setRating,
  setModalMovie,
  setWatched,
  history,
  match
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
        {match.url === "/favourites" && !favouriteList.length && (
          <NoFavouritesWarning />
        )}
      </div>
      <div style={localStyles.container}>
        {match.url === "/popular" && !!popularList.length && (
          <ListOfMovies
            popularList={popularList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
            variant={match.params[0]}
            rating={rating}
            history={history}
          />
        )}
      </div>
      <div>
        {match.url === "/favourites" && !!favouriteList.length && (
          <ListOfMovies
            popularList={favouriteList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
            variant={match.params[0]}
            rating={rating}
            setRating={setRating}
            setModalMovie={setModalMovie}
            setWatched={setWatched}
            history={history}
          />
        )}
      </div>
    </div>
  );
};

export default Feed;
