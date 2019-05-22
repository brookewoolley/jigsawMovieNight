import React from "react";
import magnifyingGlass from "../../images/magnifyingGlass.png";
import deleteIcon from "../../images/deleteIcon.png"

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
  deleteIcon: {
    height: 18,
    marginRight: 10,
    cursor: "pointer"
  },
  daddyDiv: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "white"
  }
}

const SearchForm = ({ value, searchMovies, onClear }) => {
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
        <img style={localStyles.deleteIcon} src={!!value ? deleteIcon : ""} alt="" onClick={onClear}/>
     </div>
    </div>
  );
};

export default SearchForm;
