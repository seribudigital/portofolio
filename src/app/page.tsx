import Hero from "@/components/sections/Hero";
import CogniEduHighlight from "@/components/sections/CogniEduHighlight";
import Services from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CogniEduHighlight />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
