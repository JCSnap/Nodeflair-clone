import React, { Component } from "react";
import "./productoptions.css";
import companies from "./assets/companies.png";
import jobs from "./assets/jobs.png";
import salaries from "./assets/salaries.png";
import reviews from "./assets/reviews.png";
import blogs from "./assets/blogs.png";
import insights from "./assets/insights.png";
import recruiters from "./assets/recruiters.png";
import events from "./assets/events.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./Jobs.js";

class ProductOptions extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        {
          description: "Companies",
          href: "/companies",
          img: companies,
        },
        {
          description: "Jobs",
          href: "/jobs",
          img: jobs,
        },
        {
          description: "Salaries",
          href: "salaries",
          img: salaries,
        },
        {
          description: "Reviews",
          href: "reviews",
          img: reviews,
        },
        {
          description: "Blogs",
          href: "blogs",
          img: blogs,
        },
        {
          description: "Insights",
          href: "insights",
          img: insights,
        },
        {
          description: "Recruiters",
          href: "recruiters",
          img: recruiters,
        },
        {
          description: "Events",
          href: "events",
          img: events,
        },
      ],
    };
  }
  render() {
    return (
      <div className="container product-options-container">
        <div className="product-options-card card">
          {this.state.options.map((option) => (
            <a class="product-option-container" href={option.href}>
              <img
                class="product-option-icon"
                src={option.img}
                alt={option.description}
              ></img>
              <p className="product-option-description">{option.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductOptions;
