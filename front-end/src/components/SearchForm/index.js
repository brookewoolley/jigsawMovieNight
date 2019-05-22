import React from "react";

const SearchForm = ({ value, searchMovies }) => {
  return (
    <label>
      <input
        placeholder={"Search for a film..."}
        type="text"
        value={value}
        onChange={searchMovies}
        style={{
          padding: 10,
          width: "100%",
          fontSize: 16,
          // backgroundColor: "blue",
          border: 0,
          color: "white"
        }}
      />
    </label>
  );
};

export default SearchForm;
