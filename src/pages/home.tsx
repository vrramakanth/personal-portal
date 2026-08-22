import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Journey } from "@/components/portfolio/journey";
import { Initiatives } from "@/components/portfolio/initiatives";
import { Recognition } from "@/components/portfolio/recognition";
import { Talks } from "@/components/portfolio/talks";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Initiatives />
      <Recognition />
      <Talks />
      <Contact />
    </div>
  );
}
