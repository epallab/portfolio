import React from "react";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
