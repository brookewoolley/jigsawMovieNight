import React, { useState } from "react";
import ListOfMovies from "./components/ListOfMovies";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm"
import useMovies from "../src/hooks/movies";

const App = () => {
  const {
    value,
    movieList,
    searchMovies,
    favourite,
    favouriteMovie,
    isFavourite
  } = useMovies();
  // const { popularMoviesList } = usePopularMovies();

  // console.log("------> PM", popularMoviesList);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Navbar>
          MovieFinder
          <SearchForm value={value} searchMovies={searchMovies}/>
        </Navbar>

        {!!movieList && (
          <ListOfMovies
            movieList={movieList}
            favouriteMovie={favouriteMovie}
            isFavourite={isFavourite}
          />
        )}
      </div>
      {!!favourite && (
        <ListOfMovies
          movieList={favourite}
          favouriteMovie={favouriteMovie}
          isFavourite={isFavourite}
        />
      )}
    </div>
  );
};

export default App;
