import React from "react";
import "./style.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="top">
      <Navbar expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="mainNavMenu" />
        <div className="top p-2">
          <div>
            <Navbar.Brand
              href="/"
              className="navBrand"
              style={{ fontSize: "30px" }}
            >
              <span>Navbar Brand</span>
            </Navbar.Brand>
          </div>

          <div>
            <Navbar.Collapse id="mainNavMenu">
              <Nav className="mr-auto">
                <ul className="navbar-nav">
                  <NavLink to="/">
                    <li className="nav-item pr-3">Home</li>
                  </NavLink>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <i className="fab fa-instagram">Instas</i>
    </div>
  );
};

export default Header;
