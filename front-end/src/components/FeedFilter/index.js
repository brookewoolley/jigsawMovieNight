import React from "react";
import Dropdown from "../Dropdown";

const localStyles = {
  daddyDiv: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(.75turn, rgba(15,214,175, 1), 80%, rgba(0,253,151,0.6)"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: 20
  }
};

const FeedFilter = ({ setFilter, filter }) => {
  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <Dropdown>
          <div onClick={() => setFilter("watched")}>Watched</div>
          <div onClick={() => setFilter("notWatched")}>Need to Watch</div>
        </Dropdown>
      </div>
    </div>
  );
};

export default FeedFilter;
