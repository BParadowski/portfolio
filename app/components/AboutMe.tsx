import React from "react";

function AboutMe() {
  return (
    <div className="container text-lg leading-loose" id="about-me">
      <h2 className="text-center text-3xl font-extrabold">About me </h2>
      <div className="mt-10 flex flex-col gap-4 text-justify opacity-50">
        <p>
          I&apos;m a musician holding a master&apos;s degree in viola performance from the Grażyna and Kiejstut Bacewicz
          Academy of Music in Łódź. For the past 6 years, I&apos;ve worked as a freelance studio and concert artist,
          specializing in new music performance. I&apos;ve performed at numerous festivals with ensembles such as{" "}
          <a
            href="https://omn.art.pl/en/"
            className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent"
          >
            Orkiestra Muzyki Nowej
          </a>{" "}
          and{" "}
          <a
            href="https://hashtag-ensemble.org/"
            className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent"
          >
            Hashtag Ensemble
          </a>
          . For more than 5 years, I&apos;ve been a member of{" "}
          <a
            href="https://www.facebook.com/primuzchamberorchestra/"
            className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent"
          >
            Primuz Chamber Orchestra
          </a>{" "}
          with whom I&apos;ve played dozens of concerts and recorded film scores and albums. You can listen to us:{" "}
          <a
            href="https://www.youtube.com/watch?v=5hNdV5Q5EIQ&list=PLBQZMaICTUs3fUHRjKp7oBXWSNHK_-nR_&index=1/"
            className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent"
          >
            &quot;The Aristocrats With Primuz Chamber Orchestra&quot; (progressive rock)
          </a>{" "}
          or{" "}
          <a
            href="https://www.youtube.com/watch?v=hvYOwIEPrLI&list=OLAK5uy_lyiFj4YTow-vCIkeG9rSHe0dq2C343-RE"
            className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-transparent"
          >
            &quot;Grażyna Bacewicz - Music for String Orchestra&quot; (20<span className="align-super text-xs">th</span>{" "}
            century classical).
          </a>{" "}
        </p>
        <p>
          I got into coding right after finishing my bachelor&apos;s degree. I found myself missing the more
          &quot;technical&quot; aspects of my personality. After brief consideration of my options, I landed on web
          development. It quickly proved to be the right choice - I enjoy solving tangible problems and working with
          visuals a lot. Ever since, I&apos;ve been drawn closer to the world of programming, lately exploring backend
          development and cloud environements. Currently, with first freelance experiences under my belt, I&apos;m
          looking forward to growing my skills in large-scale projects and teams.
        </p>
        <p>
          When I&apos;m not making music or coding, I relax consuming art and reading, I might even watch a movie once
          in a blue moon (probably sci-fi). I love playing isometric RPGs (Disco Elysium, Planescape: Torment and the
          like). I dabble in drawing and painting. My other interests include machine learning, the science of longevity
          and plant-based cuisine.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
