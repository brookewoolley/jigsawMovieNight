import React from "react";

const SearchForm = ({ value, searchMovies }) => {
    return (
        <label>
          Search for a film:
          <input type="text" value={value} onChange={searchMovies} />
        </label>
    );
};

export default SearchForm;