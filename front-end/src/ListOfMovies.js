import React from "react";
import Movie from "./Movie";

class ListOfMovies extends React.Component {
  render() {
    let movies = this.props.movieList.map(function(movie) {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      );
    });
    return <div>{movies}</div>;
  }
}

export default ListOfMovies;
