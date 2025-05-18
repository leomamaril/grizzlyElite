import { Link } from "react-router-dom";
import { NavbarLink } from "../components/ui/link";
import logo from "../assets/images/grizzlyelite.png";
import React from "react";
export default function Navigation() {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark grizzly-con-nav py-3 justify-content-center">
      <div className="grizzly-sub-nav g-0 global-padding">
        <a className="navbar-brand" href="index.php">
          <img
            src={logo}
            alt="Grizzly Elite"
            height="25"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <NavbarLink target="home" href="#" text="Home" />
            <NavbarLink target="about" href="#" text="About Us" />
            <NavbarLink target="services" href="#" text="Services" />
            <NavbarLink target="contact" href="#" text="Contact Us "/>
          </ul>
        </div>
      </div>
    </nav>
  );
}
