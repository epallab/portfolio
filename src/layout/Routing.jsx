import React, { useEffect, useState } from "react";
import Section from "./Section";
import Navbar from "./navbar/Navbar";
import Home from "../pages/home/Home";
import About from "./../pages/about/About";
import Experience from "./../pages/experience/Experience";
import Projects from "./../pages/projects/Projects";
import Testimonials from "./../pages/testimonials/Testimonials";
import Contact from "./../pages/contact/Contact";

const Routing = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 5) {
          setActiveSection(section.id);
          window.history.pushState(null, null, `#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };
  return (
    <>
      <Navbar activeSection={activeSection} handleScroll={handleScroll} />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
};

export default Routing;
