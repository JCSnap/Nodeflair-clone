import React, { Component } from "react";
import jobs from "./Jobs.json";
import "./jobsview.css";

class JobsView extends Component {
  render() {
    return (
      <div className="jobs-view-container">
        <div>
          {jobs.companies.map((company, index) => (
            <div className="jobs-view-box" key={index}>
              <div className="jobs-view-box-content">
                <div className="jobs-view-box-content-header">
                  <h1>{company.companyName}</h1>
                  <img
                    className="jobs-view-box-content-header-image"
                    src={company.companyImageSrc}
                    alt={company.companyName}
                  />
                </div>
                <div className="jobs-view-box-content-description">
                  <p>Position: {company.positionForHire}</p>
                  <p>Salary: {company.salary}</p>
                  <p>Languages: {company.programmingLanguages.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JobsView;
