import React from "react";

const localStyles = {
  // container: {
  //   display: "flex"
  // }

  movie: {
    height: "300px",
    width: "500px",
    position: "relative"
  },

  movieButton: {
    position: "absolute",
    right: 10,
    top: 10
  },

  movieImageColumn: { height: "100%" },

  movieImage: {},

  movieDetails: {
    position: "absolute",
    fontFamily: "Helvetica",
    bottom: 0,

    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)",
    // backgroundColor: "rgb(0,0,0,0.5)",
    color: "white",
    padding: 10,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  movieTitle: { margin: 5 },
  movieOverview: { fontSize: 12 }
};

class Movie extends React.Component {
  render() {
    return (
      <div style={localStyles.movie}>
        <div style={localStyles.movieImageColumn}>
          <div style={localStyles.movieButton}>
            <button>Fave</button>
          </div>
          <img
            style={localStyles.movieImage}
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div style={localStyles.movieDetails}>
          <h2 style={localStyles.movieTitle}>{this.props.title}</h2>
          <span style={localStyles.movieOverview}>{this.props.overview}</span>
        </div>
      </div>
    );
  }
}

export default Movie;
