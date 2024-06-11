import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="container" id="projects">
      <h2 className="text-center text-3xl font-extrabold">Projects</h2>
      <div className="mt-10 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard project="audiophile" />
        <ProjectCard project="primuz" />
        <ProjectCard project="designo" />
      </div>
    </div>
  );
}

export default Projects;
