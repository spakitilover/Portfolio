import React from "react";
import About from "../../components/about/about";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Intro from "../../components/intro/intro";
import Navbar from "../../components/navbar/navbar";
import Projects from "../../components/projects/projects";
import Skills from "../../components/skills/skills";
import Tracker from "../../components/tracker/tracker";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
