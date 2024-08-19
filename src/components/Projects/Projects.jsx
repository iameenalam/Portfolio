import React from "react";
import "./Projects.css";
import Works from "./Works";

const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </section>
  );
};

export default Projects;
