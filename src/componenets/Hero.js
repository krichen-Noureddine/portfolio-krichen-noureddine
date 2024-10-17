import React from "react";

const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="/img/me-big.jpg" // Ensure the image path is correct
                  alt="Profile"
                />
              </figure>
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
              <h1 className="title is-1">KRICHEN Noureddine</h1>
              <h2 className="subtitle">Software Developer</h2>
              <p>
                <a href="/docs/resume.pdf" className="icon has-text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-pdf"></i> {/* Font Awesome PDF icon */}
                  <strong> Resume</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
