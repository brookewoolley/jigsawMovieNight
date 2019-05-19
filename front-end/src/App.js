import React, { Component } from "react";

const API = require("./config.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", movieSearchResult: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.componentDidMount(this.state.value);
    event.preventDefault();
  }

  componentDidMount(value) {
    fetch(`${API.baseUrl}search/movie?api_key=${API.apiKey}&query=${value}`)
      .then(response => response.json())
      .then(response => this.setState({ movieSearchResult: response.results }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for a film:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
