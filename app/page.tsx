import About from "@/components/about";
import Books from "@/components/books";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex relative flex-col items-center px-4 snap-y snap-mandatory">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Books /> 
      <Contact />
    </main>
  );
}
