import React from "react";
import ProjectLink from "../components/ProjectLink";
import Image from "next/image";
import AudiophileHomeDesktop from "@/public/audiophile/audiophile-showcase.jpg";
import AudiophileCheckoutError from "@/public/audiophile/checkout-error.jpeg";
import AudiophileCart from "@/public/audiophile/audiophile-cart.jpeg";
import Headphones from "@/public/audiophile/headphones.jpeg";

const techList = [
  "Next.js (pages router)",
  "Prisma ORM",
  "React Hook Form",
  "Tanstack Query (React Query)",
  "Zod",
  "SCSS modules",
];

const details = [
  {
    title: "Framework choice",
    paragraphs: [
      "I chose Next.js for this project because it provides SSR which is key for search engine positioning and reaching customers. I also made use of its SSG capabilities - product and category (speakers, headphones etc.) pages are generated at build time from data in the DB. Adding a new product would be as easy as putting it in the database and revalidating these paths. Lastly - monorepo architecture of Next.js allowed me to share types between frontend and backend.",
    ],
    image: Headphones,
  },
  {
    title: "Checkout and order placement",
    paragraphs: [
      "I wanted the checkout form to provide users with descriptive error messages and validate data before sending it for further processing.",
      "For this job I chose React Hook Form and Zod. Both have elegant APIs and integrate wonderfully with TypeScript. They're also tools wildely used in the industry.",
    ],
    image: AudiophileCheckoutError,
  },
] as const;

export default function AudiophilePage() {
  return (
    <div className="container my-10 flex flex-col gap-10 lg:gap-16">
      <div>
        <h1 className="text-3xl font-extrabold tracking-wide lg:text-4xl">Audiophile</h1>

        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
          <Image
            alt="Audiophile home page screenshot"
            src={AudiophileHomeDesktop}
            className="overflow-clip rounded-xl shadow-md md:col-start-2"
          />
          <div className="md:row-start-1">
            <p className="max-w-prose text-justify text-lg opacity-50 lg:leading-relaxed">
              Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make
              mine about something close to me - sound. The website is based on a Figma design by Frontend Mentor
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
