import React from "react";

function Hero() {
  return (
    <div className="container py-4 text-4xl font-medium tracking-wide">
      <p>Hey, I'm Bartosz,</p>
      <p>
        A Full Stack{" "}
        <span className="from-amber-200 to-orange-300 dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent">
          Web Developer
        </span>
      </p>
      <p>
        and <span className="dark:text-teal-200">Musician.</span>
      </p>
    </div>
  );
}

export default Hero;
