import React, { useState } from "react";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import TaskAlt from "@mui/icons-material/TaskAlt";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

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

  const router = useNavigate();

  const handlEmailSend = () => {
    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        {
          fullname,
          email,
          message,
        },
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setSent(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div
      className="w-full h-auto flex justify-center bg-gradient-to-r from-gray-700 to-gray-800"
      id="contact"
    >
      <div className="lg:flex md:flex justify-center gap-10">
        <div className="">
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
              <div className="flex justify-center my-1 p-2">
                <span className=" text-white">tarik.kabaki2000@gmail.com</span>
              </div>

              <div className="flex justify-center items-center gap-1 my-3 ">
                <button className="text-rose-500 hover:text-green-500 duration-300">
                  +212 669-105672
                </button>
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
                <button
                  className="text-rose-500 hover:text-green-500 duration-300"
                  onClick={() =>
                    router("//www.linkedin.com/in/tarik-kabaki-90a595233/")
                  }
                >
                  Check Out
                </button>
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
                <button
                  className="text-rose-500 hover:text-green-500 duration-300"
                  onClick={() => router("//github.com/spakitilover")}
                >
                  Check Out
                </button>
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
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="my-5">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="p-5 lg:w-[500px] bg-inherit border-2 border-gray-200 rounded-lg bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent text-xl"
                />
              </div>
              <div className="my-5">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  className="p-5 lg:w-[500px] lg:h-[150px] resize-none bg-inherit border-2 border-gray-200 rounded-lg bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-text text-transparent text-xl"
                />
              </div>
              <button
                onClick={handlEmailSend}
                className="border-2 border-white text-white p-4 rounded-lg hover:text-orange-500 duration-300"
              >
                Send Message
              </button>
            </div>
            {sent ? (
              <div className="text-green-500 flex items-center gap-3">
                <TaskAlt />
                <span>Message Sent Successfully !</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
