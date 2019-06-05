import { renderHook, act } from "react-hooks-testing-library";
import useMovies from "./";

let fakeList = [
  { title: "fake movie 1", watched: true, popularity: 3, id: 1 },
  { title: "fake film 3", watched: false, popularity: 2, id: 2 }
];

let dummyMovie = { title: "fake film 3", watched: false, popularity: 2, id: 2 };

let newMovie = { title: "fake film 4", watched: false, popularity: 3, id: 4 };

test("user can add a movie to their list", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  act(() => result.current.favouriteMovie(newMovie));
  expect(result.current.favouriteList[2].title).toBe("fake film 4");
  expect(result.current.favouriteList[2].watched).toBe(false);
});

test("user can add a rating to a movie", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  act(() => result.current.setRating(dummyMovie, 3));
  expect(result.current.favouriteList[1].rating).toEqual(3);
});

test("user can add watched status to a movie", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  act(() => result.current.setWatched(dummyMovie));
  expect(result.current.favouriteList[1].watched).toBe(true);
});

test("user can add review to a movie", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  const event = { target: { value: "review" } };
  act(() => result.current.createReview(dummyMovie, event));
  expect(result.current.favouriteList[1].review).toEqual("review");
});
