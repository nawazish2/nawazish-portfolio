import {
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="container mx-auto max-w-2xl px-4 md:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}