import React from "react";
import "./top-container.css";
import logo from "./assets/Logo2.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "Singapore",
    };
  }

  handleChange = (event) => {
    this.setState({ country: event.target.value });
  };

  render() {
    return (
      <div className="top-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <a className="navbar-text" href="#">
                  Companies
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-text" href="#">
                  Jobs
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-text" href="#">
                  Salaries
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-text" href="#">
                  Reviews
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-text" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ncountry-dropdown">
          <form
            className="country-dropdown-button"
            onChange={this.handleChange}
          >
            <select>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Thailand">Thailand</option>
              <option value="Philippines">Philippines</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Laos">Laos</option>
            </select>
            {this.state.country}
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
