import React from "react";
import ProjectCard from "./ProjectCard";

import AudiophileScreenshot from "@/public/AudiophileHero.png";
import PrimuzScreenshot from "@/public/Primuz-showcase.jpg";
import DesignoScreenshot from "@/public/DesignoHome.png";

function Projects() {
  return (
    <div className="container">
      <h2 className="text-center text-3xl font-extrabold">Projects</h2>
      <div className="mt-10 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard name="Audiophile" description="An e-commerce platform." imageSrc={AudiophileScreenshot} />
        <ProjectCard name="Primuz App" description="A PWA for my chamber orchestra." imageSrc={PrimuzScreenshot} />
        <ProjectCard name="Designo" description="A design studio portfolio website." imageSrc={DesignoScreenshot} />
      </div>
    </div>
  );
}

export default Projects;
