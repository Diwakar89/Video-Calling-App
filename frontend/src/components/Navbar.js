import React from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            My React App
          </a>
          {/* Toggle button */}
          
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                  Event Handling
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/state">
                  State Manegement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chat">
                  Chat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageuser">
                  Manage User
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <a className="btn btn-dark px-3" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Navbar