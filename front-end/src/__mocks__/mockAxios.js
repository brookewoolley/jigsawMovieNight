let dummyMovie = {
  title: "fake film 3",
  watchedStatus: false,
  popularity: 2,
  id: 2
};

export const mockHttp = jest.fn(() => Promise.resolve({ data: dummyMovie }));
