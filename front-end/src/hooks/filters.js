import { useState } from "react";

//rules
//watched - only shows movie with movie.watched
//notWatched - only shows movies !!movie.watched

const useFilters = () => {
  const [filter, setFilter] = useState("");

  const returnFilteredList = array => {
    return array.filter(item => {
      switch (filter) {
        case "watched":
          if (item.watched) {
            return item;
          }
          break;
        case "notWatched":
          if (!item.watched) {
            return item;
          }
          break;
        default:
          return item;
      }
    });
  };

  return {
    filter,
    setFilter,
    returnFilteredList
  };
};

export default useFilters;
