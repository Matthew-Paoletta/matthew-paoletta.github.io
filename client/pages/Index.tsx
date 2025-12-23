import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Contact />
    </div>
  );
}
