import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import SearchForm from "../SearchForm";

const ConnectedNavBar = ({
  displayFilters,
  value,
  searchMovies,
  clearSearch,
  NAV_HEIGHT
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
            </Switch>
          </Navbar>
        )}
      />
    </Switch>
  );
};

export default ConnectedNavBar;
