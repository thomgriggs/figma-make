import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}