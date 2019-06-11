import { renderHook, act } from "react-hooks-testing-library";
import useMovie from "./";

let dummyMovie = {
  title: "fake film 3",
  watchedStatus: false,
  popularity: 2,
  id: 2
};

let testMovie = 11;
let variant = "favourites";
let axios = test("useMovies fetches movieData from backend API", () => {});

test("user can add watched status to a movie", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useMovie());
  result.current.setWatched(dummyMovie);
  await waitForNextUpdate();
  expect(result.current.movie.watchedStatus).toEqual(true);
});

test("user can create review for a movie", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useMovie());
  const event = { target: { value: "review" } };
  result.current.createReview(dummyMovie, event);
  await waitForNextUpdate();
  expect(result.current.movie.review).toEqual("review");
});

test("user can delete a review for a movie", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useMovie());
  const event = { target: { value: "review" } };
  result.current.createReview(dummyMovie, event);
  result.current.deleteReview(dummyMovie);
  await waitForNextUpdate();
  expect(result.current.movie.review).toBeUndefined();
});
