import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl font-medium tracking-wide md:text-4xl">
          <p className="leading-normal">
            Hey, I'm Bartosz.
            <br />A Full Stack{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Web Developer
            </span>
            <br />
            and{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Musician.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-4">
          <p className="max-w-prose text-lg leading-relaxed opacity-50">
            I enjoy bringing beautiful UIs to life and creating typesafe, reliable applications with React. I'm looking
            for opportunities to enter the industry!
          </p>
          <a
            href="/#contact"
            className="flex w-fit items-center gap-3 self-center rounded-md border border-amber-300 bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-xl font-bold text-white hover:scale-105"
          >
            Get in touch <img src="/right-arrow.svg" alt="" className="block h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
