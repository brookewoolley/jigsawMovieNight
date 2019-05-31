import React from "react";
import useMovies from "../src/hooks/movies";
import Feed from "../src/components/Feed";
import ModalMovie from "../src/components/ModalMovie";
import useModal from "./hooks/modal";
import ConnectedNavBar from "../src/components/ConnectedNavbar";
import LandingPage from "../src/components/LandingPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import "./App.css";

const NAV_HEIGHT = 120;

const localStyles = {
  container: {
    fontFamily: "Inter var, sans-serif"
  },

  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    paddingBottom: 5,
    backgroundColor: "none",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "2px",
    fontSize: 14
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
    createReview,
    deleteReview,
    review,
    getFavourite
  } = useMovies();

  const { setModalMovie, modalMovie } = useModal();

  const displayFilters = [
    {
      component: (
        <Link style={localStyles.link} to="/popular">
          POPULAR
        </Link>
      ),
      id: "popular"
    },
    {
      component: (
        <Link style={localStyles.link} to="/favourites">
          {`FAVES (${favouriteList.length})`}
        </Link>
      ),
      id: "favourites"
    }
  ];

  if (!window.localStorage.getItem("token")) {
    props.history.push("/");
  }

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
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/signup" render={props => <SignUp {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route
              path={"/(popular|favourites)"}
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
                  createReview={createReview}
                  deleteReview={deleteReview}
                  review={review}
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
