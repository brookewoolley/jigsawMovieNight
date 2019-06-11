import { renderHook, act } from "react-hooks-testing-library";
import useMovie from "./";
import { mockHttp } from "../../__mocks__/mockAxios";
import { backendUrl } from "../../config";
import { headers } from "../../authHelpers";

let dummyMovie = {
  title: "fake film 3",
  watchedStatus: false,
  popularity: 2,
  id: 2
};

let testMovie = 2;
let variant = "favourites";

let mockFetchParams = {
  method: "GET",
  url: backendUrl + `favourites/${testMovie}`,
  headers
};

let mockReviewParams = {
  method: "post",
  url: backendUrl + `favourites/review`,
  data: { movieId: 2, review: "review" },
  headers
};

let mockRatingParams = {
  method: "POST",
  url: backendUrl + `favourites/rate`,
  data: { movieId: 2, rating: 5 },
  headers
};

let mockWatchedParams = {
  method: "POST",
  url: backendUrl + `favourites/watched`,
  data: { movieId: 2, watchedStatus: true },
  headers
};

test("mocking axios test", () => {
  const { result } = renderHook(() => useMovie(testMovie, variant, mockHttp));
  expect(mockHttp).toHaveBeenCalledWith(mockFetchParams);
});

test("user can create review for a movie", () => {
  const { result } = renderHook(() => useMovie(testMovie, variant, mockHttp));
  const event = { target: { value: "review" } };
  act(() => result.current.createReview(dummyMovie, event));
  expect(mockHttp).toHaveBeenCalledWith(mockReviewParams);
  expect(result.current.movie.review).toEqual("review");
});

test("user can delete a review for a movie", () => {
  const { result } = renderHook(() => useMovie(testMovie, variant, mockHttp));
  const event = { target: { value: "review" } };
  act(() => result.current.createReview(dummyMovie, event));
  act(() => result.current.deleteReview(dummyMovie));
  expect(mockHttp).toHaveBeenCalledWith(mockReviewParams);
  expect(result.current.movie.review).toEqual("");
});
