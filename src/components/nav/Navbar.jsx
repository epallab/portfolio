import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ThemeToggle from "../theme/ThemeToggle";
import { Link } from "react-scroll";
import { FaCodeMerge } from "react-icons/fa6";
import { navLinks } from "../../utilities/Data";
import { AnimatePresence, motion } from "framer-motion";
import PrimaryBtn from "./../buttons/PrimaryBtn";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="navbar-main">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          // offset={-60}
          hashSpy={true}
          isDynamic={true}
        >
          <div className="brand d-flex">
            <span
              className="d-flex"
              style={{ fontSize: "22px", color: "var(--secondary-color)" }}
            >
              <FaCodeMerge />
            </span>
            <h4
              className="d-flex"
              style={{
                margin: "0px",
                padding: "0px",
                color: "var(--secondary-color)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {" <PB/>"}
            </h4>
          </div>
        </Link>
        <div className="nav-link">
          {navLinks?.map((item, id) => (
            <Link
              key={item?.id}
              to={item?.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              hashSpy={true}
              isDynamic={true}
              activeClass="nav-btns-active"
              className="nav-btns"
            >
              {item?.name}
            </Link>
          ))}
          <ThemeToggle />
          <div style={{ margin: "0px 10px", fontSize: ".9em" }}>
            <PrimaryBtn name={"Download CV"} padding={"6px 15px"} />
          </div>
        </div>
        <div className="mob-nav-toggle">
          <label className="burger" htmlFor="burger">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={toggle}
              name="burger"
              id="burger"
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="nav-link-mobile">
                {navLinks?.map((item) => (
                  <Link
                    key={item?.id}
                    to={item?.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-60}
                    hashSpy={true}
                    isDynamic={true}
                    activeClass="nav-btns-active"
                    className="nav-btns"
                    onClick={() => setToggle(false)} // Close menu on click
                  >
                    {item?.name}
                  </Link>
                ))}
                <div className="bar"></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".9em",
                      fontWeight: 500,
                      color: "var(--primary-color)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    Switch Theme
                  </span>
                  <ThemeToggle />
                </div>
                <div style={{ margin: "10px 0px" }}>
                  <PrimaryBtn
                    name={"Download CV"}
                    padding={"8px 0px"}
                    bgColor={"var(--primary-color)"}
                    color={"var(--background-color)"}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
