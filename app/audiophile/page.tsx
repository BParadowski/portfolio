import React from "react";
import ProjectLink from "../components/ProjectLink";
import Image from "next/image";
import AudiophileHomeDesktop from "@/public/audiophile/audiophile-showcase.jpg";

const techList = ["Next.js (pages router)", "Tanstack Query (React Query)", "Prisma ORM", "Zod", "SCSS modules"];

export default function AudiophilePage() {
  return (
    <div className="container my-10">
      <h1 className="text-3xl font-extrabold tracking-wide lg:text-4xl">Audiophile</h1>

      <div className="mt-8 grid gap-x-6 gap-y-6 lg:grid-cols-2">
        <Image
          alt="Audiophile home page screenshot"
          src={AudiophileHomeDesktop}
          className="overflow-clip rounded-xl lg:col-start-2"
        />
        <div className="lg:row-start-1">
          <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">
            Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make mine
            about something close to me - sound. The website is based on a Figma design by Frontend Mentor
            <span className="align-super text-xs">TM</span>. It features a REST API, cart with server state management
            and a complex order form with data validation on both frontend and backend.
          </p>
          <div className="mt-6 flex gap-4">
            <ProjectLink href="https://audiophile-ashy-rho.vercel.app" type="demo" />
            <ProjectLink href="https://github.com/BParadowski/audiophile" type="github" />
          </div>
          <h2 className="mt-8 text-lg font-bold">Techstack</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {techList.map((tech) => {
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
  );
}
