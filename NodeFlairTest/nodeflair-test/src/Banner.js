import React, { Component } from "react";
import "./banner.css";
import banner from "./assets/banner.png";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      header: "Tech Talent Salary",
      subheader: "Singapore 2021/2022",
    };
  }
  render() {
    return (
      <div className="banner-outer-container">
        <a href="./jobs">
          <div className="banner-inner-container">
            <div className="banner-content">
              <img className="banner-image" src={banner} alt="banner" />
              <div className="banner-text-container">
                <div className="banner-text-header">{this.state.header}</div>
                <div className="banner-text-subheader">
                  {this.state.subheader}
                </div>
                <div className="banner-button-container">
                  <button type="button" class="banner-button">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Banner;
