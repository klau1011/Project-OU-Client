import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";

import "../index.css";

function Header() {
  return (
    <>
      {/* header on each page */}
      <title>Home | Project OU</title>

      <nav>
        {/* nav bar */}
        <div className="nav-wrapper">
          <div className="nav-logo">
            <Link to="/">
              <img src="https://cdn.discordapp.com/attachments/832303072645742632/1014329222027808828/0BB23037-2FB1-4F48-B2D5-97883D531F72_4_5005_c-removebg-preview.png" />
            </Link>
          </div>

          {/* navbar links */}
          <div className="nav-links">
            <NavLink
              to="/"
              key="1"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              key="2"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              {" "}
              Resources{" "}
            </NavLink>
            <NavLink
              to="/22ApplicantsData"
              key="3"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              {" "}
              21-22 Applicants Data{" "}
            </NavLink>
            <NavLink
              to="/Admissions"
              key="4"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Senior 101
            </NavLink>
            <NavLink
              to="/FAQ"
              key="5"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
