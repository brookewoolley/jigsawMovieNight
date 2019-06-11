import { renderHook, act} from "react-hooks-testing-library";
import useMovies from "./";
import { mockHttp } from "../../__mocks__/mockAxios";
import { backendUrl } from "../../config";
import { headers } from "../../authHelpers";

let fakeList = [
  { title: "fake movie 1", watched: true, popularity: 3, id: 1 },
  { title: "fake film 4", watched: false, popularity: 2, id: 4 }
];

let dummyMovie = {
  title: "fake film 3",
  watchedStatus: false,
  popularity: 2,
  id: 2
};

let mockFavouriteParams = {
  method: "post",
  url: backendUrl + "favourites",
  data: { movieId: 2 },
  headers
}

let mockRatingParams = {
  method: "post",
  url: backendUrl + "favourites/rate",
  data: { movieId: 2, rating: 3 },
  headers
}


let newMovie = { title: "fake film 4", watched: false, popularity: 3, id: 4 };

test("user can add a movie to their list", async () => {
    const { result } = renderHook(() => useMovies(fakeList, mockHttp));
    act(() => result.current.favouriteMovie(dummyMovie));
    expect(mockHttp).toHaveBeenCalledWith(mockFavouriteParams);
    console.log(result.current.favouriteList);
    expect(result.current.favouriteList).toContain(dummyMovie);

});

test("user can add a rating to a movie", () => {
    const { result } = renderHook(() => useMovies(fakeList, mockHttp));
    act(() => result.current.setMovieRating(dummyMovie, 3));
    expect(mockHttp).toHaveBeenCalledWith(mockRatingParams);
    console.log(result.current.favouriteList);
    expect(result.current.favouriteList[0].rating).toEqual(3);
});

test("favourite movie is removed if favourite function is toggled", () => {
  const { result } = renderHook(() => useMovies(fakeList));
  act(() => result.current.favouriteMovie(newMovie));
  act(() => result.current.favouriteMovie(newMovie));
  expect(result.current.favouriteList).not.toContain(newMovie);
});
