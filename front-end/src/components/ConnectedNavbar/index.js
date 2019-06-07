import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import SearchForm from "../SearchForm";
import FeedFilter from "../FeedFilter";

const ConnectedNavBar = ({
  displayFilters,
  value,
  searchMovies,
  clearSearch,
  NAV_HEIGHT,
  setFilter,
  filter
}) => {
  return (
    <Switch>
      <Route
        path={"/(popular|favourites)"}
        render={props => (
          <Navbar height={NAV_HEIGHT} buttons={displayFilters} {...props}>
            <Switch>
              <Route
                path={"/(popular|)"}
                render={() => (
                  <SearchForm
                    value={value}
                    searchMovies={searchMovies}
                    onClear={clearSearch}
                  />
                )}
              />
              <Route
                path={"/favourites"}
                render={() => (
                  <FeedFilter setFilter={setFilter} filter={filter} />
                )}
              />
            </Switch>
          </Navbar>
        )}
      />
    </Switch>
  );
};

export default ConnectedNavBar;
