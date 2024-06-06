import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/contact-form/ContactForm";

export default function Home() {
  return (
    <main>
      <div className="my-10 grid gap-y-16 lg:gap-y-24">
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <ContactForm />
      </div>
    </main>
  );
}
