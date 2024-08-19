import ex from "../assets/express.webp";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import jslogo from "../assets/jslogo.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import pgSql from "../assets/pgSql.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/next.svg";

export const navLinks = [
  {
    id: "nav-links-home",
    to: "home",
    name: "Home",
  },
  {
    id: "nav-links-about",
    to: "about",
    name: "About",
  },
  {
    id: "nav-links-experience",
    to: "experience",
    name: "Experience",
  },
  {
    id: "nav-links-projects",
    to: "projects",
    name: "Projects",
  },
  {
    id: "nav-links-testimonials",
    to: "testimonials",
    name: "Testimonials",
  },
  {
    id: "nav-links-contact",
    to: "contact",
    name: "Contact",
  },
];

export const personalDetails = {
  intro: ` MERN stack developer skilled in building dynamic 
           web applications, from frontend to backend. Experienced 
           in creating responsive user experiences with MongoDB, Express, React, and Node.js.`,
  introA: ` Passionate MERN stack developer with a strong foundation in building
          dynamic and responsive web applications. I specialize in creating
          seamless user experiences from frontend to backend, leveraging my
          expertise in MongoDB, Express, React, and Node.js. Dedicated to
          crafting efficient, scalable, and secure solutions tailored to meet
          diverse client needs.`,
  name: "Pallab Biswas",
  role: "Fullstack Developer",
  tech: "MERN Stack",
  introB: `Hello there! I'm Pallab Biswas, a passionate full stack developer 
          specializing in creating dynamic and efficient web applications. With expertise
         in technologies like JavaScript, React, Next.js, Node.js, and more, I bring a deep commitment 
          to building seamless user experiences and powerful backend systems. From frontend design to backend 
         architecture, I take pride in delivering top-notch solutions tailored to your needs.`,
};

export const skils = [
  {
    label: "JavaScript",
    logo: jslogo,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "React Js",
    logo: react,
    url: "https://react.dev/",
  },
  {
    label: "Next Js",
    logo: next,
    url: "https://react.dev/",
  },
  {
    label: "Node JS",
    logo: node,
    url: "https://nextjs.org/",
  },
  {
    label: "Express JS",
    logo: ex,
    url: "https://expressjs.com/",
  },
  {
    label: "MongoDB",
    logo: mongo,
    url: "https://www.mongodb.com/docs/",
  },
  {
    label: "PostgreSQL",
    logo: pgSql,
    url: "https://www.postgresql.org/docs/",
  },
  {
    label: "Tailwind CSS",
    logo: tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: figma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: git,
    url: "https://git-scm.com/doc",
  },
];
