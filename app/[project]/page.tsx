import React from "react";
import ProjectLink from "../components/ProjectLink";
import Image from "next/image";

import { projectSlugs, projectsData } from "./projectData";
import ProjectCard from "../components/ProjectCard";

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
        <div className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-2">
          <Image
            alt="Audiophile home page screenshot"
            src={heroImage}
            className="overflow-clip rounded-xl shadow-md lg:col-start-2"
          />
          <div className="lg:row-start-1">
            <p
              className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: mainDescription }}
            />
            {links.length > 0 && (
              <div className="mt-6 flex gap-4">
                {links.map(({ type, url }) => {
                  return <ProjectLink type={type} href={url} key={url} />;
                })}
              </div>
            )}
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
      {details.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-10 self-end text-3xl font-bold">Project Details</h2>
          <div className="flex flex-col gap-16 md:gap-20 xl:gap-28">
            {details.map(({ title, paragraphs, image }) => {
              return (
                <div
                  className="group grid items-center gap-x-10 gap-y-6 md:grid-cols-[4fr_5fr] md:gap-y-0 even:md:grid-cols-[5fr_4fr]"
                  key={title}
                >
                  <h2 className="mt-2 self-end text-xl font-bold md:col-start-2 md:mt-0 md:group-even:col-start-1">
                    {title}
                  </h2>
                  <Image
                    src={image}
                    alt=""
                    className="rounded-lg shadow-md md:row-span-2 md:row-start-1 md:group-even:col-start-2"
                  ></Image>
                  <div className="flex flex-col gap-6 self-start md:mt-4">
                    {paragraphs.map((text) => {
                      return (
                        <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed" key={text}>
                          {text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="mt-10">
        <h2 className="mb-10 self-end text-3xl font-bold">Other projects</h2>
        <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectSlugs
            .filter((slug) => slug !== params.project)
            .map((projectName) => {
              return <ProjectCard project={projectName} key={projectName} />;
            })}
        </div>
      </div>
    </div>
  );
}
