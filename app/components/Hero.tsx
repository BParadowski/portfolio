import React from "react";
import Image from "next/image";
import Portrait from "@/public/square.jpeg";

function Hero() {
  return (
    <div className="bg-white">
      <div className="container isolate rounded-2xl">
        <div className="grid place-items-center gap-y-8 md:grid-cols-2 md:gap-y-4">
          <div className="min-w-full text-3xl font-medium tracking-wide md:self-end md:text-4xl">
            <p className="text-center leading-normal md:text-start">
              Bartosz Paradowski
              <p className="text-xl">
                A Full Stack{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Web Developer
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Musician
                </span>
              </p>
            </p>
          </div>
          <Image
            alt=""
            src={Portrait}
            className="bg-left-[10rem] max-w-80 rounded-full md:col-start-2 md:row-span-2 md:row-start-1"
          />
          <div className="flex flex-col items-center gap-8 self-center pt-4 text-center md:col-start-1 md:items-start md:self-auto md:text-start">
            <p className="max-w-prose text-lg leading-relaxed opacity-50">
              I enjoy bringing beautiful UIs to life and creating typesafe, reliable applications with React. I&apos;m
              looking for opportunities to enter the industry!
            </p>
            <a
              href="/#contact"
              className="flex w-fit items-center gap-3 rounded-md border border-amber-300 bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-xl font-bold text-white hover:scale-105"
            >
              Contact me <img src="/right-arrow.svg" alt="" className="block h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
