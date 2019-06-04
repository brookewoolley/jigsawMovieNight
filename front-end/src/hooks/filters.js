import { useState } from "react";

//rules
//watched - only shows movie with movie.watched
//notWatched - only shows movies !!movie.watched
//alphaAscending - shows all movies in A-Z order
//alphaDescending - shows all movies in Z-A order
//popAscending - shows all movies with most popular first
//popDescending - shows all movies with least popular first
//rateAscending - shows all movies with highest user rating first
//rateDescending - shows all movies with lowest user rating first

export const filterSorters = {
  watched: {
    id: "watched",
    name: "Watched"
  },
  notWatched: {
    id: "notWatched",
    name: "Movies to Watch"
  },
  alphaAscending: {
    id: "alphaAscending",
    name: "A-Z"
  },
  alphaDescending: {
    id: "alphaDescending",
    name: "Z-A"
  },
  popAscending: {
    id: "popAscending",
    name: "Most Popular"
  },
  popDescending: {
    id: "popDescending",
    name: "Least Popular"
  },
  rateAscending: {
    id: "rateAscending",
    name: "Your highest rated movies"
  },
  rateDescending: {
    id: "rateDescending",
    name: "Your lowest rated movies"
  }
};

const useFilters = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("alphaAscending");

  const returnFilteredList = array => {
    return array
      .filter(item => {
        switch (filter.id) {
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
      })
      .sort((a, b) => {
        switch (sort.id) {
          case "alphaAscending":
            return a.title.localeCompare(b.title);
          case "alphaDescending":
            return b.title.localeCompare(a.title);
          case "popAscending":
            return a.popularity < b.popularity
              ? 1
              : a.popularity > b.popularity
              ? -1
              : 0;
          case "popDescending":
            return a.popularity > b.popularity
              ? 1
              : a.popularity < b.popularity
              ? -1
              : 0;
          case "rateAscending":
            return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
          case "rateDescending":
            return a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0;
          default:
            return a;
        }
      });
  };

  return {
    filter,
    setFilter,
    returnFilteredList,
    sort,
    setSort
  };
};

export default useFilters;
