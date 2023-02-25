import React from "react";
import { Component } from "react";

class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  render() {
    const { search } = this.state;
    return <h1>Searching for {this.props.search}</h1>;
  }
}
export default Searching;
