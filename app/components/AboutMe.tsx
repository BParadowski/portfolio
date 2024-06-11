import React from "react";

function AboutMe() {
  return (
    <div className="container text-lg leading-loose">
      <h2 className="text-center text-3xl font-extrabold">About me </h2>
      <div className="mt-10 flex flex-col gap-4 text-justify opacity-50">
        <p>
          I&apos;m a musician currently pursuing masters degree in viola performance which I am expecting to finish this
          fall. I&apos;ve been working as a freelance studio and concert artist for the last 5 years. I specialise in
          new music performance - I&apos;ve performed on numerous festivals with ensembles like Orkiestra Muzyki Nowej
          and Hashtag Ensemble. For more than 4 years I&apos;ve been a member of Primuz Chamber Orchestra with which
          I&apos;ve performed dozens of concerts and recorded filmscores and albums. You can listen to me here.
        </p>
        <p>
          I got into coding right after finishing my bachelors degree. I found myself missing the more "technical"
          aspects of my personality. After brief consideration of my options I landed on Web Development. It quickly
          proved to be the right choice - I find being able to solve real problems and working with visuals very
          satisfying.
        </p>
        <p>
          I&apos;m a fan of sci-fi art, books and movies. I love isometric RPGs (Disco Elysium, Planescape: Torment and
          the like). I&apos;m fascinated by the science of longevity and healthspan. My other interests include
          linguistics, drawing and plant-based cuisine.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
