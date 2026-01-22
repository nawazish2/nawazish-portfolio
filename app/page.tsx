import {
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  Contact,
} from "@/components/sections";
import { BlueprintBackground } from "@/components/effects/BlueprintBackground";

export default function Home() {
  return (
    <BlueprintBackground>
      <main className="container mx-auto max-w-5xl px-6 md:px-10 pt-24 md:pt-28 pb-10 md:pb-14 space-y-20 md:space-y-28">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </BlueprintBackground>
  );
}