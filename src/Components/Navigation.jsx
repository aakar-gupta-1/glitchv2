import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../image/logo.png";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container">
          <a href="/" className="navbar-brand text-uppercase font-weight-bold">
            <img src={logo}></img>
          </a>
          <div
            id="navbarSupportedContent"
            className="collapse navbar-collapse "
          >
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="empty"></div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
