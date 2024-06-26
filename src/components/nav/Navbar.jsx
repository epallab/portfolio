import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import ThemeToggle from "../theme/ThemeToggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="brand d-flex">
        <span
          className="d-flex"
          style={{ fontSize: "25px", color: "var( --secondary-color)" }}
        >
          <FaUserCircle />
        </span>
        <h4
          className="d-flex"
          style={{
            margin: "0px",
            padding: "0px",
            color: "var( --secondary-color)",
          }}
        >
          Pallab Biswas
        </h4>
      </div>
      <div className="nav-link">
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive ? "nav-btns nav-btns-active " : "nav-btns"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-btns nav-btns-active " : "nav-btns"
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-btns nav-btns-active " : "nav-btns"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive ? "nav-btns nav-btns-active " : "nav-btns"
          }
        >
          Feedback
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-btns nav-btns-active " : "nav-btns"
          }
        >
          Contact Me
        </NavLink>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
