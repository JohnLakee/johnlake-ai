import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import ImpactCards from "@/components/ImpactCards";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <About />
      <Competencies />
      <ImpactCards />
      <Timeline />
      <Education />
      <Principles />
      <Contact />
    </main>
  );
}
