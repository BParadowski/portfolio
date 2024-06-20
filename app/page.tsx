import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
        <Skills />
        <Projects />
        <div className="grid gap-y-20 md:gap-y-24 xl:gap-y-32">
          <AboutMe />
        </div>
      </div>
    </main>
  );
}
