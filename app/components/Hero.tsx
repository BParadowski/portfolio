import React from "react";

function Hero() {
  return (
    <div className="container py-4">
      <div className="text-4xl font-medium leading-normal tracking-wide">
        <p>Hey, I'm Bartosz.</p>
        <p>
          A Full Stack{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Web Developer
          </span>
        </p>
        <p>
          and{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Musician.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-8 pt-2">
        <p className="max-w-md text-lg leading-relaxed opacity-50">
          I enjoy bringing beautiful UIs to life and creating typesafe, reliable applications with React. I'm looking
          for opportunities to enter the industry!
        </p>
        <a
          href="/#contact"
          className="w-fit rounded-md border border-amber-300 bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-xl font-bold text-white"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Hero;
