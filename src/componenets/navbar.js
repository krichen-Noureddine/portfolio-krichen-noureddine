import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item is-hidden-desktop">
          <a href="https://github.com/yourusername" className="icon is-large has-text-light">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="navbar-item is-hidden-desktop">
          <a href="https://yourwebsite.com" className="icon is-large has-text-light">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="https://github.com/yourusername" className="icon is-large has-text-light">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <div className="navbar-item">
            <a href="https://yourwebsite.com" className="icon is-large has-text-light">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
