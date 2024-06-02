import Image from "next/image";
import React from "react";

const icons = {
  frontend: {
    HTML: "/icons/icons8-html.svg",
    CSS: "/icons/icons8-css.svg",
    JavaScript: "/icons/icons8-javascript.svg",
    TypeScript: "/icons/icons8-typescript.svg",
    React: "/icons/icons8-react.svg",
    ["Next.js"]: "/icons/icons8-nextjs.svg",
    tailwind: "/icons/icons8-tailwind-css.svg",
  },
  backend: {
    ["Node.js"]: "/icons/icons8-nodejs.svg",
  },
};

function Skills() {
  return (
    <div className="container py-4">
      <div className="">
        <h2 className="text-2xl font-medium tracking-wide">My skills</h2>
        <h3>Frontend</h3>
        <ul className="flex flex-col gap-2">
          {Object.entries(icons.frontend).map(([tech, svgUrl]) => {
            return (
              <li key={tech} className="flex items-center gap-4 rounded-md px-2">
                <img alt="" src={svgUrl} className="h-8 w-8"></img>
                <p className="text-center">{tech}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
