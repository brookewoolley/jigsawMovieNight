import { renderHook, act } from "react-hooks-testing-library";
import useMovies from "./";

let fakeList = [
  { title: "fake movie 1", watched: true, popularity: 3, id: 1 },
  { title: "fake film 3", watched: false, popularity: 2, id: 2 }
];

let dummyMovie = {
  title: "fake film 3",
  watchedStatus: false,
  popularity: 2,
  id: 2
};

let newMovie = { title: "fake film 4", watched: false, popularity: 3, id: 4 };

xtest("user can add a movie to their list", async () => {
  try {
    const { result, waitForNextUpdate } = renderHook(() => useMovies(fakeList));
    result.current.favouriteMovie(newMovie);
    await waitForNextUpdate();
    expect(result.current.favouriteList[2].title).toBe("fake film 4");
  } finally {
    console.error("couldn't favouriteMovie");
  }
});

xtest("user can add a rating to a movie", async () => {
  try {
    const { result, waitForNextUpdate } = renderHook(() => useMovies(fakeList));
    result.current.setMovieRating(dummyMovie, 3);
    await waitForNextUpdate();
    expect(result.current.favouriteList[1].rating).toEqual(3);
  } finally {
    console.error("couldn't setMovieRating");
  }
});

xtest("favourite movie is removed if favourite function is toggled", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  act(() => result.current.favouriteMovie(newMovie));
  act(() => result.current.favouriteMovie(newMovie));
  expect(result.current.favouriteList).not.toContain(newMovie);
});
