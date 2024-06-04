import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main>
      <div className="grid gap-y-16 lg:gap-y-24">
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
    </main>
  );
}
