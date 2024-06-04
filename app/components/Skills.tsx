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
    <div className="container">
      <div className="">
        <h2 className="text-center text-3xl font-extrabold tracking-wide">My skills</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3">
          {Object.keys(icons).map((techKind) => {
            return (
              <div>
                <h3 className="font-semibold capitalize">{techKind}</h3>
                <ul className="mt-2 flex flex-col gap-2">
                  {Object.entries(icons[techKind as TechKind]).map(([tech, svgUrl]) => {
                    return (
                      <li key={tech} className="flex items-center gap-4 rounded-md px-2">
                        <img alt="" src={svgUrl} className="h-8 w-8"></img>
                        <p className="text-center">{tech}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
