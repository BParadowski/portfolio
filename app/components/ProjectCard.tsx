import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  imageSrc: StaticImageData;
  href: string;
}

function ProjectCard({ name, description, imageSrc, href }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col gap-3 rounded-3xl bg-zinc-100 p-4 transition hover:scale-105 hover:bg-zinc-200">
        <Image alt="" src={imageSrc} className="overflow-clip rounded-2xl shadow-xl" />
        <p className="text-xl font-medium leading-snug tracking-widest">{name}</p>
        <p className="tracking-wide opacity-50">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
