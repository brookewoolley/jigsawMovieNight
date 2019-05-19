import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="movie">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.image}
          alt={this.props.title}
          style={{ width: "200px" }}
        />
        <p>{this.props.overview}</p>
      </div>
    );
  }
}

export default Movie;
