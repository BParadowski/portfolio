import React from "react";
import ProjectLink from "../components/ProjectLink";
import Image from "next/image";
import AudiophileHomeDesktop from "@/public/audiophile/audiophile-showcase.jpg";
import AudiophileCheckoutError from "@/public/audiophile/Audiophile-checkout-error.jpeg";
import AudiophileCart from "@/public/audiophile/audiophile-cart.jpeg";

const techList = [
  "Next.js (pages router)",
  "Prisma ORM",
  "React Hook Form",
  "Tanstack Query (React Query)",
  "Zod",
  "SCSS modules",
];

export default function AudiophilePage() {
  return (
    <div className="container my-10 flex flex-col gap-10 lg:gap-16">
      <h1 className="text-3xl font-extrabold tracking-wide lg:text-4xl">Audiophile</h1>

      <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
        <Image
          alt="Audiophile home page screenshot"
          src={AudiophileHomeDesktop}
          className="overflow-clip rounded-xl shadow-md md:col-start-2"
        />
        <div className="md:row-start-1">
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
      <div className="grid grid-flow-col gap-x-10 md:grid-cols-[4fr_5fr]">
        <Image src={AudiophileCheckoutError} alt="" className="rounded-lg shadow-md"></Image>
        <div className="flex flex-col gap-6 md:col-span-2">
          <h2 className="mt-2 text-xl font-bold">Web Stack and motivation</h2>
          <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">
            Going into this project I wanted to explore a few things. One of them was creating forms which display
            descriptive error messages and validate data before sending it for further processing.
          </p>
          <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">
            For this job I chose React Hook Form and Zod. Both have elegant APIs and integrate wonderfully with
            TypeScript which was very important to me. They're also tools wildely used in the industry.
          </p>
          <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">
            I also had a chance to make use of Next.js monorepo architecture - I use one Zod schema on both frontend and
            backend.
          </p>
        </div>
      </div>
    </div>
  );
}
