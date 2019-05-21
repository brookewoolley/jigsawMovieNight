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
    { id: "favourites", text: `Favourites (${favourites.length})` }
  ];

  const icons = ["😀", "🐬", "🦐"];

  const FootBar = () => (
    <div
      style={{
        padding: 10,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#212121",
        zIndex: 2
      }}
    >
      {icons.map(item => (
        <span>{item}</span>
      ))}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FootBar />
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
        variant
      />
    </div>
  );
};

export default App;
