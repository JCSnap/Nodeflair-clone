import React from "react";
import { Component } from "react";
import Searching from "./Searching.js";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmitEvent = (event) => {
    event.preventDefault();
    console.log(this.state.search);
    <Searching search={this.state.search} />;
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search-outer">
        <form onSubmit={this.handleSubmitEvent}>
          <div className="search-container">
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
              placeholder="Search for a job, company, or location"
            />
          </div>
          <button
            type="button"
            class="btn search-close-button muted transparent"
            onClick={this.handleClearEvent}
          >
            {" "}
            X{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
