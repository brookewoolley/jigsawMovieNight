import React from "react";
import Dropdown from "../Dropdown";
import useDropdown from "../../hooks/dropdown.js";
import { filterSorters } from "../../hooks/filters";

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

const FeedFilter = ({ setFilter, filter, sort, setSort }) => {
  // const { isDropped, setIsDropped } = useDropdown();
  const filterDropdown = useDropdown();
  const sortDropdown = useDropdown();
  console.log();
  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <Dropdown
          isDropped={filterDropdown.isDropped}
          setIsDropped={filterDropdown.setIsDropped}
          placeholder={"Select filter"}
          value={filter.name}
        >
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setFilter(filterSorters.watched);
              filterDropdown.setIsDropped(!filterDropdown.isDropped);
            }}
          >
            {filterSorters.watched.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setFilter(filterSorters.notWatched);
              filterDropdown.setIsDropped(!filterDropdown.isDropped);
            }}
          >
            {filterSorters.notWatched.name}
          </div>
        </Dropdown>
        <Dropdown
          isDropped={sortDropdown.isDropped}
          setIsDropped={sortDropdown.setIsDropped}
          placeholder={"Select sort"}
          value={sort.name}
        >
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.alphaAscending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.alphaAscending.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.alphaDescending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.alphaDescending.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.popAscending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.popAscending.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.popDescending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.popDescending.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.rateAscending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.rateAscending.name}
          </div>
          <div
            style={localStyles.filterItems}
            onClick={() => {
              setSort(filterSorters.rateDescending);
              sortDropdown.setIsDropped(!sortDropdown.isDropped);
            }}
          >
            {filterSorters.rateDescending.name}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default FeedFilter;
