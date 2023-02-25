import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Landing from "./Landing.js";
import Banner from "./Banner.js";
import ProductOptions from "./ProductOptions.js";
import JobsView from "./JobsView.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="landing">
          <Landing />
        </div>
        <div className="product-options">
          <ProductOptions />
        </div>
        <Banner />
        <div className="salaries-display">Here goes the salaries</div>
        <JobsView />
      </div>
    );
  }
}

export default Home;
