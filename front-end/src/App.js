import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SearchForm from "../src/components/SearchForm";
import useMovies from "../src/hooks/movies";
import Feed from "../src/components/Feed";
import useNavigation from "./hooks/navigation";
import ModalMovie from "../src/components/ModalMovie";
import useModal from "./hooks/modal";

const NAV_HEIGHT = 110;

const App = () => {
  const {
    value,
    popularList,
    searchMovies,
    favouriteList,
    favouriteMovie,
    isFavourite,
    clearSearch,
    setRating,
    setWatched,
    setReview
  } = useMovies();

  const { setModalMovie, modalMovie } = useModal();

  const { variant, setVariant } = useNavigation();

  const displayFilters = [
    { id: "popular", text: "All movies", onClick: () => setVariant("popular") },
    {
      id: "favourites",
      text: `Favourites (${favouriteList.length})`,
      onClick: () => setVariant("favourites")
    }
  ];

  return (
    <Router>
      <div>
        <div>
          {modalMovie && (
            <ModalMovie
              setWatched={setWatched}
              modalMovie={modalMovie}
              setModalMovie={setModalMovie}
              setReview={setReview}
            />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Navbar
            height={NAV_HEIGHT}
            buttons={displayFilters}
            variant={variant}
          >
            {variant === "popular" ? (
              <SearchForm
                value={value}
                searchMovies={searchMovies}
                onClear={clearSearch}
              />
            ) : (
              ""
            )}
          </Navbar>
          {!modalMovie && (
            <Feed
              popularList={popularList}
              favouriteMovie={favouriteMovie}
              isFavourite={isFavourite}
              favouriteList={favouriteList}
              navOffset={NAV_HEIGHT}
              variant={variant}
              setRating={setRating}
              setModalMovie={setModalMovie}
              setWatched={setWatched}
            />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
