import React from "react";
import useMovies from "../src/hooks/movies";
import Feed from "../src/components/Feed";
import ModalMovie from "../src/components/ModalMovie";
import useModal from "./hooks/modal";
import ConnectedNavBar from "../src/components/ConnectedNavbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NAV_HEIGHT = 110;
const localStyles = {
  container: {
    fontFamily: "Helvetica"
  },

  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#212121",
    color: "#00fd97",
    cursor: "pointer",
    textDecoration: "none"
  }
};

const App = props => {
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
    setReview,
    getFavourite
  } = useMovies();

  const { setModalMovie, modalMovie } = useModal();

  const displayFilters = [
    {
      component: (
        <Link style={localStyles.link} to="/popular">
          All movies
        </Link>
      ),
      id: "popular"
    },
    {
      component: (
        <Link style={localStyles.link} to="/favourites">
          {`Favourites (${favouriteList.length})`}
        </Link>
      ),
      id: "favourites"
    }
  ];

  console.log("------ app props", props);

  return (
    <Router>
      <div style={localStyles.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ConnectedNavBar
            displayFilters={displayFilters}
            value={value}
            searchMovies={searchMovies}
            clearSearch={clearSearch}
            NAV_HEIGHT={NAV_HEIGHT}
          />
          <Switch>
            <Route
              path={"/(popular|favourites|)"}
              exact
              render={props => (
                <Feed
                  popularList={popularList}
                  favouriteMovie={favouriteMovie}
                  isFavourite={isFavourite}
                  favouriteList={favouriteList}
                  navOffset={NAV_HEIGHT}
                  setRating={setRating}
                  setModalMovie={setModalMovie}
                  setWatched={setWatched}
                  {...props}
                />
              )}
            />
            <Route
              path="/movies/:id"
              render={props => (
                <ModalMovie
                  {...props}
                  setWatched={setWatched}
                  modalMovie={modalMovie}
                  setModalMovie={setModalMovie}
                  setReview={setReview}
                  getFavourite={getFavourite}
                />
              )}
            />
            <Route path="/blah" render={() => <div>hey</div>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
