import React from "react";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
  const cardVariants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,

      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className="w-full h-auto bg-gradient-to-r from-gray-700 to-gray-800"
      id="contact"
    >
      <div className="flex justify-center gap-10">
        <div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="lg:w-[250px] lg:h-[180px] bg-gray-600 hover:bg-gray-900 duration-200  rounded-2xl flex justify-center items-center my-10"
          >
            <div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center my-3 w-[40px] h-[40px] bg-white rounded-full">
                  <EmailOutlined className=" text-black" />
                </div>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">Email</span>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">herogame1970@gmail.com</span>
              </div>
              <div className="flex justify-center items-center gap-1 my-3">
                <button className="text-rose-500">Contact Me </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="lg:w-[250px] lg:h-[180px] bg-gray-600 hover:bg-gray-900 duration-300  rounded-2xl flex justify-center items-center my-10"
          >
            <div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center my-3 w-[40px] h-[40px] bg-white rounded-full">
                  <LinkedIn className=" text-black" />
                </div>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">Linkedin</span>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">Tarik Kabaki</span>
              </div>
              <div className="flex justify-center items-center gap-1 my-3">
                <button className="text-rose-500">Contact Me </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="lg:w-[250px] lg:h-[180px] bg-gray-600 hover:bg-gray-900 duration-300 rounded-2xl flex justify-center items-center my-10"
          >
            <div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center my-3 w-[40px] h-[40px] bg-white rounded-full">
                  <GitHub className=" text-black" />
                </div>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">GitHub</span>
              </div>
              <div className="flex justify-center my-1">
                <span className=" text-white">Tarik Kabaki</span>
              </div>
              <div className="flex justify-center items-center gap-1 my-3">
                <button className="text-rose-500">Contact Me</button>
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <div className="p-10">
            <span className="text-gray-100 ">Get in Touch.</span>
            <h1 className="text-white text-4xl my-3">Contact Me</h1>
            <div className="my-16">
              <div className="my-5 ">
                <input
                  className="p-5 lg:w-[500px] bg-inherit border-2 border-gray-200 rounded-lg bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent text-xl
                  
                  "
                  placeholder="Your Full Name"
                />
              </div>
              <div className="my-5">
                <input
                  placeholder="Your Email"
                  className="p-5 lg:w-[500px] bg-inherit border-2 border-gray-200 rounded-lg bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent text-xl"
                />
              </div>
              <div className="my-5">
                <textarea
                  placeholder="Your Message"
                  className="p-5 lg:w-[500px] lg:h-[150px] resize-none bg-inherit border-2 border-gray-200 rounded-lg bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent text-xl"
                />
              </div>
              <button className="my-5 border-2 border-white text-white p-4 rounded-lg hover:text-orange-500 duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
