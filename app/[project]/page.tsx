import React from "react";
import ProjectLink from "../components/ProjectLink";
import Image from "next/image";

import { projectSlugs, projectsData } from "./projectData";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((project) => {
    return { project };
  });
}

// Params are url params so whatever is in file based routes in this case [project] <--- thus project is the variable

export default async function Page({ params }: { params: ReturnType<typeof generateStaticParams>[number] }) {
  const { title, mainDescription, links, heroImage, techstack, details } = projectsData[params.project];

  return (
    <div className="container my-10 flex flex-col gap-10 lg:gap-16">
      <div>
        <h1 className="text-3xl font-extrabold tracking-wide lg:text-4xl">{title}</h1>
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          <Image
            alt="Audiophile home page screenshot"
            src={heroImage}
            className="overflow-clip rounded-xl shadow-md md:col-start-2"
          />
          <div className="md:row-start-1">
            <p
              className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: mainDescription }}
            />
            <div className="mt-6 flex gap-4">
              {links.map(({ type, url }) => {
                return <ProjectLink type={type} href={url} />;
              })}
            </div>
            <h2 className="mt-8 text-lg font-bold">Techstack</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {techstack.map((tech) => {
                return (
                  <li
                    className="flex items-center opacity-50 before:mr-2 before:block before:h-3 before:w-3 before:rounded-full before:bg-stone-200"
                    key={tech}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="col-start-2 mb-10 mt-2 self-end text-3xl font-bold">Project Details</h2>
        <div className="flex flex-col gap-12">
          {details.map(({ title, paragraphs, image }) => {
            return (
              <div className="group grid items-center gap-x-10 gap-y-6 md:grid-cols-[4fr_5fr] md:gap-y-0 even:md:grid-cols-[5fr_4fr]">
                <h2 className="col-start-2 mt-2 self-end text-xl font-bold group-even:col-start-1 md:mt-0">{title}</h2>
                <Image
                  src={image}
                  alt=""
                  className="row-span-2 row-start-1 rounded-lg shadow-md group-even:col-start-2"
                ></Image>
                <div className="flex flex-col gap-6 self-start md:mt-4">
                  {paragraphs.map((text) => {
                    return <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">{text}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
