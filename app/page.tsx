import {
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  BlogPreview,
  Contact,
} from "@/components/sections";
import { getLatestPosts } from "@/lib/blog";

export default function Home() {
  let latestPosts: ReturnType<typeof getLatestPosts> = [];
  
  try {
    latestPosts = getLatestPosts(3);
  } catch (error) {
    console.error("Error loading posts:", error);
  }

  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <BlogPreview posts={latestPosts} />
    </div>
  );
}
