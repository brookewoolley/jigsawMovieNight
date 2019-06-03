import React from "react";
import Dropdown from "../Dropdown";
import useDropdown from "../../hooks/dropdown.js";

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
    borderRadius: 20,
    marginBottom: 10
  },
  filterItems: {
    padding: 4,
    marginLeft: 26,
    marginRight: 26,
    paddingBottom: 8,
    paddingTop: 8,
    borderTop: "1px solid #C7C7CD"
  }
};

const FeedFilter = ({ setFilter, filter }) => {
  const { setIsDropped, isDropped } = useDropdown();
  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <Dropdown
          isDropped={isDropped}
          setIsDropped={setIsDropped}
          placeholder={"Select filter"}
          value={filter}
        >
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setFilter("watched");
              setIsDropped(!isDropped);
            }}
          >
            Watched
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setFilter("notWatched");
              setIsDropped(!isDropped);
            }}
          >
            Need to Watch
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default FeedFilter;
