import React from "react";

function Hero() {
  return (
    <div className="container py-4">
      <div className="text-4xl font-medium leading-tight tracking-wide">
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
      <p className="max-w-md pt-2 text-xl font-medium opacity-50">
        I enjoy bringing beautiful UIs to life and creating typesafe, reliable applications with React.
      </p>
    </div>
  );
}

export default Hero;
