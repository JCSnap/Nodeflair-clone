import React, { Component } from "react";

class SearchRec extends Component {
  constructor() {
    super();
    this.state = {
      Companies: [
        {
          company: "Shopee Salaries",
          site: "./salary",
        },
        {
          company: "Grab Salaries",
          site: "facebook.com",
        },
        {
          company: "GovTech Jobs",
          site: "amazon.com",
        },
        {
          company: "Engineering Manager",
          site: "apple.com",
        },
        {
          company: "Node.js",
          site: "microsoft.com",
        },
        {
          company: "iOS Developer",
          site: "netflix.com",
        },
      ],
    };
  }
  render() {
    return (
      <div className="search-rec-container">
        <p className="search-rec-header">POPULAR SEARCHES</p>
        <div className="search-rec-tag-container">
          {this.state.Companies.map((company) => (
            <a className="search-rec-tag" href={company.site}>
              {company.company}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchRec;
