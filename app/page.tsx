import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/contact-form/ContactForm";

export default function Home() {
  return (
    <main>
      <div className="my-10 grid gap-y-20 md:gap-y-24 xl:gap-y-32">
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
      </div>
    </main>
  );
}
