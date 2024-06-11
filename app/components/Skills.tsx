import Image from "next/image";
import React from "react";

const icons = {
  frontend: {
    HTML: "/icons/icons8-html.svg",
    CSS: "/icons/icons8-css.svg",
    JavaScript: "/icons/icons8-javascript.svg",
    TypeScript: "/icons/icons8-typescript.svg",
    React: "/icons/icons8-react.svg",
    Tailwind: "/icons/icons8-tailwind-css.svg",
  },
  backend: {
    ["Node.js"]: "/icons/icons8-nodejs.svg",
    Express: "/icons/icons8-express-js.svg",
    ["Next.js"]: "/icons/icons8-nextjs.svg",
    ["Prisma ORM"]: "/icons/icons8-prisma-orm.svg",
    Supabase: "/icons/supabase-logo-icon.svg",
  },
  tools: {
    Git: "/icons/icons8-git.svg",
    Figma: "/icons/icons8-figma.svg",
    Playwright: "/icons/logos-playwright.svg",
  },
} as const;

type TechKind = keyof typeof icons;

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="">
        <h2 className="text-center text-3xl font-extrabold tracking-wide">My skills</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3">
          {Object.keys(icons).map((techKind, i) => {
            return (
              <div
                className={`rounded-3xl border p-4 ${i === 2 ? "col-span-2 w-1/2 justify-self-center md:col-span-1 md:w-auto md:justify-self-auto" : ""}`}
                key={techKind}
              >
                <h3 className="font-semibold capitalize">{techKind}</h3>
                <ul className="mt-2 flex flex-col gap-2">
                  {Object.entries(icons[techKind as TechKind]).map(([tech, svgUrl]) => {
                    return (
                      <li key={tech} className="flex items-center gap-4 rounded-md">
                        <img alt="" src={svgUrl} className="h-8 w-8"></img>
                        <p>{tech}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col items-center gap-6">
          <h3 className="text-center font-semibold">Currently learning</h3>
          <div className="flex w-fit items-center gap-6 rounded-full bg-stone-100 px-4 py-4 shadow-md">
            <div className="rounded-full bg-white p-2">
              <img src="/icons/icons8-docker.svg" className="translate-x-1" />
            </div>
            <p className="text-balance">Basics of Docker and container architecture</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
