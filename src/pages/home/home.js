import React, { useContext } from "react";
import About from "../../components/about/about";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Intro from "../../components/intro/intro";
import Navbar from "../../components/navbar/navbar";
import Projects from "../../components/projects/projects";
import Skills from "../../components/skills/skills";
import Tracker from "../../components/tracker/tracker";
import AboutMe from "../../components/about me/aboutMe";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const Home = () => {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <div
          className={
            theme ? `bg-gray-100 duration-500` : " bg-[#171717] duration-500"
          }
        >
          <Intro />
          <AboutMe />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Home;
