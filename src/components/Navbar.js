import React from "react"
import PropTypes from "prop-types"
// import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div className="container">
      <nav
        id="nav"
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="#">
            {props.title}
          </a>
          {/* <Link className="navbar-brand text-primary" to="/">
            {props.title}
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.about}
                </a>
                {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  {props.about}
                </Link> */}
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <span
                className="btn text mx-3"
                id="toggle-switch"
                onClick={props.toggleMode}
                title="Enable Dark props.mode"
              >
                <i className="fas fa-moon" id="toggle-switch"></i>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
//props : properties of component
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
}
Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
}
