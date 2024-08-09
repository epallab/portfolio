import React, { useEffect, useState } from "react";

const ScrollComponent = () => {
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
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <div>
      <nav style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <button
          className={activeSection === "section1" ? "active" : ""}
          onClick={() => handleScroll("section1")}
        >
          Section 1
        </button>
        <button
          className={activeSection === "section2" ? "active" : ""}
          onClick={() => handleScroll("section2")}
        >
          Section 2
        </button>
        <button
          className={activeSection === "section3" ? "active" : ""}
          onClick={() => handleScroll("section3")}
        >
          Section 3
        </button>
      </nav>

      <section
        id="section1"
        style={{ height: "50vh", background: "lightblue" }}
      >
        <h2>Section 1</h2>
      </section>
      <section
        id="section2"
        style={{ height: "140vh", background: "lightgreen" }}
      >
        <h2>Section 2</h2>
      </section>
      <section
        id="section3"
        style={{ height: "140vh", background: "lightcoral" }}
      >
        <h2>Section 3</h2>
      </section>
    </div>
  );
};

export default ScrollComponent;
