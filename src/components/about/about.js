import React from "react";
import LaptopMac from "@mui/icons-material/LaptopMac";
import Code from "@mui/icons-material/Code";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const router = useNavigate();

  return (
    <div className="h-auto w-full bg-gray-100">
      <div className=" flex justify-center">
        <div className="w-full h-auto  p-20">
          <div className="flex justify-center text-4xl font-bold text-orange-600 animate-bounce">
            MY SERVICES
          </div>
          <div className="flex justify-center">
            <div className="lg:flex lg:justify-center md:flex md:justify-center my-16 lg:gap-10 md:gap-5  ">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="lg:w-[280px] lg:h-[300px] md:w-[200px] md:h-[280px] w-[250px] h-[280px] bg-gray-200 hover:bg-purple-500  duration-500 lg:p-10 p-10 my-10 rounded-2xl"
              >
                <div className="border-2 borde-white w-[50px] h-[50px] bg-gradient-to-r from-pink-500 to-yellow-500 flex justify-center items-center rounded-full">
                  <LaptopMac className="text-white " />
                </div>
                <h1 className="my-10 lg:text-2xl text-blue-900 lg:w-[100px] w-[50px]">
                  UI/UX Integrator
                </h1>
                <span
                  onClick={() =>
                    router(
                      "//bootcamp.uxdesign.cc/what-is-ui-ux-designing-b07c47c44939"
                    )
                  }
                  className="animate-pulse text-purple-800 hover:text-white duration-300 cursor-pointer"
                >
                  Read More
                  <ArrowRightAlt />
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="lg:w-[280px] lg:h-[300px] md:w-[200px] md:h-[280px] w-[250px] h-[280px] bg-gray-200 lg:p-10 p-10 rounded-2xl hover:bg-purple-500 my-10  duration-500"
              >
                <div className="border-2 borde-white w-[50px] h-[50px] bg-gradient-to-r from-pink-500 to-yellow-500 flex justify-center items-center rounded-full">
                  <Code className="text-white" />
                </div>
                <h1 className="my-10 lg:text-2xl text-blue-900 lg:w-[150px] ">
                  Front End Development.
                </h1>
                <span
                  onClick={() =>
                    router("//www.coursera.org/articles/front-end-developer")
                  }
                  className="animate-pulse text-purple-800 hover:text-white duration-300 cursor-pointer"
                >
                  Read More
                  <ArrowRightAlt />
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                className="lg:w-[280px] lg:h-[300px] md:w-[200px] md:h-[280px] w-[250px] h-[280px] bg-gray-200 lg:p-10 p-10  rounded-2xl hover:bg-purple-500 my-10  duration-500"
              >
                <div className="border-2 borde-white w-[50px] h-[50px] bg-gradient-to-r from-pink-500 to-yellow-700 flex justify-center items-center rounded-full">
                  <Code className="text-white" />
                </div>
                <h1 className="my-10 lg:text-2xl text-blue-900 lg:w-[150px]">
                  Back End Development.
                </h1>
                <span
                  onClick={() =>
                    router("//www.coursera.org/articles/back-end-developer")
                  }
                  className="animate-pulse text-purple-800 hover:text-white duration-300 cursor-pointer"
                >
                  Read More
                  <ArrowRightAlt />
                </span>
              </motion.div>
            </div>
          </div>

          <div className="lg:flex lg:justify-center md:flex md:justify-center ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.8 }}
              className=" lg:w-[900px] lg:h-[300px] md:w-[700px] md:h-[300px] w-full h-[400px] bg-gradient-to-r from-rose-500 to-yellow-500  rounded-2xl lg:flex lg:p-14 md:p-5 p-3 lg:items-center md:flex md:items-center flex-none"
            >
              <div className="flex justify-center">
                <div className="border-2  my-10 lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-gray-100 lg:flex lg:items-center lg:justify-center flex items-center justify-center rounded-full">
                  <span className=" text-purple-700 lg:text-9xl md:text-6xl text-4xl my-5">
                    4+
                  </span>
                </div>
              </div>

              <span className="text-purple-700 text-2xl lg:m-8 md:m-8 flex justify-center">
                Years In Field
              </span>
              <div className="flex justify-center my-10">
                <span className="w-[300px] text-lg text-white flex justify-center text-center ">
                  Full Stack Web Developer , And UI/UX Integrator
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
