import React from "react";
import ProjectLink from "../components/ProjectLink";

export default function AudiophilePage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-extrabold tracking-wide">Audiophile</h1>
      <p className="text-lg opacity-50">
        Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make mine
        about something close to me. This website is based on a Figma design by Frontend Mentor
        <span className="align-super text-sm">TM</span>. It features a REST API, cart with server state management and a
        complex order form with data validation on both frontend and backend.
      </p>
      <ProjectLink href="https://audiophile-ashy-rho.vercel.app" type="demo" />
      <ProjectLink href="/" type="github" />
    </div>
  );
}
