import React from "react";
import duck from "./assets/duck2.png";
import "./landing.css";
import Search from "./Search.js";
import SearchRec from "./SearchRec.js";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-max">
        <div className="landing-left">
          <h1 className="landing-header">
            <span className="landing-header-secondary">code() </span>
            at where you love
          </h1>
          <div className="landing-subheader">
            <p>Explore, Research, Secure, and Grow your career</p>
          </div>
          <div className="landing-search">
            <Search />
          </div>
          <div className="landing-search-rec"></div>
          <SearchRec />
        </div>
        <div className="landing-right">
          <img className="duck" src={duck} alt="duck" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
