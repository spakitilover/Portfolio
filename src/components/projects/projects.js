import React from "react";
import image2 from "./../images/ecm.png";
import image3 from "./../images/image2.png";
import image4 from "./../images/image3.jpg";
import anim from "./../images/anim.png";
import { Link, useNavigate } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";

import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

import "swiper/css";

const Projects = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const router = useNavigate();

  return (
    <div className="w-full h-auto bg-gray-700 " id="projects">
      <h1 className="flex justify-center">
        <h1 className="text-4xl my-16  font-bold bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent">
          LATEST PROJECTS
        </h1>
      </h1>
      <div className="w-full h-auto flex justify-center p-10">
        <div className="lg:flex justify-center lg:flex-wrap lg:gap-10 lg:w-[1200px] mb-24 ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className="lg:w-[550px] lg:h-[300px] w-full h-[300px] rounded-lg text-center flex items-center justify-center "
          >
            <div className="">
              <h1 className="text-5xl bg-gradient-to-r from-yellow-500 to-gray-200 bg-clip-text text-transparent">
                MY LATEST WORCK
              </h1>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="image-container "
          >
            <motion.img src={image2} className="image" />
            <div className="over">
              <div className="detail">
                <h1 className="text-4xl opacity-100">Full Stack Project</h1>
                <h1 className="my-2"> Ecommerce Web Site</h1>
                <button
                  className="hover:text-gray-900 duration-500 flex items-center gap-2"
                  onClick={() =>
                    router("//github.com/spakitilover/E-Commerce-Shop")
                  }
                >
                  <GitHub />
                  GitHub
                  <ArrowRightAlt />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="image-container "
          >
            <motion.img src={image3} className="image" />
            <div className="over">
              <div className="detail">
                <h1 className=" text-4xl">Full Stack Project</h1>
                <h1 className="my-2">Social Media App</h1>
                <button
                  className="hover:text-gray-900 duration-500 flex items-center gap-2"
                  onClick={() =>
                    router("//github.com/spakitilover/Social-Media-App")
                  }
                >
                  {" "}
                  <GitHub />
                  GitHub
                  <ArrowRightAlt />
                </button>
              </div>
            </div>
          </motion.div>{" "}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="image-container "
          >
            <motion.img src={image4} className="image" />
            <div className="over">
              <div className="detail">
                <h1 className="text-4xl">Full Stack Project</h1>
                <h1 className="my-2">Music Player App </h1>
                <button
                  className="hover:text-gray-900 duration-500 flex items-center gap-2"
                  onClick={() =>
                    router("//github.com/spakitilover/Music-Player")
                  }
                >
                  {" "}
                  <GitHub />
                  GitHub
                  <ArrowRightAlt />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
