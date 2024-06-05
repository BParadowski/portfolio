import React, { BaseHTMLAttributes } from "react";

interface ProjectLinkProps extends BaseHTMLAttributes<HTMLAnchorElement> {
  type?: "demo" | "github";
}

export default function ProjectLink({ type = "demo", ...props }: ProjectLinkProps) {
  return (
    <a
      className="flex w-fit items-center gap-3 rounded-full bg-stone-100 px-4 py-2 hover:scale-105 hover:bg-stone-200"
      {...props}
    >
      {type === "github" ? (
        <>
          <img src="/icons/icons8-github.svg" className="h-6 w-6" /> <span>View code</span>
        </>
      ) : (
        <>
          <img src="/icons/icons8-link.svg" className="h-6 w-6" /> <span>View website</span>
        </>
      )}
    </a>
  );
}
