import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AudiophileScreenshot from "@/public/AudiophileHero.png";
import PrimuzScreenshot from "@/public/Primuz-showcase.jpg";
import DesignoScreenshot from "@/public/DesignoHome.png";
import { ProjectSlugs } from "../[project]/projectData";

interface ProjectCardProps {
  project: ProjectSlugs;
}

const projectCardData = {
  audiophile: {
    name: "Audiophile",
    description: "An e-commerce platform.",
    screenshot: AudiophileScreenshot,
    href: "/audiophile",
  },
  primuz: {
    name: "Primuz App",
    description: "A PWA for my chamber orchestra.",
    screenshot: PrimuzScreenshot,
    href: "/primuz",
  },
  designo: {
    name: "Designo",
    description: "A design studio portfolio website.",
    screenshot: DesignoScreenshot,
    href: "/designo",
  },
};

function ProjectCard({ project }: ProjectCardProps) {
  const { href, screenshot, name, description } = projectCardData[project];

  return (
    <Link href={href}>
      <div className="flex flex-col gap-3 rounded-3xl bg-stone-100 p-4 transition hover:scale-105 hover:bg-stone-200">
        <Image alt="" src={screenshot} className="overflow-clip rounded-2xl shadow-xl" />
        <p className="text-xl font-medium leading-snug tracking-widest">{name}</p>
        <p className="tracking-wide opacity-50">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
