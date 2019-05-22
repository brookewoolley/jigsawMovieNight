import React from "react";
import magnifyingGlass from "../../images/magnifyingGlass.png";

const BACKGROUND_COLOR = "#F5F5F5"

const localStyles = {
  input: {
  padding: 10,
  width: "100%",
  fontSize: 18,
  border: 0,
  backgroundColor: BACKGROUND_COLOR
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5px",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10
  },
  searchIcon: {
    height: 22,
    marginLeft: 10
  },
  daddyDiv: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "white"
  }
}

const SearchForm = ({ value, searchMovies }) => {
  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <img style={localStyles.searchIcon} src={magnifyingGlass} alt=""/>
        <input style={localStyles.input}
          placeholder={"Search for a film..."}
          type="text"
          value={value}
          onChange={searchMovies}
        />
     </div>
    </div>
  );
};

export default SearchForm;
