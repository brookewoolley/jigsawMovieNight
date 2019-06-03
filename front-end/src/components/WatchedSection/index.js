import React from "react";
import Button from "../Button";

const localStyles = {
  button: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 120,
    marginTop: "auto"
    // marginLeft: 20,
    // marginRight: 20
  },

  watchSymbol: {
    fontSize: 16,
    marginBottom: 2,
    marginRight: 2
  },
  symbolContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    // width: "100%"
  }
};

const WatchedSection = ({ setWatched, movie }) => {
  return (
    <Button onClick={() => setWatched(movie)} style={localStyles.button}>
      <span style={localStyles.symbolContainer}>
        <span style={localStyles.watchSymbol}>
          {!!movie.watched ? "-" : "+"}
        </span>{" "}
        <span>WATCHLIST</span>
      </span>
    </Button>
  );
};

export default WatchedSection;
