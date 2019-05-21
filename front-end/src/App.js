import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import useMovies from "../src/hooks/movies";
import Feed from "./components/Feed";

const NAV_HEIGHT = 100;

const App = () => {
  const {
    value,
    movieList,
    searchMovies,
    favourites,
    favouriteMovie,
    isFavourite
  } = useMovies();
  // const { popularMoviesList } = usePopularMovies();

  // console.log("------> PM", popularMoviesList);

  const filters = [
    { id: "popular", text: "All movies" },
    { id: favourites, text: `Favourites (${favourites.length})` }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Navbar height={NAV_HEIGHT}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: 10,
            backgroundColor: "#212121",
            color: "#00fd97"
          }}
        >
          {filters.map((filter, index) => (
            <div style={index !== filter.length - 1 && { marginRight: 40 }}>
              {filter.text}
            </div>
          ))}
        </div>
        <SearchForm value={value} searchMovies={searchMovies} />
      </Navbar>
      <Feed
        movieList={movieList}
        favouriteMovie={favouriteMovie}
        isFavourite={isFavourite}
        favourites={favourites}
        navOffset={NAV_HEIGHT}
      />
    </div>
  );
};

export default App;
